const OutputView = require('../UI/OutputView.js');
const InputView = require('../UI/InputView.js');

class Game {
  #bridgeGame;
  constructor() {
    OutputView.printWelcome();
    InputView.readBridgeSize.bind(this)(this.createBridge);
  }

  createBridge(bridgeSize) {}
}

module.exports = Game;
