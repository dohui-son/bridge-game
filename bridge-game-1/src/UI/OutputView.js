/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */

/*
제공된 OutputView 객체를 활용해 구현해야 한다.
OutputView의 파일 경로는 변경할 수 있다.
OutputView의 메서드의 이름은 변경할 수 없고, 인자는 필요에 따라 추가하거나 변경할 수 있다.
값 출력을 위해 필요한 메서드를 추가할 수 있다.
*/
const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE, ERROR_MESSAGE } = require('../constants/constants.js');

const OutputView = {
  printWelcome() {
    Console.print(MESSAGE['WELCOME']);
  },

  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(gameHistory) {
    for (let index = 0; index < 2; index++) {
      const FROMATTED_MAP = '[ ' + gameHistory[index].join(' | ') + ' ]';
      Console.print(FROMATTED_MAP);
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult(gameRoundResult, gameRound, gameHistory) {
    Console.print(MESSAGE['RESULT_TITLE']);
    this.printMap(gameHistory);
    Console.print(
      `${MESSAGE['SUCCESS_SUBTITLE']} ${MESSAGE[gameRoundResult]}${MESSAGE['ROUND_SUBTITLE']} ${gameRound}`
    );
  },

  printError(errorType) {
    Console.print(ERROR_MESSAGE[errorType]);
  },

  endReadWrite() {
    Console.close();
  },
};

module.exports = OutputView;
