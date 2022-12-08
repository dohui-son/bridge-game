const OutputView = require('../UI/OutputView.js');
const InputView = require('../UI/InputView.js');
const BridgeGame = require('../BridgeGame.js');

class Game {
  #bridgeGame;
  constructor() {
    OutputView.printWelcome();
    InputView.readBridgeSize.bind(this)(this.createBridge);
  }

  createBridge(bridgeSize) {
    this.tryCatch(() => {
      this.#bridgeGame = new BridgeGame(bridgeSize);
      //
    });
  }

  errorHandler(callback) {
    try {
      callback();
    } catch (error) {
      this.errorResponse(error);
    }
  }

  errorResponse(error) {
    console.log(error);
    //OutputView.printError('BRIDGE_SIZE');
  }
}

module.exports = Game;
