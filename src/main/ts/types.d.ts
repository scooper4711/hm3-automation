import { HarnMasterActor } from "../../../hm3/actor/actor";

export namespace HM3 {
  interface HM3 {
    macros: HarnMasterMacro
  }
  interface HarnMasterMacro {
    changeFatigue(newValue: string, myActor: HarnMasterActor): void
  }
  }
