const OutputView = require('../UI/OutputView.js');
const InputView = require('../UI/InputView.js');
const BridgeGame = require('./BridgeGame.js');
const Validator = require('../uitls/Validator.js');

class Game {
  #bridgeGame;
  #bridgeSize; // 필요없을시 지울것

  constructor() {
    OutputView.printWelcome();
    InputView.readBridgeSize.bind(this)(this.createBridge);
  }

  createBridge(bridgeSize) {
    this.errorHandler('BRIDGE_SIZE', () => {
      this.#bridgeGame = new BridgeGame(bridgeSize);
      this.#bridgeSize = parseInt(bridgeSize);
      return this.makeMovement();
    });
  }

  makeMovement() {
    // this.errorHandler('MOVEMENT', () => { . --> 여기 try catch 적용해줄 필요 없음
    InputView.readMoving.bind(this)(this.moveProcess);
  }

  moveProcess(movement) {
    this.errorHandler('MOVEMENT', () => {
      Validator.validMovement(movement);
      const MOVE_RESULT = this.#bridgeGame.move();
      this.#bridgeGame.moveHistoryStatus();
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
    if (errorType === 'MOVEMENT') {
      InputView.readMoving.bind(this)(this.moveProcess);
    }
    //OutputView.printError('BRIDGE_SIZE');
  }
}

module.exports = Game;
