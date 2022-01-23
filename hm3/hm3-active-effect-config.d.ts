/**
 * A form designed for creating and editing an Active Effect on an Actor or Item.
 * @implements {FormApplication}
 *
 * @param {ActiveEffect} object     The target active effect being configured
 * @param {object} [options]        Additional options which modify this application instance
 */
export class HM3ActiveEffectConfig implements FormApplication {
    /** @override */
    static override get defaultOptions(): any;
    /** @override */
    override getData(options: any): any;
}
