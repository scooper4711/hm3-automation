export class DiceHM3 {
    /**
     * Performs a standard d100 "skill" roll, optionally presenting a dialog
     * to collect a modifier (although can be used for any straignt d100 roll
     * that takes an optional modifier and rolls against a target value).
     *
     * Note that the modifier affects the target value, not the die roll.
     * The die roll is always a strait "1d100" roll without modifiers.
     *
     * rollData is expected to contain the following values:
     *  target: Target value to check against
     *  modifier: Modifier to target value
     *  label: The label associated with the 'target' value
     *  fastForward: If true, assume no modifier and don't present Dialog
     *  speaker: the Speaker to use in Chat
     *  rollMode: the rollMode to use
     *  actorData: actor data
     *
     * @param {Object} rollData
     */
    static d100StdRoll(rollData: any): Promise<{
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
    /**
     * Renders a dialog to get the modifier for a d100 skill roll, and then
     * perform a d100 dice roll to determine results.  Returns Roll object
     * representing outcome of die roll, or null if user cancelled dialog.
     *
     * @param {*} dialogOptions
     */
    static d100StdDialog(dialogOptions: any): Promise<any>;
    /**
     * Performs a standard d6 roll, optionally presenting a dialog
     * to collect a modifier (although can be used for any straignt d6 roll
     * that takes an optional modifier and rolls against a target value).
     *
     * Note that the modifier affects the target value, not the die roll.
     * The die roll is always a strait "1d100" roll without modifiers.
     *
     * rollData is expected to contain the following values:
     *  target: Target value to check against
     *  modifier: Modifier to target value
     *  numdice: Number of d6 to roll
     *  label: The label associated with the 'target' value
     *  fastForward: If true, assume no modifier and don't present Dialog
     *  speaker: the Speaker to use in Chat
     *  rollMode: the rollMode to use
     *  actorData: actor data
     *
     * @param {Object} rollData
     */
    static d6Roll(rollData: any): Promise<{
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
    /**
     * Renders a dialog to get the modifier for a d6 roll, and then
     * perform a d6 dice roll to determine results.  Returns Roll object
     * representing outcome of die roll, or null if user cancelled dialog.
     *
     * @param {*} dialogOptions
     */
    static d6Dialog(dialogOptions: any): Promise<any>;
    static sdrRoll(itemData: any): Promise<{
        title: string;
        origTarget: any;
        modifier: number;
        modifiedTarget: any;
        isSuccess: boolean;
        rollValue: any;
        rollResult: any;
        showResult: boolean;
        description: string;
        notes: string;
        sdrIncr: number;
    }>;
    /**
     * Performs processing, including a random roll, to determine
     * injury location and effects.
     *
     * @param {Object} rollData
     */
    static injuryRoll(rollData: any): Promise<any>;
    /**
     *
     * @param {*} actor
     * @param {*} result
     */
    static createInjury(actor: any, result: any): any;
    /**
     * Returns a list of unique hit location names, including a single "Random" entry.
     * Used for filling a dropdown during hit-location calculation.
     *
     * @param {*} items List of items including armorlocation items
     */
    static _getHitLocations(items: any): string[];
    /**
     * Render a dialog box for gathering information for use in the Injury roll
     *
     * @param {*} dialogOptions
     */
    static injuryDialog(dialogOptions: any): Promise<any>;
    /**
     * This method calculates many items related to injuries that are used to populate
     * the chat message with the results of the injury
     *
     * @param {String} location
     * @param {Number} impact
     * @param {String} aspect
     * @param {Boolean} addToCharSheet
     * @param {String} aim
     * @param {Object} dialogOptions
     */
    static _calcInjury(location: string, impact: number, aspect: string, addToCharSheet: boolean, aim: string, dialogOptions: any): {
        isRandom: boolean;
        name: any;
        aim: string;
        aspect: string;
        location: string;
        impact: number;
        armorType: string;
        armorValue: number;
        effectiveImpact: number;
        isInjured: boolean;
        injuryLevel: number;
        injuryLevelText: string;
        isBleeder: boolean;
        isFumbleRoll: boolean;
        isFumble: boolean;
        isStumbleRoll: boolean;
        isStumble: boolean;
        isAmputate: boolean;
        isKillShot: boolean;
        addToCharSheet: boolean;
    };
    /**
     * Return either the item specified by location, or if location === 'Random',
     * then randomly chooses a location and returns the item associated with it.
     *
     * @param {*} location
     * @param {*} aim
     * @param {*} items
     */
    static _calcLocation(location: any, aim: any, items: any): any;
    /**
     * Performs a damage roll, presenting a dialog
     * to collect information about the damage.
     *
     * rollData is expected to contain the following values:
     *  weapon: Selected weapon (or blank for none)
     *  speaker: the Speaker to use in Chat
     *  rollMode: the rollMode to use
     *  actorData: actor data
     *
     * @param {Object} rollData
     */
    static damageRoll(rollData: any): Promise<{
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
    /**
     * Returns a structure specifying the default aspect for a weapon, as well as the
     * impact values for all other aspects.  The default aspect is always the aspect
     * with the greatest impact.
     *
     * @param {*} weapon Name of weapon
     * @param {*} items List of items containing 'weapongear' items.
     */
    static calcWeaponAspect(weapon: any, items: any): {
        defaultAspect: string;
        aspects: {
            Blunt: number;
            Edged: number;
            Piercing: number;
            Fire: number;
            Other: number;
        };
    };
    /**
     * Renders a dialog to get the information for a damage roll, and then
     * perform a number of d6 dice rolls to determine results.  Returns Roll object
     * representing outcome of die rolls, or null if user cancelled dialog.
     *
     * @param {*} dialogOptions
     */
    static damageDialog(dialogOptions: any): Promise<any>;
    static missileAttackRoll(rollData: any): Promise<{
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
    static missileAttackDialog(dialogOptions: any): Promise<any>;
    static missileDamageRoll(rollData: any): Promise<{
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
    static missileDamageDialog(dialogOptions: any): Promise<any>;
    static rollTest(testData: any): Promise<{
        type: any;
        target: number;
        isCapped: boolean;
        modifier: number;
        rollObj: any;
        isCritical: boolean;
        isSuccess: boolean;
        description: string;
        preData: any;
    }>;
    /**
     * Calculate and return the name of a random hit location based on weights.
     *
     * @param {*} items List of items containing hitlocation items
     * @param {*} aim One of 'low', 'mid', or 'high'
     */
    static hitLocation(items: any, aim: any): string;
}
