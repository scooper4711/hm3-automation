export class HarnMasterCombat {
    /**
     * HarnMaster requires that we re-determine initiative each round, since penalties affecting
     * initiative may change during the course of combat.
     *
     * @override
     */
    override nextRound(): Promise<any>;
}
