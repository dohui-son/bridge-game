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
    this.errorHandler('BRIDGE_SIZE', () => {
      this.#bridgeGame = new BridgeGame(bridgeSize);
      //
    });
  }

  errorHandler(errorType, callback) {
    try {
      callback();
    } catch (error) {
      this.errorResponse(errorType);
    }
  }

  errorResponse(errorType) {
    OutputView.printError(errorType);
    if (errorType === 'BRIDGE_SIZE') {
      InputView.readBridgeSize.bind(this)(this.createBridge);
    }
    //OutputView.printError('BRIDGE_SIZE');
  }
}

module.exports = Game;
