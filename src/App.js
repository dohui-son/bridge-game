const BridgeGame = require('./BridgeGame.js');
const BridgeGameHandler = require('./uitls/BridgeGameHandler.js');
const { runGenerator } = require('./uitls/Generator.js');

class App {
  #bridgeGame;
  play() {
    this.playGame();
  }

  playGame() {
    this.#bridgeGame = new BridgeGame();
    const HI = yield this.#bridgeGame.initialProcess();
  }
}

const app = new App();
app.play();

module.exports = App;
