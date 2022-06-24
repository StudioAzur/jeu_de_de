import { IDice } from "./idice";
export class De implements IDice {
  private _dice: number = 0;

  get_valeur(): number {
    this.lancer();
    console.log(`Vous avez fait un ${this._dice}`);
    return this._dice;
  }

  lancer():void{
    this._dice = Math.floor(6 * Math.random()) + 1;
  }
}
