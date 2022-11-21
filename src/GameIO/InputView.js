/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * 제공된 InputView 객체를 활용해 구현해야 한다.
 * InputView의 파일 경로는 변경할 수 있다.
 * InputView의 메서드의 인자는 변경할 수 있다.
 * 사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다.
 */

const MissionUtils = require("@woowacourse/mission-utils");

const Validator = require("../Library/Validator.js");

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(
      "다리의 길이를 입력해주세요.\n",
      (bridgeLength) => {
        if (Validator.isBridgeLength(bridgeLength)) {
          return parseInt(bridgeLength);
        }
        // bridgeLen입력값을 Controller에서 검증한 후 --> BridegMaker로 다리를 만들어서 Model이용 --> Model에서 bridge길이 및 만들어진 다리 정보를 저장
      }
    );
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
      (moveDirection) => {
        if (Validator.isMoveDirection(moveDirection)) {
          return moveDirection;
        }
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
      (input) => {
        if (Validator.isQuit(input)) {
          return input;
        }
      }
    );
  },
};

module.exports = InputView;
