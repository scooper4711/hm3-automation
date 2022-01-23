/**
 * Create a script macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param {Object} data     The dropped data
 * @param {number} slot     The hotbar slot to use
 * @returns {Promise}
 */
export function createHM3Macro(data: any, slot: number): Promise<any>;
export function skillRoll(itemName: any, noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: number;
    plusMinus: string;
    modifiedTarget: any;
    isSuccess: any;
    isCritical: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function castSpellRoll(itemName: any, noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: number;
    plusMinus: string;
    modifiedTarget: any;
    isSuccess: any;
    isCritical: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function invokeRitualRoll(itemName: any, noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: number;
    plusMinus: string;
    modifiedTarget: any;
    isSuccess: any;
    isCritical: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function usePsionicRoll(itemName: any, noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: number;
    plusMinus: string;
    modifiedTarget: any;
    isSuccess: any;
    isCritical: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function testAbilityD6Roll(ability: any, noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: any;
    modifiedTarget: any;
    isSuccess: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function testAbilityD100Roll(ability: any, noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: number;
    plusMinus: string;
    modifiedTarget: any;
    isSuccess: any;
    isCritical: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function weaponDamageRoll(itemName: any, aspect?: any, myActor?: any): Promise<{
    title: string;
    weaponAspect: any;
    damageDice: number;
    weaponImpact: any;
    addlWeaponImpact: any;
    totalImpact: any;
    impactRoll: any;
    rollValue: any;
    notes: any;
    roll: any;
}>;
export function missileDamageRoll(itemName: any, range?: any, myActor?: any): Promise<{
    title: string;
    aspect: any;
    range: any;
    damageDice: number;
    rangeImpact: number;
    addlImpact: any;
    totalImpact: number;
    rollValue: any;
    notes: any;
    roll: any;
}>;
export function weaponAttackRoll(itemName: any, noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: number;
    plusMinus: string;
    modifiedTarget: any;
    isSuccess: any;
    isCritical: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function weaponDefendRoll(itemName: any, noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: number;
    plusMinus: string;
    modifiedTarget: any;
    isSuccess: any;
    isCritical: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function missileAttackRoll(itemName: any, myActor?: any): Promise<{
    title: string;
    aspect: any;
    range: any;
    origTarget: any;
    rangeModifier: number;
    addlModifier: number;
    amPlusMinus: string;
    rmPlusMinus: string;
    modifiedTarget: any;
    isSuccess: any;
    isCritical: any;
    rollValue: any;
    description: any;
    notes: any;
    roll: any;
}>;
export function injuryRoll(myActor?: any, rollData?: {}): Promise<any>;
export function healingRoll(itemName: any, noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: number;
    plusMinus: string;
    modifiedTarget: any;
    isSuccess: any;
    isCritical: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function dodgeRoll(noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: number;
    plusMinus: string;
    modifiedTarget: any;
    isSuccess: any;
    isCritical: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function shockRoll(noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: any;
    modifiedTarget: any;
    isSuccess: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function stumbleRoll(noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: any;
    modifiedTarget: any;
    isSuccess: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function fumbleRoll(noDialog?: boolean, myActor?: any): Promise<{
    type: any;
    title: any;
    origTarget: any;
    modifier: any;
    modifiedTarget: any;
    isSuccess: any;
    rollValue: any;
    rollResult: any;
    showResult: boolean;
    description: any;
    notes: any;
    roll: any;
}>;
export function genericDamageRoll(myActor?: any): Promise<{
    title: string;
    weaponAspect: any;
    damageDice: number;
    weaponImpact: any;
    addlWeaponImpact: any;
    totalImpact: any;
    impactRoll: any;
    rollValue: any;
    notes: any;
    roll: any;
}>;
export function changeFatigue(newValue: any, myActor?: any): Promise<boolean>;
export function changeMissileQuanity(missileName: any, newValue: any, myActor?: any): Promise<boolean>;
export function setSkillDevelopmentFlag(skillName: any, myActor?: any): Promise<boolean>;
export function weaponAttack(itemName?: any, noDialog?: boolean, myToken?: any, forceAllow?: boolean): Promise<{
    title: string;
    attacker: any;
    atkTokenId: any;
    defender: any;
    defTokenId: any;
    weaponType: string;
    weaponName: any;
    aim: any;
    aspect: any;
    addlModifierAbs: number;
    addlModifierSign: string;
    origAML: any;
    effAML: any;
    impactMod: any;
    hasDodge: boolean;
    hasBlock: boolean;
    hasCounterstrike: boolean;
    hasIgnore: boolean;
    visibleActorId: any;
}>;
export function missileAttack(itemName?: any, noDialog?: boolean, myToken?: any, forceAllow?: boolean): Promise<{
    title: string;
    attacker: any;
    atkTokenId: any;
    defender: any;
    defTokenId: any;
    weaponType: string;
    weaponName: any;
    rangeText: any;
    rangeExceedsExtreme: any;
    rangeModSign: string;
    rangeModifierAbs: number;
    rangeDist: any;
    aim: any;
    aspect: any;
    addlModifierAbs: number;
    addlModifierSign: string;
    origAML: any;
    effAML: any;
    impactMod: any;
    hasDodge: boolean;
    hasBlock: boolean;
    hasCounterstrike: boolean;
    hasIgnore: boolean;
    visibleActorId: any;
}>;
/**
 * Resume the attack with the defender performing the "Counterstrike" defense.
 * Note that this defense is only applicable to melee attacks.
 *
 * @param {*} atkTokenId Token representing the attacker
 * @param {*} defTokenId Token representing the defender/counterstriker
 * @param {*} atkWeaponName Name of the weapon the attacker is using
 * @param {*} atkEffAML The effective AML (Attack Mastery Level) of the attacker after modifiers applied
 * @param {*} atkAim Attack aim ("High", "Mid", "Low")
 * @param {*} atkAspect Weapon aspect ("Blunt", "Edged", "Piercing")
 * @param {*} atkImpactMod Additional modifier to impact
 */
export function meleeCounterstrikeResume(atkTokenId: any, defTokenId: any, atkWeaponName: any, atkEffAML: any, atkAim: any, atkAspect: any, atkImpactMod: any): Promise<{
    atk: {
        title: string;
        attacker: any;
        atkTokenId: any;
        defender: any;
        defTokenId: any;
        attackWeapon: any;
        mlType: string;
        defense: string;
        effAML: any;
        effDML: number;
        attackRoll: any;
        atkRollResult: string;
        defenseRoll: number;
        defRollResult: string;
        resultDesc: string;
        hasAttackHit: any;
        addlWeaponImpact: number;
        weaponImpact: any;
        impactRoll: any;
        totalImpact: any;
        atkAim: any;
        atkAspect: any;
        isAtkStumbleRoll: any;
        isAtkFumbleRoll: any;
        isDefStumbleRoll: any;
        isDefFumbleRoll: any;
        visibleAtkActorId: any;
        visibleDefActorId: any;
    };
    cs: {
        title: string;
        attacker: any;
        atkTokenId: any;
        defender: any;
        defTokenId: any;
        outnumbered: any;
        attackWeapon: any;
        mlType: string;
        addlModifierAbs: number;
        addlModifierSign: string;
        origEML: any;
        effEML: any;
        effAML: any;
        effDML: number;
        attackRoll: any;
        atkRollResult: string;
        defenseRoll: number;
        defRollResult: string;
        resultDesc: string;
        hasAttackHit: any;
        addlWeaponImpact: number;
        weaponImpact: any;
        impactRoll: any;
        totalImpact: any;
        atkAim: any;
        atkAspect: any;
        dta: any;
        isAtkStumbleRoll: any;
        isAtkFumbleRoll: any;
        isDefStumbleRoll: any;
        isDefFumbleRoll: any;
        visibleAtkActorId: any;
        visibleDefActorId: any;
    };
}>;
/**
 * Resume the attack with the defender performing the "Dodge" defense.
 *
 * @param {*} atkTokenId Token representing the attacker
 * @param {*} defTokenId Token representing the defender
 * @param {*} type Type of attack: "melee" or "missile"
 * @param {*} weaponName Name of the weapon the attacker is using
 * @param {*} effAML The effective AML (Attack Mastery Level) of the attacker after modifiers applied
 * @param {*} aim Attack aim ("High", "Mid", "Low")
 * @param {*} aspect Weapon aspect ("Blunt", "Edged", "Piercing")
 * @param {*} impactMod Additional modifier to impact
 */
export function dodgeResume(atkTokenId: any, defTokenId: any, type: any, weaponName: any, effAML: any, aim: any, aspect: any, impactMod: any): Promise<{
    title: string;
    attacker: any;
    atkTokenId: any;
    defender: any;
    defTokenId: any;
    attackWeapon: any;
    outnumbered: any;
    effAML: any;
    defense: string;
    effDML: any;
    attackRoll: any;
    atkRollResult: string;
    defenseRoll: any;
    defRollResult: string;
    resultDesc: string;
    hasAttackHit: any;
    addlWeaponImpact: number;
    weaponImpact: any;
    impactRoll: any;
    totalImpact: any;
    atkAim: any;
    atkAspect: any;
    dta: any;
    isAtkStumbleRoll: any;
    isAtkFumbleRoll: any;
    isDefStumbleRoll: any;
    isDefFumbleRoll: any;
    visibleAtkActorId: any;
    visibleDefActorId: any;
}>;
/**
 * Resume the attack with the defender performing the "Block" defense.
 *
 * @param {*} atkTokenId Token representing the attacker
 * @param {*} defTokenId Token representing the defender
 * @param {*} type Type of attack: "melee" or "missile"
 * @param {*} weaponName Name of the weapon the attacker is using
 * @param {*} effAML The effective AML (Attack Mastery Level) of the attacker after modifiers applied
 * @param {*} aim Attack aim ("High", "Mid", "Low")
 * @param {*} aspect Weapon aspect ("Blunt", "Edged", "Piercing")
 * @param {*} impactMod Additional modifier to impact
 */
export function blockResume(atkTokenId: any, defTokenId: any, type: any, weaponName: any, effAML: any, aim: any, aspect: any, impactMod: any): Promise<any>;
/**
 * Resume the attack with the defender performing the "Ignore" defense.
 *
 * @param {*} atkTokenId Token representing the attacker
 * @param {*} defTokenId Token representing the defender
 * @param {*} type Type of attack: "melee" or "missile"
 * @param {*} weaponName Name of the weapon the attacker is using
 * @param {*} effAML The effective AML (Attack Mastery Level) of the attacker after modifiers applied
 * @param {*} aim Attack aim ("High", "Mid", "Low")
 * @param {*} aspect Weapon aspect ("Blunt", "Edged", "Piercing")
 * @param {*} impactMod Additional modifier to impact
 */
export function ignoreResume(atkTokenId: any, defTokenId: any, type: any, weaponName: any, effAML: any, aim: any, aspect: any, impactMod: any): Promise<{
    title: string;
    attacker: any;
    atkTokenId: any;
    defender: any;
    defTokenId: any;
    mlType: string;
    attackWeapon: any;
    effAML: any;
    defense: string;
    effDML: number;
    attackRoll: any;
    atkRollResult: string;
    defenseRoll: number;
    defRollResult: string;
    resultDesc: string;
    hasAttackHit: any;
    addlWeaponImpact: number;
    weaponImpact: any;
    impactRoll: any;
    totalImpact: any;
    atkAim: any;
    atkAspect: any;
    dta: any;
    isAtkStumbleRoll: any;
    isAtkFumbleRoll: any;
    isDefStumbleRoll: any;
    isDefFumbleRoll: any;
    visibleAtkActorId: any;
    visibleDefActorId: any;
}>;
export function callOnHooks(hook: any, actor: any, result: any, rollData: any, item?: any): any;
