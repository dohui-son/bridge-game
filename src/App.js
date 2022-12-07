const BridgeGame = require('./BridgeGame.js');
const BridgeGameHandler = require('./uitls/BridgeGameHandler.js');

const OutputView = require('./UI/OutputView.js');

class App {
  #bridgeGame;
  play() {
    this.runGenerator(this.#playGame.bind(this));
  }

  *#playGame() {
    OutputView.printWelcome();
    this.#bridgeGame = new BridgeGame();
    const BRIDGE_SIZE = yield (resolve) => BridgeGameHandler.bridgeSizer(resolve);
    console.log(BRIDGE_SIZE);
  }

  tryCatch(callback) {
    try {
      callback();
    } catch (error) {
      this.errorHandler(error);
    }
  }

  errorHandler(error) {
    console.log(error);
    console.log(error.name);
  }
}

const app = new App();
app.play();

module.exports = App;
