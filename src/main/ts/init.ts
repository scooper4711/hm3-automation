import { ActiveEffectDataConstructorData, CoreFlags } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs/activeEffectData"
import { EffectChangeDataConstructorData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs/effectChangeData"
import { HarnMasterActor } from "../../../hm3/actor/actor"
/**
 * Based on the rollResult, increase fatigue.
 * @param {HarnMasterActor} actor The actor doing the spell casting
 * @param {rollResult} rollResult The result of the roll
 * @param {rollData} rollData The target for the roll
 * @param {HarnMasterItem} item The spell being cast
 */
function onSpellRoll(actor: HarnMasterActor, rollResult, rollData, item) {
  if (game instanceof Game) {
    console.debug("HM3 Automation | onSpellRoll")
    console.debug("HM3 Automation | actor", actor)
    console.debug("HM3 Automation | rollResult", rollResult)
    console.debug("HM3 Automation | rollData", rollData)
    console.debug("HM3 Automation | item", item)
    let speaker = rollData.speaker
    console.debug("HM3 Automation | speaker", speaker)
    let fatigue = "0"
    let result = ''
    switch (rollResult.result) {
      case 'CS':
        fatigue = "0";
        result = "Mage creates a perfect <em>Form</em> that costs no fatigue";
        break;
      case 'MS':
        fatigue = "+1";
        result = "Mage fine-tunes the <em>Form</em>, causing fatigue";
        break;
      case 'MF':
        fatigue = "+1";
        result = "Mage creates a <em>Form</em> but it is not suited for the spell. Aborting the spell costs fatigue";
        break;
      case 'CF':
        fatigue = "+2";
        result = "The <em>Principle</em> is summoned into a faulty <em>Form</em> which could not be repaired. <br/><i>Optionally roll on critical spell failure table.</i>";
        break;
      default:
        fatigue = "0";
        result = `Unknown roll result ${rollResult.result}`;
    }
    console.debug("HM3 Automation | result", result)
    game.hm3.macros.changeFatigue(fatigue, actor);
    ChatMessage.create({
      user: game.userId,
      speaker: speaker,
      content: result
    }, {})
  } else {
    throw new Error('game not initialized yet!');
  }
}

/**
 * If the actor fails the shock roll, mark as defeated and add a Dead active effect.
 * @param {HarnMasterActor} actor The actor attempting the shock roll
 * @param {rollResult} rollResult The outcome of the roll
 * @param {rollData} rollData ignored
 */
function onShockRoll(actor: HarnMasterActor, rollResult, rollData) {
  console.debug("HM3 Automation | onShockRoll")
  console.debug("HM3 Automation | actor", actor)
  console.debug("HM3 Automation | rollResult", rollResult)
  if (!rollResult.isSuccess) {
    const token = actor.token;
    makeCombatEffect(actor, "Prone", "icons/svg/falling.svg", false, false)
      ?.then(_value => {makeCombatEffect(actor, "Dead", "icons/svg/skull.svg", true, false)})
      ?.then(_value => {token?.combatant?.update({ defeated: true })})
  }
}


/**
 * If the actor fails the fumble roll, add an ActiveEffect to remind players.
 * @param {HarnMasterActor} actor The actor attempting the fumble roll
 * @param {rollResult} rollResult The outcome of the fumble roll
 * @param {rollData} rollData ignored
 */
function onFumbleRoll(actor: HarnMasterActor, rollResult, rollData) {
  console.debug("HM3 Automation | onFumbleRoll")
  console.debug("HM3 Automation | actor", actor)
  console.debug("HM3 Automation | rollResult", rollResult)
  if (!rollResult.isSuccess) {
    makeCombatEffect(actor, "Fumble", "modules/hm3-automation/icons/drop-weapon.svg", false, true)?.then()
  }
}

/**
 * If the actor fails the stumble roll, mark as prone and add an ActiveEffect to remind players.
 * @param {HarnMasterActor} actor The actor attempting the stumble roll
 * @param {rollResult} rollResult The outcome of the stumble roll
 * @param {rollData} rollData ignored
 */
function onStumbleRoll(actor: HarnMasterActor, rollResult, rollData) {
  console.debug("HM3 Automation | onStumbleRoll")
  console.debug("HM3 Automation | actor", actor)
  console.debug("HM3 Automation | rollResult", rollResult)
  if (!rollResult.isSuccess) {
    makeCombatEffect(actor, "Prone", "icons/svg/falling.svg", false, false)?.then()
  }
}


Hooks.on("ready", () => {
  console.log("HM3 Automation | Registering callback for spell fatigue");
  Hooks.on("hm3.onSpellRoll", onSpellRoll);
  console.log("HM3 Automation | Registering callback for shock roll");
  Hooks.on("hm3.onShockRoll", onShockRoll);
  console.log("HM3 Automation | Registering callback for fumble roll");
  Hooks.on("hm3.onFumbleRoll", onFumbleRoll);
  console.log("HM3 Automation | Registering callback for stumble roll");
  Hooks.on("hm3.onStumbleRoll", onStumbleRoll);
  CONFIG.statusEffects = CONFIG.statusEffects.concat(
    [
      { "id": "fumble", "label": "Fumble", "icon": "modules/hm3-automation/icons/drop-weapon.svg" }
    ]
  )
});

function makeCombatEffect(actor: HarnMasterActor, label: string, icon: string, overlay: boolean, autoclear: boolean):(Promise<(StoredDocument<ActiveEffect>|undefined)>|undefined) {
  if (game instanceof Game) {
    const ae: ActiveEffect | undefined = actor.effects.find(m => { return m.data?.label === label })
    const duration = autoclear ? {
      startTurn: game.combat?.data.turn,
      startRound: game.combat?.data.round,
      rounds: 1
    } : null
    if (ae) {
      const promise: Promise<ActiveEffect> = ae.update({
        disabled: false,
        duration: duration
      }).then()
    } else {
      const changeData: EffectChangeDataConstructorData[] = []
      const activeEffectData: ActiveEffectDataConstructorData = {
        label: label,
        icon: icon,
        changes: changeData,
        flags: { core: { statusId: label.toLocaleLowerCase(), overlay: overlay } },
        duration: duration
      }
      const promise = ActiveEffect.create(activeEffectData, { parent: actor })
      return promise
    }
  } else {
    throw new Error('game not initialized yet!');
  }
}
