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
    this.#errorHandler('BRIDGE_SIZE', () => {
      this.#bridgeGame = new BridgeGame(bridgeSize);
      this.#bridgeSize = parseInt(bridgeSize);
      return InputView.readMoving.bind(this)(this.moveProcess); //this.makeMovement();
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
      InputView.readMoving.bind(this)(this.moveProcess);
    }
    if (!CONTINUE) {
      // 게임을 성공적으로 마침!
      this.#endOfGame('WIN');
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
    // Todo: 게임 결과 출력후 게임 마침 콘솔 닫아주기
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
