const OutputView = require('../UI/OutputView.js');
const InputView = require('../UI/InputView.js');
const BridgeGame = require('./BridgeGame.js');
const Validator = require('../uitls/Validator.js');

class Game {
  #bridgeGame;

  constructor() {
    OutputView.printWelcome();
    InputView.readBridgeSize.bind(this)(this.createBridge);
  }

  createBridge(bridgeSize) {
    this.#errorHandler('BRIDGE_SIZE', () => {
      this.#bridgeGame = new BridgeGame(bridgeSize);

      return InputView.readMoving.bind(this)(this.moveProcess);
    });
  }

  moveProcess(movement) {
    this.#errorHandler('MOVEMENT', () => {
      Validator.validMovement(movement);
      const MOVE_RESULT = this.#bridgeGame.move(movement);
      this.#bridgeGame.gameHistoryStatus();
      return this.postAction(MOVE_RESULT);
    });
  }

  postAction(moveResult) {
    if (!moveResult) {
      return InputView.readGameCommand.bind(this)(this.lostProcess);
    }

    const CONTINUE = this.#bridgeGame.gameStatus();
    if (CONTINUE) {
      return InputView.readMoving.bind(this)(this.moveProcess);
    }
    if (!CONTINUE) {
      return this.#endOfGame('WIN');
    }
  }

  lostProcess(retryCommand) {
    this.#errorHandler('RETRY', () => {
      Validator.validRetryCommand(retryCommand);
      if (retryCommand === 'R') {
        this.#bridgeGame.retry();

        return InputView.readMoving.bind(this)(this.moveProcess);
      }
      if (retryCommand === 'Q') {
        return this.#endOfGame('LOST');
      }
    });
  }

  #endOfGame(gameResult) {
    const GAME_ROUND = this.#bridgeGame.gameRoundMeta;
    OutputView.printResult(gameResult, GAME_ROUND);
    OutputView.endReadWrite();
  }

  #errorHandler(errorType, callback) {
    try {
      callback();
    } catch (error) {
      this.#errorResponse(errorType);
    }
  }

  #errorResponse(errorType) {
    OutputView.printError(errorType);
    if (errorType === 'BRIDGE_SIZE') {
      InputView.readBridgeSize.bind(this)(this.createBridge);
    }
    if (errorType === 'MOVEMENT') {
      InputView.readMoving.bind(this)(this.moveProcess);
    }
    if (errorType === 'RETRY') {
      InputView.readGameCommand.bind(this)(this.lostProcess);
    }
  }
}

module.exports = Game;
