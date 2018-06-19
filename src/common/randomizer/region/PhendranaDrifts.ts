import {Region} from '../Region';
import {Location} from '../Location';
import {Item} from '../Item';
import {ItemCollection} from '../collection/ItemCollection';
import {PrimeItem} from '../enums/PrimeItem';

export class PhendranaDrifts extends Region {
  constructor() {
    super();
    this.name = 'Phendrana Drifts';
    this.locations = new Map<string, Location>([
      ['Phendrana Shorelines (Behind Ice)', new Location('Phendrana Shorelines (Behind Ice)', 'f7285979.mrea', 0x0002016E)],
      ['Phendrana Shorelines (Spider Track)', new Location('Phendrana Shorelines (Spider Track)', 'f7285979.mrea', 0x00020176)],
      ['Chozo Ice Temple', new Location('Chozo Ice Temple', '6655f51e.mrea', 0x00080257, true)],
      ['Ice Ruins West', new Location('Ice Ruins West', 'b33a0620.mrea', 0x000928ED)],
      ['Ice Ruins East (Behind Ice)', new Location('Ice Ruins East (Behind Ice)', 'dafcc26f.mrea', 0x000A00AB)],
      ['Ice Ruins East (Spider Track)', new Location('Ice Ruins East (Spider Track)', 'dafcc26f.mrea', 0x000A0191)],
      ['Chapel of the Elders', new Location('Chapel of the Elders', '40c548e9.mrea', 0x000E0058, true)],
      ['Ruined Courtyard', new Location('Ruined Courtyard', '1921876d.mrea', 0x000F022C, true)],
      ['Phendrana Canyon', new Location('Phendrana Canyon', 'a20a7455.mrea', 0x001000E1, true)],
      ['Quarantine Cave', new Location('Quarantine Cave', '70181194.mrea', 0x001801CA, true)],
      ['Research Lab Hydra', new Location('Research Lab Hydra', '43e4cc25.mrea', 0x00190513)],
      ['Quarantine Monitor', new Location('Quarantine Monitor', '2191a05d.mrea', 0x001B0011)],
      ['Observatory', new Location('Observatory', '3fb4a34e.mrea', 0x001E02F6, true)],
      ['Transport Access', new Location('Transport Access', 'd695b958.mrea', 0x01F00A5, true)],
      ['Control Tower', new Location('Control Tower', 'b3c33249.mrea', 0x002704CF, true)],
      ['Research Core', new Location('Research Core', 'a49b2544.mrea', 0x0428011C, true)],
      ['Frost Cave', new Location('Frost Cave', '4c6f7773.mrea', 0x00290187)],
      ['Research Lab Aether (Tank)', new Location('Research Lab Aether (Tank)', '21b4bff6.mrea', 0x003303E0, true)],
      ['Research Lab Aether (Morph Track)', new Location('Research Lab Aether (Morph Track)', '21b4bff6.mrea', 0x00330411)],
      ['Gravity Chamber (Underwater)', new Location('Gravity Chamber (Underwater)', '49175472.mrea', 0x0035001F, true)],
      ['Gravity Chamber (Grapple Ledge)', new Location('Gravity Chamber (Grapple Ledge)', '49175472.mrea', 0x0035012C)],
      ['Storage Cave', new Location('Storage Cave', 'f7c84340.mrea', 0x003600A9, true)],
      ['Security Cave', new Location('Security Cave', '3c9490e5.mrea', 0x00370019)]
    ]);
  }

  public setVanillaArtifacts() {
    this.locations.get('Control Tower').setItem(Item.get(PrimeItem.ARTIFACT_OF_ELDER));
    this.locations.get('Chozo Ice Temple').setItem(Item.get(PrimeItem.ARTIFACT_OF_SUN));
    this.locations.get('Storage Cave').setItem(Item.get(PrimeItem.ARTIFACT_OF_SPIRIT));
  }

