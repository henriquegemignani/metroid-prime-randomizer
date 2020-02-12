import { PrimeWorld } from "./world";
import { ClientSeed } from "../../../common/models/clientSeed";

/**
 * Represents a randomized seed (or game) generated by the application.
 */
export class PrimeGeneratedSeed {
  private id: string;
  private world: PrimeWorld;
  private createdDate: Date;

  constructor(id: string, world: PrimeWorld) {
    this.id = id;
    this.world = world;
    this.createdDate = new Date();
  }

  getId(): string {
    return this.id;
  }

  setId(id: string): void {
    this.id = id;
  }

  getWorld(): PrimeWorld {
    return this.world;
  }

  setWorld(world: PrimeWorld): void {
    this.world = world;
  }

  getCreatedDate(): Date {
    return this.createdDate;
  }

  /**
   * Returns a seed meant for clientside use, since we don't want the user to necessarily see all world details.
   */
  toClientSeed(): ClientSeed {
    return {
      id: this.id,
      seed: this.world.getSettings().seed,
      settingsString: this.world.getSettings().toSettingsString(),
      seedHash: this.world.getLayoutHash(),
      createdDate: this.createdDate
    };
  }
}
