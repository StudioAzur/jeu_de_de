"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.De = void 0;
class De {
    constructor() {
        this._dice = 0;
    }
    get_valeur() {
        this.lancer();
        console.log(`Vous avez fait un ${this._dice}`);
        return this._dice;
    }
    lancer() {
        this._dice = Math.floor(6 * Math.random()) + 1;
    }
}
exports.De = De;
