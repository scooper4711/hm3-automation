/**
 * Manage Active Effect instances through the Actor Sheet via effect control buttons.
 * @param {MouseEvent} event      The left-click event on the effect control
 * @param {Actor|Item} owner      The owning document which manages this effect
 */
export function onManageActiveEffect(event: MouseEvent, owner: Actor | Item): Promise<any>;
/**
 * This function searches all actors and tokens that are owned
 * by the user and disables them if their duration has expired.
 */
export function checkExpiredActiveEffects(): Promise<void>;
