/**
 * A general tool to purge flags from all entities in a Compendium pack.
 * @param {Compendium} pack   The compendium pack to clean
 * @private
 */
export function purgeFlags(pack: Compendium): Promise<void>;
export function migrateWorld(): Promise<any>;
export function migrateCompendium(pack: any): Promise<any>;
export function migrateActorData(actor: Actor): any;
export function migrateItemData(item: any): {
    'data.macros.command': string;
    'data.macros.type': string;
    'flags.hm-gold.squeeze-impact': any;
    'data.-=squeeze': any;
    'flags.hm-gold.tear-impact': any;
    'data.-=tear': any;
    'data.range.-=extreme64': any;
    'data.range.-=extreme128': any;
    'data.range.-=extreme256': any;
    'flags.hm-gold.range4-impact': any;
    'flags.hm-gold.range8-impact': any;
    'flags.hm-gold.range16-impact': any;
    'flags.hm-gold.range32-impact': any;
    'flags.hm-gold.range64-impact': any;
    'data.impact.-=extreme64': any;
    'flags.hm-gold.range128-impact': any;
    'data.impact.-=extreme128': any;
    'flags.hm-gold.range256-impact': any;
    'data.impact.-=extreme256': any;
    'flags.hm-gold.squeeze': any;
    'data.protection.-=squeeze': any;
    'flags.hm-gold.tear': any;
    'data.protection.-=tear': any;
    'flags.hm-gold.probweight-arms': any;
    'data.probWeight.-=arms': any;
};
export function migrateSceneData(scene: any): any;
