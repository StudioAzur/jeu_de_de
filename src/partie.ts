import { Gobelet } from "./gobelet";
import { IParty } from "./iparty";
import { Joueur } from "./joueur";
export class Partie implements IParty {
  private _joueurs: Joueur[] = [];
  private _nb_tours: number = 0;
  private _gobelet: Gobelet;

  constructor(nb_tours: number, nb_des: number) {
    this._nb_tours = nb_tours;
    this._gobelet = new Gobelet(nb_des);
    this._joueurs = [];
  }

  get joueurs() {
    return this._joueurs;
  }

  /**
   * Il prend un tableau de joueurs et les pousse dans le tableau _joueurs.
   * @param {Joueur[]} arrayPlayer - Joueur[]
   */
  initialiser(arrayPlayer: Joueur[]) {
    arrayPlayer.forEach((element) => {
      this._joueurs.push(element);
    });
  }

  /**
   * La fonction lancer() prend un nombre comme argument et boucle le nombre de fois spécifié par
   * l'argument.
   * @param {number} nbTour - nombre le nombre de tours
   */
  lancer(nb_tour: number) {
    for (let index = 0; index < nb_tour; index++) {
      this._joueurs.forEach((joueur) => {
        joueur.jouer(this._gobelet);
        joueur.afficherScore();
      });
    }
    this.afficherGagnant();
  }

 /**
   * La fonction affiche le gagnant
   * 
   */
  afficherGagnant() {
    let winner = this._joueurs[0];
    this._joueurs.forEach((element) => {
      if (element.getScore() > winner.getScore()) {
        winner = element;
      }
    });
    
    console.log(this._joueurs);

    console.log(`Le gagnant est ${winner.nom}`);
  }
}
