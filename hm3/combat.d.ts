/**
 * Initiates a missile attack.
 *
 * Displays a missile attack dialog asking for attributes of the attack (aim location,
 * special modifiers, etc.) and generates a missile attack chat message that includes
 * buttons for selecting the appropriate defense.
 *
 * No die rolling occurs as a result of this function, only the declaration of the attack.
 *
 * @param attackToken {Token} Token representing attacker
 * @param defendToken {Token} Token representing defender
 * @param weaponItem {Item} Missile weapon used by attacker
 */
export function missileAttack(attackToken: Token, defendToken: Token, missileItem: any): Promise<{
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
 * Initiates a melee attack.
 *
 * Displays a melee attack dialog asking for attributes of the attack (aim location,
 * special modifiers, etc.) and generates a melee attack chat message that includes
 * buttons for selecting the appropriate defense.
 *
 * No die rolling occurs as a result of this function, only the declaration of the attack.
 *
 * @param attackToken {Token} Token representing attacker
 * @param defendToken {Token} Token representing defender
 * @param weaponItem {Item} Melee weapon used by attacker
 */
export function meleeAttack(attackToken: Token, defendToken: Token, weaponItem?: Item): Promise<{
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
/**
 * Resume the attack with the defender performing the "Counterstrike" defense.
 * Note that this defense is only applicable to melee attacks.
 *
 * @param {*} atkToken Token representing the attacker
 * @param {*} defToken Token representing the defender
 * @param {*} atkWeaponName Name of the weapon the attacker is using
 * @param {*} atkEffAML The effective AML (Attack Mastery Level) of the attacker after modifiers applied
 * @param {*} atkAim Attack aim ("High", "Mid", "Low")
 * @param {*} atkAspect Weapon aspect ("Blunt", "Edged", "Piercing")
 * @param {*} atkImpactMod Additional modifier to impact
 */
export function meleeCounterstrikeResume(atkToken: any, defToken: any, atkWeaponName: any, atkEffAML: any, atkAim: any, atkAspect: any, atkImpactMod: any): Promise<{
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
 * @param {*} atkToken Token representing the attacker
 * @param {*} defToken Token representing the defender
 * @param {*} type Type of attack: "melee" or "missile"
 * @param {*} weaponName Name of the weapon the attacker is using
 * @param {*} effAML The effective AML (Attack Mastery Level) of the attacker after modifiers applied
 * @param {*} aim Attack aim ("High", "Mid", "Low")
 * @param {*} aspect Weapon aspect ("Blunt", "Edged", "Piercing")
 * @param {*} impactMod Additional modifier to impact
 */
export function dodgeResume(atkToken: any, defToken: any, type: any, weaponName: any, effAML: any, aim: any, aspect: any, impactMod: any): Promise<{
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
 * @param {*} atkToken Token representing the attacker
 * @param {*} defToken Token representing the defender
 * @param {*} type Type of attack: "melee" or "missile"
 * @param {*} weaponName Name of the weapon the attacker is using
 * @param {*} effAML The effective AML (Attack Mastery Level) of the attacker after modifiers applied
 * @param {*} aim Attack aim ("High", "Mid", "Low")
 * @param {*} aspect Weapon aspect ("Blunt", "Edged", "Piercing")
 * @param {*} impactMod Additional modifier to impact
 */
export function blockResume(atkToken: any, defToken: any, type: any, weaponName: any, effAML: any, aim: any, aspect: any, impactMod: any): Promise<any>;
export function checkWeaponBreak(atkWeapon: any, defWeapon: any): Promise<{
    attackWeaponBroke: boolean;
    defendWeaponBroke: boolean;
}>;
/**
 * Resume the attack with the defender performing the "Ignore" defense.
 *
 * @param {*} atkToken Token representing the attacker
 * @param {*} defToken Token representing the defender
 * @param {*} type Type of attack: "melee" or "missile"
 * @param {*} weaponName Name of the weapon the attacker is using
 * @param {*} effAML The effective AML (Attack Mastery Level) of the attacker after modifiers applied
 * @param {*} aim Attack aim ("High", "Mid", "Low")
 * @param {*} aspect Weapon aspect ("Blunt", "Edged", "Piercing")
 * @param {*} impactMod Additional modifier to impact
 */
export function ignoreResume(atkToken: any, defToken: any, type: any, weaponName: any, effAML: any, aim: any, aspect: any, impactMod: any): Promise<{
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
/**
 * Display the results of meele combat.
 *
 * @param {String} atkResult The result from the attack, comprised of "cs", "cf", "ms", or "mf"
 * @param {String} defResult The result from the defense, comprised of "cs", "cf", "ms", or "mf"
 * @param {String} defense The type of defense: "ignore", "block", "counterstrike", or "dodge"
 * @param {Number} atkAddlImpact Additional impact for the attacker
 * @param {Number} defAddlImpact If counterstrike defense, the additional impact for the defender (counterstriker)
 */
export function meleeCombatResult(atkResult: string, defResult: string, defense: string, atkAddlImpact?: number, defAddlImpact?: number): {
    outcome: any;
    desc: string;
    csDesc: string;
};
/**
 * Calculate and display the results of the missile combat.
 *
 * @param {String} atkResult The result from the attack, comprised of "cs", "cf", "ms", or "mf"
 * @param {String} defResult The result from the defense, comprised of "cs", "cf", "ms", or "mf"
 * @param {String} defense The type of defense: "ignore", "block", "counterstrike", or "dodge"
 * @param {Number} atkAddlImpact Any additional impact
 */
export function missileCombatResult(atkResult: string, defResult: string, defense: string, atkAddlImpact?: number): {
    outcome: any;
    desc: string;
};
/**
 * Finds an Item within the given actor.
 *
 * @param {*} itemName Either an Item or a string formatted as "Item$<itemId>"
 * @param {*} type The type of Item (e.g., "missilegear")
 * @param {*} actor The actor containing the items to search
 */
export function getItem(itemName: any, type: any, actor: any): any;
/**
 * Calculates the distance from sourceToken to targetToken in "scene" units (e.g., feet).
 *
 * @param {Token} sourceToken
 * @param {Token} targetToken
 * @param {Boolean} gridUnits If true, return in grid units, not "scene" units
 */
export function rangeToTarget(sourceToken: Token, targetToken: Token, gridUnits?: boolean): any;
export function displayChatActionButtons(message: any, html: any, data: any): void;
