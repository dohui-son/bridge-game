const BridgeGame = require('./BridgeGame.js');
const BridgeGameHandler = require('./uitls/BridgeGameHandler.js');

class App {
  #bridgeGame;
  play() {
    this.playGame();
  }

  playGame() {
    this.#bridgeGame = new BridgeGame();
  }
}

const app = new App();
app.play();

module.exports = App;