  public initCasual(): void {
    this.locations.get('Phendrana Shorelines (Behind Ice)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsCasual() && items.has(PrimeItem.PLASMA_BEAM);
    };

    this.locations.get('Phendrana Shorelines (Spider Track)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsCasual() && items.canFireSuperMissiles() && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.SPIDER_BALL);
    };

    this.locations.get('Chozo Ice Temple').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsCasual() && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.PLASMA_BEAM);
    };

    this.locations.get('Ice Ruins West').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsCasual() && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.PLASMA_BEAM);
    };

    this.locations.get('Ice Ruins East (Behind Ice)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsCasual() && items.has(PrimeItem.PLASMA_BEAM);
    };

    this.locations.get('Ice Ruins East (Spider Track)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsCasual() && items.has(PrimeItem.SPIDER_BALL);
    };

    this.locations.get('Chapel of the Elders').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsCasual() && items.has(PrimeItem.SPACE_JUMP_BOOTS);
    };
    this.locations.get('Chapel of the Elders').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined)
        items = new ItemCollection([...items.toArray(), item]);
      return items.has(PrimeItem.WAVE_BEAM) && (items.has(PrimeItem.SPACE_JUMP_BOOTS) || items.canLayBombs());
    };

    this.locations.get('Ruined Courtyard').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM);
    };

    this.locations.get('Phendrana Canyon').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsCasual();
    };
    // You'll softlock if you destroy the boxes, and don't have space jump or boost
    this.locations.get('Phendrana Canyon').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined)
        items = new ItemCollection([...items.toArray(), item]);
      return items.has(PrimeItem.SPACE_JUMP_BOOTS) || items.has(PrimeItem.BOOST_BALL);
    };

    this.locations.get('Quarantine Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsCasual() && items.canFireSuperMissiles() && items.has(PrimeItem.BOOST_BALL)
        && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM) && items.has(PrimeItem.THERMAL_VISOR))
        || (items.hasBackwardsPhendranaReqsCasual() && items.has(PrimeItem.THERMAL_VISOR));
    };
    this.locations.get('Quarantine Cave').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined)
        items = new ItemCollection([...items.toArray(), item]);
      return items.has(PrimeItem.SPIDER_BALL) || items.has(PrimeItem.GRAPPLE_BEAM);
    };

    this.locations.get('Quarantine Monitor').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsCasual() && items.canFireSuperMissiles() && items.has(PrimeItem.BOOST_BALL)
          && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM) && items.has(PrimeItem.THERMAL_VISOR)
          && items.has(PrimeItem.GRAPPLE_BEAM))
        || (items.hasBackwardsPhendranaReqsCasual() && items.has(PrimeItem.THERMAL_VISOR) && items.has(PrimeItem.GRAPPLE_BEAM));
    };
    this.locations.get('Quarantine Monitor').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined) {
        items = new ItemCollection([...items.toArray(), item]);
      }
      return items.has(PrimeItem.SPIDER_BALL) || items.has(PrimeItem.GRAPPLE_BEAM);
    };

    this.locations.get('Research Lab Hydra').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.canFireSuperMissiles() && items.has(PrimeItem.THERMAL_VISOR)
        && ((items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM))
          || (items.hasBackwardsPhendranaReqsCasual() && items.has(PrimeItem.ICE_BEAM)));
    };

    this.locations.get('Observatory').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM))
        || (items.hasBackwardsPhendranaReqsCasual() && items.canLayBombs() && items.has(PrimeItem.ICE_BEAM));
    };

    this.locations.get('Control Tower').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.has(PrimeItem.PLASMA_BEAM)
        && ((items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM))
          || (items.hasBackwardsPhendranaReqsCasual() && items.has(PrimeItem.THERMAL_VISOR) && items.has(PrimeItem.ICE_BEAM)));
    };

    this.locations.get('Research Lab Aether (Tank)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM))
        || (items.hasBackwardsPhendranaReqsCasual() && items.has(PrimeItem.THERMAL_VISOR) && items.has(PrimeItem.ICE_BEAM));
    };

    this.locations.get('Research Lab Aether (Morph Track)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM))
        || (items.hasBackwardsPhendranaReqsCasual() && items.has(PrimeItem.THERMAL_VISOR) && items.has(PrimeItem.ICE_BEAM));
    };

    this.locations.get('Research Core').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM))
        || (items.hasBackwardsPhendranaReqsCasual() && items.has(PrimeItem.ICE_BEAM));
    };
    this.locations.get('Research Core').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined)
        items = new ItemCollection([...items.toArray(), item]);
      return items.has(PrimeItem.THERMAL_VISOR) && items.has(PrimeItem.ICE_BEAM);
    };

    this.locations.get('Transport Access').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.has(PrimeItem.THERMAL_VISOR) && items.has(PrimeItem.PLASMA_BEAM)
        && items.has(PrimeItem.ICE_BEAM)
        && (
          (items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS)
            && items.has(PrimeItem.WAVE_BEAM) && items.has(PrimeItem.SPIDER_BALL))
          || (items.hasBackwardsPhendranaReqsCasual())
        );
    };

    this.locations.get('Frost Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.has(PrimeItem.ICE_BEAM) && items.has(PrimeItem.GRAPPLE_BEAM)
        && ((items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM))
          || items.hasBackwardsPhendranaReqsCasual());
    };

    this.locations.get('Storage Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.canLayPowerBombs() && items.has(PrimeItem.ICE_BEAM) && items.has(PrimeItem.PLASMA_BEAM) && items.has(PrimeItem.GRAPPLE_BEAM)
        && ((items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM)
          && items.has(PrimeItem.THERMAL_VISOR))
          || items.hasBackwardsPhendranaReqsCasual());
    };

    this.locations.get('Security Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.has(PrimeItem.ICE_BEAM) && items.has(PrimeItem.GRAPPLE_BEAM)
        && ((items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM))
          || items.hasBackwardsPhendranaReqsCasual());
    };

    this.locations.get('Gravity Chamber (Underwater)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.has(PrimeItem.ICE_BEAM)
        && ((items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM))
          || items.hasBackwardsPhendranaReqsCasual());
    };
    this.locations.get('Gravity Chamber (Underwater)').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined)
        items = new ItemCollection([...items.toArray(), item]);
      return items.has(PrimeItem.GRAVITY_SUIT) && (items.has(PrimeItem.THERMAL_VISOR) || items.hasBackwardsPhendranaReqsCasual());
    };

    this.locations.get('Gravity Chamber (Grapple Ledge)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.canLayPowerBombs() && items.has(PrimeItem.ICE_BEAM) && items.has(PrimeItem.PLASMA_BEAM) && items.has(PrimeItem.GRAVITY_SUIT)
        && items.has(PrimeItem.GRAPPLE_BEAM)
        && ((items.hasPhendranaReqsCasual() && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM)
          && items.has(PrimeItem.THERMAL_VISOR))
          || items.hasBackwardsPhendranaReqsCasual());
    };
  }

  public initNormal(): void {
    this.locations.get('Phendrana Shorelines (Behind Ice)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsNormal() && items.has(PrimeItem.PLASMA_BEAM);
    };

    this.locations.get('Phendrana Shorelines (Spider Track)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsNormal() && items.canFireSuperMissiles() && items.has(PrimeItem.SPACE_JUMP_BOOTS)
        && items.has(PrimeItem.SPIDER_BALL);
    };

    this.locations.get('Chozo Ice Temple').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.PLASMA_BEAM);
    };

    this.locations.get('Ice Ruins West').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.PLASMA_BEAM);
    };

    this.locations.get('Ice Ruins East (Behind Ice)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsNormal() && items.has(PrimeItem.PLASMA_BEAM);
    };

    this.locations.get('Ice Ruins East (Spider Track)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPIDER_BALL);
    };

    this.locations.get('Chapel of the Elders').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS);
    };
    this.locations.get('Chapel of the Elders').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined) {
        items = new ItemCollection([...items.toArray(), item]);
      }
      return items.canLayBombs() && items.has(PrimeItem.WAVE_BEAM) && items.has(PrimeItem.SPACE_JUMP_BOOTS);
    };

    this.locations.get('Ruined Courtyard').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsNormal() && items.has(PrimeItem.WAVE_BEAM) && items.has(PrimeItem.SPACE_JUMP_BOOTS);
    };

    this.locations.get('Phendrana Canyon').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsNormal();
    };
    // You'll softlock if you destroy the boxes, and don't have space jump or boost
    this.locations.get('Phendrana Canyon').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined) {
        items = new ItemCollection([...items.toArray(), item]);
      }
      return items.has(PrimeItem.SPACE_JUMP_BOOTS) || items.has(PrimeItem.BOOST_BALL);
    };

    this.locations.get('Quarantine Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsNormal() && items.has(PrimeItem.WAVE_BEAM)
        && items.canFireSuperMissiles())
        || items.hasBackwardsPhendranaReqsNormal();
    };
    this.locations.get('Quarantine Cave').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined) {
        items = new ItemCollection([...items.toArray(), item]);
      }
      return items.has(PrimeItem.SPIDER_BALL) || items.has(PrimeItem.GRAPPLE_BEAM);
    };

    this.locations.get('Quarantine Monitor').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsNormal() && items.canFireSuperMissiles() && items.has(PrimeItem.WAVE_BEAM)
          && items.has(PrimeItem.SPACE_JUMP_BOOTS) && (items.has(PrimeItem.SPIDER_BALL) || items.has(PrimeItem.GRAPPLE_BEAM)))
        || (items.hasBackwardsPhendranaReqsNormal() && items.has(PrimeItem.GRAPPLE_BEAM));
    };

    this.locations.get('Research Lab Hydra').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.canFireSuperMissiles()
        && (
          (items.hasPhendranaReqsNormal() && items.has(PrimeItem.WAVE_BEAM) && (items.has(PrimeItem.SPACE_JUMP_BOOTS)))
          || (items.hasBackwardsPhendranaReqsNormal() && items.has(PrimeItem.ICE_BEAM))
        );
    };

    this.locations.get('Observatory').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM)
          && items.has(PrimeItem.BOOST_BALL))
        || (items.hasBackwardsPhendranaReqsNormal() && items.has(PrimeItem.ICE_BEAM));
    };

    this.locations.get('Control Tower').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM)
          && items.has(PrimeItem.BOOST_BALL))
        || (items.hasBackwardsPhendranaReqsNormal() && items.has(PrimeItem.ICE_BEAM));
    };

    this.locations.get('Research Lab Aether (Tank)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM)
          && items.has(PrimeItem.BOOST_BALL))
        || (items.hasBackwardsPhendranaReqsNormal() && items.has(PrimeItem.ICE_BEAM));
    };

    this.locations.get('Research Lab Aether (Morph Track)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM)
          && items.has(PrimeItem.BOOST_BALL))
        || (items.hasBackwardsPhendranaReqsNormal() && items.has(PrimeItem.ICE_BEAM));
    };

    this.locations.get('Research Core').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS) && items.has(PrimeItem.WAVE_BEAM)
          && items.has(PrimeItem.BOOST_BALL))
        || (items.hasBackwardsPhendranaReqsNormal() && items.has(PrimeItem.ICE_BEAM));
    };

    this.locations.get('Transport Access').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.has(PrimeItem.PLASMA_BEAM) && items.has(PrimeItem.ICE_BEAM)
        && (
          (items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS)
            && items.has(PrimeItem.WAVE_BEAM))
          || items.hasBackwardsPhendranaReqsNormal()
        );
    };

    this.locations.get('Frost Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.has(PrimeItem.ICE_BEAM)
        && (
          (items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS)
            && items.has(PrimeItem.WAVE_BEAM))
          || items.hasBackwardsPhendranaReqsNormal()
        );
    };

    this.locations.get('Storage Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.canLayPowerBombs() && items.has(PrimeItem.ICE_BEAM) && items.has(PrimeItem.PLASMA_BEAM)
        && (
          (items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS)
            && items.has(PrimeItem.WAVE_BEAM))
          || items.hasBackwardsPhendranaReqsNormal()
        );
    };

    this.locations.get('Security Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.has(PrimeItem.ICE_BEAM) && items.has(PrimeItem.GRAPPLE_BEAM)
        && (
          (items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS)
            && items.has(PrimeItem.WAVE_BEAM))
          || items.hasBackwardsPhendranaReqsNormal()
        );
    };

    this.locations.get('Gravity Chamber (Underwater)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.has(PrimeItem.ICE_BEAM)
        && (
          (items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS)
            && items.has(PrimeItem.WAVE_BEAM))
          || items.hasBackwardsPhendranaReqsNormal()
        );
    };
    this.locations.get('Gravity Chamber (Underwater)').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined) {
        items = new ItemCollection([...items.toArray(), item]);
      }
      return items.has(PrimeItem.GRAVITY_SUIT) && items.has(PrimeItem.SPACE_JUMP_BOOTS)
        && (items.has(PrimeItem.THERMAL_VISOR) || items.hasBackwardsPhendranaReqsNormal());
    };

    this.locations.get('Gravity Chamber (Grapple Ledge)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.has(PrimeItem.ICE_BEAM) && items.has(PrimeItem.PLASMA_BEAM) && items.has(PrimeItem.GRAPPLE_BEAM)
        && (
          (items.hasPhendranaReqsNormal() && items.has(PrimeItem.SPACE_JUMP_BOOTS)
            && items.has(PrimeItem.WAVE_BEAM))
          || items.hasBackwardsPhendranaReqsNormal()
        );
    };
  }

  public initHard(): void {
    const minVMRTanks = 5;

    this.locations.get('Phendrana Shorelines (Behind Ice)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) || items.hasBackwardsPhendranaReqsHard())
      && (items.has(PrimeItem.PLASMA_BEAM) || items.canDoInfiniteSpeed());
    };

    this.locations.get('Phendrana Shorelines (Spider Track)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) || items.hasBackwardsPhendranaReqsHard())
      && items.canFireSuperMissiles() && items.has(PrimeItem.SPIDER_BALL);
    };

    this.locations.get('Chozo Ice Temple').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) || items.hasBackwardsPhendranaReqsHard())
      && (items.has(PrimeItem.PLASMA_BEAM) || items.canDoInfiniteSpeed());
    };

    this.locations.get('Ice Ruins West').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) || items.hasBackwardsPhendranaReqsHard())
      && items.has(PrimeItem.PLASMA_BEAM);
    };

    this.locations.get('Ice Ruins East (Behind Ice)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) || items.hasBackwardsPhendranaReqsHard())
      && (items.has(PrimeItem.PLASMA_BEAM) || items.canDoInfiniteSpeed());
    };

    this.locations.get('Ice Ruins East (Spider Track)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) || items.hasBackwardsPhendranaReqsHard())
      && items.has(PrimeItem.SPIDER_BALL);
    };

    this.locations.get('Chapel of the Elders').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsHard(minVMRTanks) || items.hasBackwardsPhendranaReqsHard();
    };
    this.locations.get('Chapel of the Elders').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined) {
        items = new ItemCollection([...items.toArray(), item]);
      }
      return items.has(PrimeItem.WAVE_BEAM) && (items.has(PrimeItem.SPACE_JUMP_BOOTS) || items.canLayBombs());
    };

    this.locations.get('Ruined Courtyard').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) || items.hasBackwardsPhendranaReqsHard())
      && items.has(PrimeItem.WAVE_BEAM);
    };

    this.locations.get('Phendrana Canyon').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasPhendranaReqsHard(minVMRTanks) || items.hasBackwardsPhendranaReqsHard();
    };

    this.locations.get('Quarantine Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasBackwardsPhendranaReqsHard() && (items.canLayBombs() || items.has(PrimeItem.SPACE_JUMP_BOOTS));
    };
    this.locations.get('Quarantine Cave').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined) {
        items = new ItemCollection([...items.toArray(), item]);
      }
      return items.has(PrimeItem.SPIDER_BALL) || items.has(PrimeItem.GRAPPLE_BEAM) || items.has(PrimeItem.SPACE_JUMP_BOOTS);
    };

    this.locations.get('Quarantine Monitor').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasBackwardsPhendranaReqsHard() && (items.has(PrimeItem.GRAPPLE_BEAM) || items.has(PrimeItem.SPACE_JUMP_BOOTS));
    };

    this.locations.get('Research Lab Hydra').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) || items.hasBackwardsPhendranaReqsHard())
      && items.canFireSuperMissiles() && items.has(PrimeItem.WAVE_BEAM);
    };

    this.locations.get('Observatory').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) && items.has(PrimeItem.SPACE_JUMP_BOOTS)
          && items.has(PrimeItem.WAVE_BEAM))
        || items.hasMagmoorSouthThroughThardusRequirementsHard()
        || items.hasMagmoorSouthThroughFrozenPikeRequirementsHard();
    };

    this.locations.get('Control Tower').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) && items.has(PrimeItem.SPACE_JUMP_BOOTS)
          && items.has(PrimeItem.WAVE_BEAM))
      || (items.hasMagmoorSouthThroughThardusRequirementsHard() && (
        items.has(PrimeItem.SPACE_JUMP_BOOTS) || (items.has(PrimeItem.SPIDER_BALL) && items.has(PrimeItem.BOOST_BALL) && items.has(PrimeItem.PLASMA_BEAM))
      ))
      || (items.hasMagmoorSouthThroughFrozenPikeRequirementsHard() && (
        items.has(PrimeItem.SPACE_JUMP_BOOTS) || (items.has(PrimeItem.SPIDER_BALL) && items.has(PrimeItem.PLASMA_BEAM))
      ));
    };

    this.locations.get('Research Lab Aether (Tank)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) && items.has(PrimeItem.SPACE_JUMP_BOOTS)
          && items.has(PrimeItem.WAVE_BEAM))
        || items.hasMagmoorSouthThroughThardusRequirementsHard()
        || items.hasMagmoorSouthThroughFrozenPikeRequirementsHard();
    };

    this.locations.get('Research Lab Aether (Morph Track)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) && items.has(PrimeItem.SPACE_JUMP_BOOTS)
          && items.has(PrimeItem.WAVE_BEAM))
        || items.hasMagmoorSouthThroughThardusRequirementsHard()
        || items.hasMagmoorSouthThroughFrozenPikeRequirementsHard();
    };

    this.locations.get('Research Core').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return (items.hasPhendranaReqsHard(minVMRTanks) && items.has(PrimeItem.SPACE_JUMP_BOOTS)
          && items.has(PrimeItem.WAVE_BEAM))
        || items.hasMagmoorSouthThroughThardusRequirementsHard()
        || items.hasMagmoorSouthThroughFrozenPikeRequirementsHard();
    };

    this.locations.get('Transport Access').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasBackwardsPhendranaReqsHard() && items.has(PrimeItem.ICE_BEAM) && items.has(PrimeItem.PLASMA_BEAM);
    };

    this.locations.get('Frost Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMagmoorSouthThroughFrozenPikeRequirementsHard()
      && (items.has(PrimeItem.SPACE_JUMP_BOOTS) || items.has(PrimeItem.GRAPPLE_BEAM));
    };

    this.locations.get('Storage Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMagmoorSouthThroughFrozenPikeRequirementsHard()
      && (items.has(PrimeItem.SPACE_JUMP_BOOTS) || (items.has(PrimeItem.GRAPPLE_BEAM) && items.has(PrimeItem.SPIDER_BALL)));
    };

    this.locations.get('Security Cave').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMagmoorSouthThroughFrozenPikeRequirementsHard()
      && (items.has(PrimeItem.SPACE_JUMP_BOOTS) || (items.has(PrimeItem.GRAPPLE_BEAM) && items.has(PrimeItem.SPIDER_BALL)));
    };

    this.locations.get('Gravity Chamber (Underwater)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMagmoorSouthThroughFrozenPikeRequirementsHard()
      && (items.has(PrimeItem.SPACE_JUMP_BOOTS) || (items.has(PrimeItem.GRAPPLE_BEAM) && items.has(PrimeItem.SPIDER_BALL)));
    };
    this.locations.get('Gravity Chamber (Underwater)').canEscape = function (item: Item, items: ItemCollection): boolean {
      if (item !== undefined) {
        items = new ItemCollection([...items.toArray(), item]);
      }
      return items.has(PrimeItem.SPACE_JUMP_BOOTS)
      || (items.has(PrimeItem.GRAVITY_SUIT) && (items.canLayBombs() || items.has(PrimeItem.SPACE_JUMP_BOOTS)));
    };

    this.locations.get('Gravity Chamber (Grapple Ledge)').canFillItem = function (item: Item, items: ItemCollection): boolean {
      return items.hasMagmoorSouthThroughFrozenPikeRequirementsHard()
      && (items.has(PrimeItem.SPACE_JUMP_BOOTS) || (items.has(PrimeItem.PLASMA_BEAM) && items.has(PrimeItem.GRAPPLE_BEAM) && items.has(PrimeItem.SPIDER_BALL)));
    };
  }

  public initInsane(): void {
    // stub for now
    this.initHard();
  }
}