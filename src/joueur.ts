import { Gobelet } from "./gobelet";
import { IPlayer } from "./iplayer";
export class Joueur implements IPlayer {
  public _nom: string = "";
  public _score: number = 0;

  constructor(nom: string) {
    this.nom = nom;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(nom) {
    this._nom = nom;
  }

  get score() {
    return this._score;
  }

  set score(value) {
    this._score = value;
  }

  jouer(gobelet: Gobelet) {
    gobelet.lancer();
    this._score += gobelet._valeur;
  }

  /**
   * Il affiche le score dans la console.
   */
  afficherScore() {
    console.log(`Vous avez fait ce score : ${this._score}`);
  }

  /**
   * Elle renvoie la valeur de la variable privée _score.
   * @returns Le score du joueur.
   */
  getScore(){
    return this._score;
  }
}
