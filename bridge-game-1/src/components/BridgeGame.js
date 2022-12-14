/**
 * 다리 건너기 게임을 관리하는 클래스
 */

/*
제공된 BridgeMaker 객체를 활용해 구현해야 한다.
BridgeMaker에 프로퍼티를 추가할 수 없다.
BridgeMaker의 파일 경로는 변경할 수 없다.
BridgeMaker의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.
*/

const OutputView = require('../UI/OutputView.js');
const Validator = require('../uitls/Validator.js');
const Bridge = require('./Bridge.js');

const MOVEMENT_TABLE = {
  U: 0,
  D: 1,
  COUNTERPART: {
    U: 1,
    D: 0,
  },
};

class BridgeGame {
  #bridgeSize;
  #bridge;
  #index;
  #gameRound;
  #gameHistory;

  constructor(bridgeSize) {
    Validator.validBridgeSize(bridgeSize);
    this.#initializeBridge(bridgeSize);
    this.#gameRound = 1;
    this.#initializeBridgeGameMeta();
  }

  #initializeBridge(bridgeSize) {
    this.#bridgeSize = parseInt(bridgeSize);
    this.#bridge = new Bridge(this.#bridgeSize);
  }

  #initializeBridgeGameMeta() {
    this.#index = 0;
    this.#gameHistory = [[], []];
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move(movement) {
    const MOVE_RESULT = this.#bridge.bridgeMovable(movement, this.#index);
    this.#recordGameHistory(movement, MOVE_RESULT);
    this.#index += 1;
    return MOVE_RESULT;
  }

  #recordGameHistory(movement, moveResult) {
    if (moveResult) {
      this.#gameHistory[MOVEMENT_TABLE[movement]].push('O');
    }
    if (!moveResult) {
      this.#gameHistory[MOVEMENT_TABLE[movement]].push('X');
    }
    this.#gameHistory[MOVEMENT_TABLE.COUNTERPART[movement]].push(' ');
  }

  gameHistoryStatus() {
    OutputView.printMap(this.#gameHistory);
  }

  gameStatus() {
    if (this.#bridgeSize === this.#index) {
      return false;
    }
    return true;
  }

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {
    this.#gameRound += 1;
    this.#initializeBridgeGameMeta();
  }

  gameConclusion(gameResult) {
    OutputView.printResult(gameResult, this.#gameRound, this.#gameHistory);
  }
}

module.exports = BridgeGame;
