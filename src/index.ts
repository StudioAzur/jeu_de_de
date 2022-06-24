import { Partie } from './partie';
import { Joueur } from './joueur';

const main = () => {
  let player1 = new Joueur("Cindy");
  let player2 = new Joueur("Roland");
  const players = [player1, player2];
  let partie = new Partie(2, 4);
  partie.initialiser(players);
  partie.lancer(3);
};

main();
