"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partie_1 = require("./partie");
const joueur_1 = require("./joueur");
const main = () => {
    let player1 = new joueur_1.Joueur("Cindy");
    let player2 = new joueur_1.Joueur("Roland");
    const players = [player1, player2];
    let partie = new partie_1.Partie(2, 4);
    partie.initialiser(players);
    partie.lancer(3);
};
main();
