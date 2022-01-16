
/**
 * Based on the rollResult, increase fatigue.
 * @param {HarnMasterActor} actor The actor doing the spell casting
 * @param {rollResult} rollResult The result of the roll
 * @param {rollData} rollData The target for the roll
 * @param {HarnMasterItem} item The spell being cast
 */
function onSpellRoll(actor, rollResult, rollData, item) {
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
function onShockRoll(actor, rollResult, rollData) {
  if (game instanceof Game) {
    console.debug("HM3 Automation | onShockRoll")
    console.debug("HM3 Automation | actor", actor)
    console.debug("HM3 Automation | rollResult", rollResult)
    if (!rollResult.isSuccess) {
      console.debug("HM3 Automation | actor", actor)
      if (!actor.effects.find(m => m.data.label === "Dead")) {
        const activeEffectData = {
          label: "Dead",
          icon: "icons/svg/skull.svg",
        }
        const token = game.combat?.turns.find(c => c.actor == actor)?.token;
        const promise = ActiveEffect.create(activeEffectData, { parent: actor });
        promise.then(result => {
          result?.setFlag("core", "statusId", "dead");
          result?.setFlag("core", "overlay", true);
          token?.combatant?.update({ defeated: true });
        }
        )
      }
    }
  } else {
    throw new Error('game not initialized yet!');
  }
}

/**
 * If the actor fails the fumble roll, add an ActiveEffect to remind players.
 * @param {HarnMasterActor} actor The actor attempting the fumble roll
 * @param {rollResult} rollResult The outcome of the fumble roll
 * @param {rollData} rollData ignored
 */
function onFumbleRoll(actor, rollResult, rollData) {
  if (game instanceof Game) {
    console.debug("HM3 Automation | onFumbleRoll")
    console.debug("HM3 Automation | actor", actor)
    console.debug("HM3 Automation | rollResult", rollResult)
    if (!rollResult.isSuccess) {
      const ae = actor.effects.find(m => m.data.label === "Fumble");
      if (ae) {
        const promise = ae.update({
          disabled: false,
          duration: {
            startTurn: game.combat?.data.turn,
            startRound: game.combat?.data.round,
            rounds: 1
          }
        });
        promise.then()
      } else {
        const activeEffectData = {
          label: "Fumble",
          icon: "modules/hm3-automation/icons/drop-weapon.svg",
          duration: {
            startTurn: game.combat?.data.turn,
            startRound: game.combat?.data.round,
            rounds: 1
          },
          changes: []
        }
        const promise = ActiveEffect.create(activeEffectData, { parent: actor }).then();
      };
    }
  } else {
    throw new Error('game not initialized yet!');
  }
}

/**
 * If the actor fails the stumble roll, mark as prone and add an ActiveEffect to remind players.
 * @param {HarnMasterActor} actor The actor attempting the stumble roll
 * @param {rollResult} rollResult The outcome of the stumble roll
 * @param {rollData} rollData ignored
 */
function onStumbleRoll(actor, rollResult, rollData) {
  if (game instanceof Game) {
    console.debug("HM3 Automation | onStumbleRoll")
    console.debug("HM3 Automation | actor", actor)
    console.debug("HM3 Automation | rollResult", rollResult)
    if (!rollResult.isSuccess) {
      const ae = actor.effects.find(m => { console.log(m); return m.data?.label === "Prone" });
      if (ae) {
        const promise = ae.update({
          disabled: false,
          duration: {
            startTurn: game.combat?.data.turn,
            startRound: game.combat?.data.round,
            rounds: 1
          }
        }).then();
      } else {
        const activeEffectData = {
          label: "Prone",
          icon: "icons/svg/falling.svg",
          duration: {
            startTurn: game.combat?.data.turn,
            startRound: game.combat?.data.round,
            rounds: 1
          }
        }
        const promise = ActiveEffect.create(activeEffectData, { parent: actor })
        promise.then(result => { result?.setFlag("core", "statusId", "prone"); });

      }
    }
  } else {
    throw new Error('game not initialized yet!');
  }
}


Hooks.on("ready", () => {
  console.log("HM3 Automation | Initializing spell fatigue");
  Hooks.on("hm3.onSpellRoll", onSpellRoll);
  console.log("HM3 Automation | Initializing shock roll");
  Hooks.on("hm3.onShockRoll", onShockRoll);
  console.log("HM3 Automation | Initializing fumble roll");
  Hooks.on("hm3.onFumbleRoll", onFumbleRoll);
  console.log("HM3 Automation | Initializing stumble roll");
  Hooks.on("hm3.onStumbleRoll", onStumbleRoll);
});
