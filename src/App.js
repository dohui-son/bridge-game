const BridgeGame = require('./BridgeGame.js');

class App {
  #bridgeGame;
  play() {
    this.playGame();
  }

  playGame() {
    this.#bridgeGame = new BridgeGame();
    return this.#bridgeGame.initialProcess();
  }
}

const app = new App();
app.play();

module.exports = App;
