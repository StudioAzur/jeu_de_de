import { IGoblet } from "./igoblet";
import { De } from "./de";
export class Gobelet implements IGoblet {
  public _valeur: number = 0;
  private _des: De[] = [];
  private _nb_des = 0;

  constructor(nb_des: number) {
    this._valeur = 0;
    for (let index = 0; index < nb_des; index++) {
      this._des[index] = new De();
    }
  }

  getValeur(): number {
    this._des.forEach((item) => {
      this._valeur += item.get_valeur();
    });
    console.log(this._valeur);

    return this._valeur;
  }

  lancer(): void {
    let count = 0;
    for (let index = 0; index < this._des.length; index++) {
      const element = this._des[index];
      this._des[index].lancer();
      let value = element.get_valeur();
      count += value;
      this._valeur = count;
    }
  }

  afficherScore() {
    console.log(`Vous avez fait : ${this._des}`);
    console.log(`Votre score final est ${this._valeur}`);
  }

  get nb_des(): number {
    return this._nb_des;
  }

  set nb_des(value) {
    this._nb_des = value;
  }
}
