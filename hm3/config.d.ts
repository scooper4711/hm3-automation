export namespace HM3 {
    const ASCII: string;
    const ready: boolean;
    const allowedActorFlags: any[];
    const allowedAspects: string[];
    const allowedRanges: string[];
    const skillTypes: string[];
    const traitTypes: string[];
    const sunsigns: string[];
    const defaultCharacterSkills: {
        'hm3.std-skills-physical': string[];
        'hm3.std-skills-communication': string[];
        'hm3.std-skills-combat': string[];
    };
    const defaultCreatureSkills: {
        'hm3.std-skills-communication': string[];
        'hm3.std-skills-combat': string[];
    };
    const injuryLocations: {
        Custom: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Skull: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Face: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Neck: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Shoulder: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        "Upper Arm": {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Elbow: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Forearm: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Hand: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Thorax: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Abdomen: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Groin: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Hip: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Thigh: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Knee: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Calf: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Foot: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Wing: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Tentacle: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
        Tail: {
            impactType: string;
            probWeight: {
                high: number;
                mid: number;
                low: number;
            };
            isStumble: boolean;
            isFumble: boolean;
            isAmputate: boolean;
            effectiveImpact: {
                ei1: string;
                ei5: string;
                ei9: string;
                ei13: string;
                ei17: string;
            };
        };
    };
    const stdSkills: {
        Sword: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Axe: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Bow: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Shield: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Flail: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Sling: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Riding: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Initiative: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Unarmed: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Polearm: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Dagger: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Blowgun: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Spear: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Net: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Club: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Whip: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Dodge: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Acting: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Intrigue: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Awareness: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Oratory: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Script: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Rhetoric: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Language: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Musician: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        "Mental Conflict": {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Singing: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Lovecraft: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Physician: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Fishing: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Survival: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Foraging: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Mathematics: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Folklore: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Jewelcraft: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Tracking: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Hunting: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Law: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Weaponcraft: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Mining: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Metalcraft: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Ceramics: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Runecraft: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Tarotry: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Perfumery: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Fletching: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Piloting: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Weatherlore: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Engineering: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Embalming: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Brewing: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Lockcraft: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Masonry: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Textilecraft: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Cookery: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Lore: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Drawing: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Alchemy: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Milling: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Timbercraft: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Hidework: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Shipwright: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Astrology: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Woodcraft: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Herblore: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Inkcraft: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Heraldry: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Animalcraft: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Seamanship: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Glassworking: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Agriculture: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Lyahvi: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Savorya: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Peleahn: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Jmorvi: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Odivshe: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Neutral: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Fyvria: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Climbing: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Swimming: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Skiing: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Stealth: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Jumping: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Condition: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Dancing: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Acrobatics: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Throwing: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Legerdemain: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Peoni: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Agrik: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Ilvir: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Siem: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Sarajin: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Morgath: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Halea: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Naveh: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        Larani: {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
        "Save K'nor": {
            source: string;
            skillBase: {
                formula: string;
            };
            type: string;
        };
    };
    const injuryLevels: string[];
    const activeEffectKey: {
        'data.eph.meleeAMLMod': string;
        'data.eph.meleeDMLMod': string;
        'data.eph.missileAMLMod': string;
        'data.eph.outnumbered': string;
        'data.eph.itemAMLMod': string;
        'data.eph.itemDMLMod': string;
        'data.eph.itemEMLMod': string;
        'data.eph.commSkillsMod': string;
        'data.eph.physicalSkillsMod': string;
        'data.eph.combatSkillsMod': string;
        'data.eph.craftSkillsMod': string;
        'data.eph.ritualSkillsMod': string;
        'data.eph.magicSkillsMod': string;
        'data.eph.psionicTalentsMod': string;
        'data.universalPenalty': string;
        'data.physicalPenalty': string;
        'data.eph.fatigue': string;
        'data.encumbrance': string;
        'data.endurance': string;
        'data.eph.totalInjuryLevels': string;
        'data.eph.move': string;
        'data.eph.strength': string;
        'data.eph.stamina': string;
        'data.eph.dexterity': string;
        'data.eph.agility': string;
        'data.eph.eyesight': string;
        'data.eph.hearing': string;
        'data.eph.smell': string;
        'data.eph.voice': string;
        'data.eph.intelligence': string;
        'data.eph.will': string;
        'data.eph.aura': string;
        'data.eph.morality': string;
        'data.eph.comeliness': string;
    };
    const defaultMagicIconName: string;
    const defaultRitualIconName: string;
    const defaultMiscItemIconName: string;
    const defaultPsionicsIconName: string;
    const defaultArmorGearIconName: string;
    const defaultContainerIconName: string;
    const magicIcons: string[][];
    const ritualIcons: string[][];
    const psionicTalentIcons: string[][];
    const physicalSkillIcons: string[][];
    const commSkillIcons: string[][];
    const combatSkillIcons: string[][];
    const weaponSkillIcons: string[][];
    const craftSkillIcons: string[][];
    const armorGearIcons: string[][];
    const miscGearIcons: string[][];
    const defaultItemIcons: any;
    namespace meleeCombatTable {
        const block: {
            'cf:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cf:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cf:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cf:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                atkDice: number;
                defDice: number;
            };
        };
        const counterstrike: {
            'cf:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cf:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cf:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cf:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
        };
        const dodge: {
            'cf:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:cf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cf:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:mf': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cf:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:ms': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cf:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'mf:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'ms:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
            'cs:cs': {
                atkFumble: boolean;
                defFumble: boolean;
                atkStumble: boolean;
                defStumble: boolean;
                dta: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
                defDice: number;
            };
        };
        namespace ignore {
            namespace cf {
                export const atkFumble: boolean;
                export const defFumble: boolean;
                export const atkStumble: boolean;
                export const defStumble: boolean;
                export const dta: boolean;
                const block_1: boolean;
                export { block_1 as block };
                export const miss: boolean;
                export const atkDice: number;
                export const defDice: number;
            }
            namespace mf {
                const atkFumble_1: boolean;
                export { atkFumble_1 as atkFumble };
                const defFumble_1: boolean;
                export { defFumble_1 as defFumble };
                const atkStumble_1: boolean;
                export { atkStumble_1 as atkStumble };
                const defStumble_1: boolean;
                export { defStumble_1 as defStumble };
                const dta_1: boolean;
                export { dta_1 as dta };
                const block_2: boolean;
                export { block_2 as block };
                const miss_1: boolean;
                export { miss_1 as miss };
                const atkDice_1: number;
                export { atkDice_1 as atkDice };
                const defDice_1: number;
                export { defDice_1 as defDice };
            }
            namespace ms {
                const atkFumble_2: boolean;
                export { atkFumble_2 as atkFumble };
                const defFumble_2: boolean;
                export { defFumble_2 as defFumble };
                const atkStumble_2: boolean;
                export { atkStumble_2 as atkStumble };
                const defStumble_2: boolean;
                export { defStumble_2 as defStumble };
                const dta_2: boolean;
                export { dta_2 as dta };
                const block_3: boolean;
                export { block_3 as block };
                const miss_2: boolean;
                export { miss_2 as miss };
                const atkDice_2: number;
                export { atkDice_2 as atkDice };
                const defDice_2: number;
                export { defDice_2 as defDice };
            }
            namespace cs {
                const atkFumble_3: boolean;
                export { atkFumble_3 as atkFumble };
                const defFumble_3: boolean;
                export { defFumble_3 as defFumble };
                const atkStumble_3: boolean;
                export { atkStumble_3 as atkStumble };
                const defStumble_3: boolean;
                export { defStumble_3 as defStumble };
                const dta_3: boolean;
                export { dta_3 as dta };
                const block_4: boolean;
                export { block_4 as block };
                const miss_3: boolean;
                export { miss_3 as miss };
                const atkDice_3: number;
                export { atkDice_3 as atkDice };
                const defDice_3: number;
                export { defDice_3 as defDice };
            }
        }
    }
    namespace missileCombatTable {
        const block_5: {
            'cf:cf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'mf:cf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'ms:cf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cs:cf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cf:mf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'mf:mf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'ms:mf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cs:mf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cf:ms': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'mf:ms': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'ms:ms': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cs:ms': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cf:cs': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'mf:cs': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'ms:cs': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cs:cs': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
        };
        export { block_5 as block };
        const dodge_1: {
            'cf:cf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'mf:cf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'ms:cf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cs:cf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cf:mf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'mf:mf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'ms:mf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cs:mf': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cf:ms': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'mf:ms': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'ms:ms': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cs:ms': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cf:cs': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'mf:cs': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'ms:cs': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
            'cs:cs': {
                wild: boolean;
                block: boolean;
                miss: boolean;
                atkDice: number;
            };
        };
        export { dodge_1 as dodge };
        export namespace ignore_1 {
            export namespace cf_1 {
                export const wild: boolean;
                const block_6: boolean;
                export { block_6 as block };
                const miss_4: boolean;
                export { miss_4 as miss };
                const atkDice_4: number;
                export { atkDice_4 as atkDice };
            }
            export { cf_1 as cf };
            export namespace mf_1 {
                const wild_1: boolean;
                export { wild_1 as wild };
                const block_7: boolean;
                export { block_7 as block };
                const miss_5: boolean;
                export { miss_5 as miss };
                const atkDice_5: number;
                export { atkDice_5 as atkDice };
            }
            export { mf_1 as mf };
            export namespace ms_1 {
                const wild_2: boolean;
                export { wild_2 as wild };
                const block_8: boolean;
                export { block_8 as block };
                const miss_6: boolean;
                export { miss_6 as miss };
                const atkDice_6: number;
                export { atkDice_6 as atkDice };
            }
            export { ms_1 as ms };
            export namespace cs_1 {
                const wild_3: boolean;
                export { wild_3 as wild };
                const block_9: boolean;
                export { block_9 as block };
                const miss_7: boolean;
                export { miss_7 as miss };
                const atkDice_7: number;
                export { atkDice_7 as atkDice };
            }
            export { cs_1 as cs };
        }
        export { ignore_1 as ignore };
    }
}
