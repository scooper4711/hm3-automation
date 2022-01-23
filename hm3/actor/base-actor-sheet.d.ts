/**
 * Extend the basic ActorSheet with some common capabilities
 * @extends {ActorSheet}
 */
export class HarnMasterBaseActorSheet {
    /** @override */
    override getData(): {
        owner: any;
        limited: any;
        options: any;
        editable: any;
        cssClass: string;
        isCharacter: boolean;
        isCreature: boolean;
        isContainer: boolean;
        config: any;
    };
    /** @override */
    override _onSortItem(event: any, itemData: any): any;
    /** @override */
    override _onDropItem(event: any, data: any): Promise<any>;
    _moveContainer(event: any, data: any): Promise<any>;
    _moveQtyDialog(event: any, data: any): Promise<any>;
    _moveItems(data: any, moveQuantity: any): Promise<any>;
    /** @override */
    override _onDropItemCreate(data: any): Promise<any>;
    /** @override */
    override activateListeners(html: any): void;
    skillNameFilter: any;
    gearNameFilter: any;
    effectsNameFilter: any;
    _onItemDelete(event: any): Promise<void>;
    mergeItem(item: any, other: any): Promise<void>;
    _onItemCreate(event: any): Promise<any>;
    /**
     * Handle toggling the carry state of an Owned Item within the Actor
     * @param {Event} event   The triggering click event
     * @private
     */
    private _onToggleCarry;
    /**
     * Handle toggling the carry state of an Owned Item within the Actor
     * @param {Event} event   The triggering click event
     * @private
     */
    private _onToggleEquip;
    /**
     * Handle toggling the improve state of an Owned Item within the Actor
     * @param {Event} event   The triggering click event
     * @private
     */
    private _onToggleImprove;
    _onMoreInfo(event: any): Promise<any>;
    _improveToggleDialog(item: any): any;
    _onDumpEsotericDescription(event: any): Promise<any>;
}
