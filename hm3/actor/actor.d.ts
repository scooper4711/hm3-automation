/**
 * Extend the base Actor by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class HarnMasterActor extends Actor {
    static createDialog(data?: {}, options?: {}): Promise<any>;
    /**
     * Add all of the items from a pack with the specified names
     * @param {*} itemNames Array of item names to include
     * @param {*} packName Name of compendium pack containing items
     * @param {*} items array of ItemData elements to populate
     */
    static addItemsFromPack(itemNames: any, packName: any, items: any): Promise<void>;
    /**
     * Create an armorlocation ItemData element
     *
     * @param {*} locName Location Name
     * @param {*} templateName Location Template Name
     * @returns an armorlocation ItemData
     */
    static _setupLocation(locName: any, templateName: any): {
        name: any;
        type: string;
        data: any;
    };
    /**
     * Add armorlocation items to the items array for all of the locations for
     * a humanoid
     *
     * @param {*} items Array of ItemData elements
     */
    static _createDefaultHumanoidLocations(items: any): void;
    static skillDevRoll(item: any): Promise<{
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
    static chatListeners(html: any): void;
    static _onChatCardAction(event: any): Promise<any>;
    static _normalcdf(x: any): number;
    static normProb(z: any, mean: any, sd: any): number;
    static calcUniversalPenalty(actor: any): void;
    static calcPhysicalPenalty(actor: any): void;
    static calcShockIndex(actor: any): void;
    /** @override */
    override _preCreate(createData: any, options: any, user: any): Promise<void>;
    /**
     * When prepareBaseData() runs, the Actor.items map is not available, or if it is, it
     * is not dependable.  The very next method will update the Actor.items map using
     * information from the Actor.data.items array.  So, at this point we may safely
     * use Actor.data.items, so long as we remember that that data is going to be going
     * through a prepareData() stage next.
     *
     * @override */
    override prepareBaseData(): void;
    /**
     * Perform data preparation after Items preparation and Active Effects have
     * been applied.
     *
     * Note that all Active Effects have already been applied by this point, so
     * nothing in this method will be affected further by Active Effects.
     *
     * @override */
    override prepareDerivedData(): void;
    /**
     * Calculate the total weight of all gear carried
     */
    calcTotalGearWeight(): void;
    /**
     * Calculate the weight of the gear. Note that this is somewhat redundant
     * with the calculation being done during item create/update/delete,
     * but here we are generating a much more fine-grained set of data
     * regarding the weight distribution.
     */
    _calcGearWeightTotals(): void;
    _setupEffectiveAbilities(data: any): void;
    /**
     * Consolidated method to setup all gear, including misc gear, weapons,
     * and missiles.  (not armor yet)
     */
    _setupWeaponData(combatSkills: any): void;
    _setMinEML_AML_DML(): void;
    _refreshSpellsAndInvocations(): void;
    _resetAllSpellsAndInvocations(): void;
    _setConvocationSpells(convocation: any, sb: any, ml: any, eml: any): void;
    _setRitualInvocations(diety: any, sb: any, ml: any, eml: any): void;
    _generateArmorLocationMap(data: any): void;
    /**
     * This method implements Item-based effects.  It applies three types of AE:
     *   Skill EML - Modifies the EML of a specific Skill (or Psionic talent)
     *
     * Note that unlike normal Active Effects, these effects apply to the Itens data model,
     * not the Actor's data model.
     *
     * The "value" field should look like "<item name>:<magnitude>"
     */
    _applySkillActiveEffects(): void;
    /**
     * This method implements Item-based weapon effects.  It applies two types of AE:
     *   Weapon Attack ML - Modifies the AML of a single weapon
     *   Weapon Defense ML - Modifies the DML of a single weapon
     *
     * Note that unlike normal Active Effects, these effects apply to the Items data model,
     * not the Actor's data model.
     *
     * The "value" field should look like "<item name>:<magnitude>"
     */
    _applyWeaponActiveEffects(): void;
    roundChange(item: any, change: any): any;
    /**
     * This method searches through all the active effects on this actor and applies
     * only that active effect whose key matches the specified 'property' value.
     *
     * The purpose is to allow an active effect to be applied after normal active effect
     * processing is complete.
     *
     * @param {String} property The Actor data model property to apply
     */
    applySpecificActiveEffect(property: string): void;
    /**
     * This method applys a blanket skill AE modifier to all skills of a particular type.
     * For instance, if the skill is a communication skill, then it will apply the
     * data.eph.commSkillsMod modifier to the effectiveMasteryLevel for that skill.
     *
     * @param {Item} skill The item representing the skill to apply the active effect to.
     */
    applySkillTypeActiveEffect(skill: Item): void;
    /**
     * Run a custom macro assigned to this item.
     *
     * Returns an object with the following fields:
     *
     * type: type of roll (ability-d6, ability-d100, shock, stumble, fumble, dodge, healing)
     * title: Chat label for Roll,
     * origTarget: Unmodified target value,
     * modifier: Modifier added to origTarget value,
     * modifiedTarget: Final modified target value,
     * rollValue: roll number,
     * isSuccess: is roll successful,
     * isCritical: is roll critical,
     * result: 'MS', 'CS', 'MF', 'CF',
     * description: textual description of roll success or failure,
     * notes: rendered notes,
     */
    runCustomMacro(rollInput: any): Promise<any>;
}
