"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partie = void 0;
const gobelet_1 = require("./gobelet");
class Partie {
    constructor(nb_tours, nb_des) {
        this._joueurs = [];
        this._nb_tours = 0;
        this._nb_tours = nb_tours;
        this._gobelet = new gobelet_1.Gobelet(nb_des);
        this._joueurs = [];
    }
    get joueurs() {
        return this._joueurs;
    }
    /**
     * Il prend un tableau de joueurs et les pousse dans le tableau _joueurs.
     * @param {Joueur[]} arrayPlayer - Joueur[]
     */
    initialiser(arrayPlayer) {
        arrayPlayer.forEach((element) => {
            this._joueurs.push(element);
        });
    }
    /**
     * La fonction lancer() prend un nombre comme argument et boucle le nombre de fois spécifié par
     * l'argument.
     * @param {number} nbTour - nombre le nombre de tours
     */
    lancer(nb_tour) {
        for (let index = 0; index < nb_tour; index++) {
            this._joueurs.forEach((joueur) => {
                joueur.jouer(this._gobelet);
                joueur.afficherScore();
            });
        }
        this.afficherGagnant();
    }
    afficherGagnant() {
        let winner = this._joueurs[0];
        this._joueurs.forEach((element) => {
            if (element.getScore() > winner.getScore()) {
                winner = element;
            }
        });
        /*  let winners = this._joueurs.filter((element) => {
          element.getScore() === maximum;
          console.log(element.getScore());
          console.log(maximum);
        }); */
        console.log(this._joueurs);
        console.log(`Le gagnant est ${winner.nom}`);
    }
}
exports.Partie = Partie;
