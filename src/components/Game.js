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

  //   makeMovement() {
  //     // this.errorHandler('MOVEMENT', () => { . --> 여기 try catch 적용해줄 필요 없음
  //     InputView.readMoving.bind(this)(this.moveProcess);
  //   }

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
      // 실패 - 게임 다시 할지 물어보고 다시하면 retry 메서드 작성해주기
      return InputView.readGameCommand.bind(this)(this.lostProcess);
    }

    const CONTINUE = this.#bridgeGame.gameStatus();
    if (CONTINUE) {
      // 게임 계속
      InputView.readMoving.bind(this)(this.moveProcess);
    }
    if (!CONTINUE) {
      // 게임을 성공적으로 마침!
    }
  }

  lostProcess(retryCommand) {
    this.#errorHandler('RETRY', () => {
      console.log(retryCommand);
    });
  }

  quitGame(gameResult) {
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
    //OutputView.printError('BRIDGE_SIZE');
  }
}

module.exports = Game;
