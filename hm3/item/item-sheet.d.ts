/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class HarnMasterItemSheet {
    /** @override */
    static override get defaultOptions(): any;
    /** @override */
    override get template(): string;
    /** @override */
    override getData(): any;
    /** @override */
    override setPosition(options?: {}): any;
    /** @override */
    override activateListeners(html: any): void;
    _armorgearLocationAdd(event: any): Promise<any>;
    _armorgearLocationDelete(event: any): Promise<any>;
}
