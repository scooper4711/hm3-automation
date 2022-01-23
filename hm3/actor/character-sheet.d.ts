/**
 * Extend the base HarnMasterBaseActorSheet with some very simple modifications
 * @extends {HarnMasterBaseActorSheet}
 */
export class HarnMasterCharacterSheet extends HarnMasterBaseActorSheet {
    /** @override */
    static override get defaultOptions(): any;
    /**
     * Get the correct HTML template path to use for rendering this particular sheet
     * @type {String}
     */
    get template(): string;
}
import { HarnMasterBaseActorSheet } from "./base-actor-sheet.js";
