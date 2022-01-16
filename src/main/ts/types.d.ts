import { ItemData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs/itemData";

export namespace HM3 {
  interface HM3 {
    macros: HarnMasterMacro
  }
  interface HarnMasterMacro {
    changeFatigue(newValue: string, myActor: HarnMasterActor): void
  }
  interface HarnMasterActor extends Actor {
    createDialog: (data: any, options: any) => Dialog
    addItemsFromPack: (itemNames: string[], packName: string, items: ItemData[]) => null
  }
  }
