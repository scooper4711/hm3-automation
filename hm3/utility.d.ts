/**
 * Determines whether the Skill Base Formula is valid. We perform that
 * validation here so even a skill not associated with a particular
 * actor can have its formula validated.
 *
 * A valid SB formula looks like this:
 *
 *   "@str, @int, @sta, hirin:2, ahnu, 5"
 *
 * meaning
 *   average STR, INT, and STA
 *   add 2 if sunsign hirin (modifier after colon ":")
 *   add 1 if sunsign ahnu (1 since no modifier specified)
 *   add 5 to result
 *
 * A valid formula must have exactly 3 abilities, everything else is optional.
 *
 * The result of this function is to set the "isFormulaValid" value appropriately.
 *
 * @param {Object} item
 */
export function calcSkillBase(item: any): void;
export function createUniqueName(prefix: any, itemTypes: any): any;
/**
 * Returns the path to the appropriate image name for the specified
 * item name
 *
 * @param {String} name
 */
export function getImagePath(name: string): any;
export function getAssocSkill(name: any, skillsItemArray: any, defaultSkill: any): any;
/**
 * String replacer function that applies the `text` string replacement
 * mechansim to an arbitrary string (named "template" here)
 * @param {String} template String containing ${} replacements
 * @param {Object} values An object containing replacement key/value pairs
 */
export function stringReplacer(template: string, values: any): any;
/**
 * Convert an integer into a roman numeral.  Taken from:
 * http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
 *
 * @param {Integer} num
 */
export function romanize(num: Integer): string | number;
export function aeDuration(effect: any): {
    type: string;
    duration: any;
    remaining: number;
    label: any;
};
export function aeChanges(effect: any): any;
export function executeMacroScript(macro: any, { actor, token, rollResult, rollData, item }?: {
    actor: any;
    token: any;
    rollResult: any;
    rollData: any;
    item: any;
}): any;
export function parseAEValue(string: any): any[];
