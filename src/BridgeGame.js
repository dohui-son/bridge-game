/**
 * 다리 건너기 게임을 관리하는 클래스
 */

/*
제공된 BridgeMaker 객체를 활용해 구현해야 한다.
BridgeMaker에 프로퍼티를 추가할 수 없다.
BridgeMaker의 파일 경로는 변경할 수 없다.
BridgeMaker의 메서드의 시그니처(인자, 이름)와 반환 타입은 변경할 수 없다.
*/

const BridgeGameHandler = require("./uitls/BridgeGameHandler.js");
const OutputView = require("./UI/OutputView.js");

class BridgeGame {
  #bridgeSize;

  constructor() {
    OutputView.printWelcome();
  }

  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  move() {}

  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry() {}

  // initialProcess() {
  //   return BridgeGameHandler.bridgeSizer();
  // }

  // createBridge(input) {
  //   console.log(input);
  // }
}

module.exports = BridgeGame;
