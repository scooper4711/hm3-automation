/**
 * Extend the basic Item with some very simple modifications.
 * @extends {Item}
 */
export class HarnMasterItem {
    static calcInjurySeverity(injury: any): void;
    /**
     * In HM3, PP and UP are low integer values, so we must multiply them by 5 in order to use them for
     * EML calculations.  This function does that.
     *
     * @param {*} value
     * @returns
     */
    static calcPenaltyPct(value: any): number;
    /**
     * Augment the basic Item data model with additional dynamic data.
     */
    prepareData(): void;
    postProcessItems(): void;
    _prepareArmorLocationData(itemData: any): void;
    /** @override */
    override _preCreate(data: any, options: any, user: any): Promise<void>;
    /**
     * Run a custom macro assigned to this item.
     *
     * Returns an object with the following fields:
     *
     * type: Type of roll
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
