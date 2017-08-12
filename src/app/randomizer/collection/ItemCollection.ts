import { Collection } from './Collection';
import { Item } from '../Item';
import { PrimeItemName } from '../ItemType';

export class ItemCollection extends Collection{
    protected items: Array<Item>;
    protected itemCount: Map<string, number>;

    constructor(items: Array<Item> = []) {
        super(items);
        this.itemCount = new Map<string, number>();
        if (this.items.length > 0) {
            for (let item of this.items) {
                this.incrementItemCount(item);
            }
        }
    }

    public get(index: number): Item {
        return super.get(index);
    }

    public add(item: Item): void {
        super.add(item);
        this.incrementItemCount(item);
    }

    protected incrementItemCount(item: Item) {
        let itemName = item.getName();
        let itemVal= this.itemCount.get(itemName);
        if (itemVal === undefined)
            this.itemCount.set(itemName, 1);
        else
            this.itemCount.set(itemName, itemVal + 1);
    }

    public has(key: string): boolean {
        return this.itemCount.get(key) !== undefined && this.itemCount.get(key) > 0;
    }

    public hasMissiles(): boolean {
        return this.has(PrimeItemName.MISSILE_EXPANSION) || this.has(PrimeItemName.MISSILE_LAUNCHER);
    }

    public hasAnySuit(): boolean {
        return this.has(PrimeItemName.VARIA_SUIT) || this.has(PrimeItemName.GRAVITY_SUIT) || this.has(PrimeItemName.PHAZON_SUIT);
    }

    public canLayBombs(): boolean {
        return this.has(PrimeItemName.MORPH_BALL) && this.has(PrimeItemName.MORPH_BALL_BOMB);
    }

    public canLayPowerBombs(): boolean {
        return this.has(PrimeItemName.MORPH_BALL) && (this.has(PrimeItemName.POWER_BOMB) || this.has(PrimeItemName.POWER_BOMB_EXPANSION));
    }

    public canLayBombsOrPowerBombs(): boolean {
        return this.has(PrimeItemName.MORPH_BALL) && (this.has(PrimeItemName.MORPH_BALL_BOMB) || this.has(PrimeItemName.POWER_BOMB) || this.has(PrimeItemName.POWER_BOMB_EXPANSION));
    }

    public canFireSuperMissiles(): boolean {
        return this.hasMissiles() && this.has(PrimeItemName.CHARGE_BEAM) && this.has(PrimeItemName.SUPER_MISSILE);
    }

    public hasMinesFromTallonReqs(): boolean {
        return this.hasMissiles() && this.canLayBombs() && this.has(PrimeItemName.SPACE_JUMP_BOOTS) && this.has(PrimeItemName.GRAVITY_SUIT)
            && this.has(PrimeItemName.THERMAL_VISOR) && this.has(PrimeItemName.WAVE_BEAM) && this.has(PrimeItemName.ICE_BEAM);
    }
}