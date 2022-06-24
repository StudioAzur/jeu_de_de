"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gobelet = void 0;
const de_1 = require("./de");
class Gobelet {
    constructor(nb_des) {
        this._valeur = 0;
        this._des = [];
        this._nb_des = 0;
        this._valeur = 0;
        for (let index = 0; index < nb_des; index++) {
            this._des[index] = new de_1.De();
        }
    }
    getValeur() {
        this._des.forEach((item) => {
            this._valeur += item.get_valeur();
        });
        console.log(this._valeur);
        return this._valeur;
    }
    lancer() {
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
    get nb_des() {
        return this._nb_des;
    }
    set nb_des(value) {
        this._nb_des = value;
    }
}
exports.Gobelet = Gobelet;
