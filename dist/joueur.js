"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joueur = void 0;
class Joueur {
    constructor(nom) {
        this._nom = "";
        this._score = 0;
        this.nom = nom;
    }
    get nom() {
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
    jouer(gobelet) {
        gobelet.lancer();
        this._score += gobelet._valeur;
    }
    afficherScore() {
        console.log(`Vous avez fait ce score : ${this._score}`);
    }
    getScore() {
        return this._score;
    }
}
exports.Joueur = Joueur;
