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

const PREFIX = '\n[ERROR] ';
const ERROR_MESSAGE = {
  BRIDGE_SIZE: '다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  MOVEMENT: '이동할 칸은 대문자 U나 D만 입력해주세요. (위: U, 아래: D)\n',
  RETRY: '게임 다시 시도 여부는 대문자 R이나 Q만 입력해주세요. (재시도: R, 종료: Q)',
};

const RESULT_MESSAGE = {
  WIN: '성공',
  LOST: '실패',
};

const OutputView = {
  printWelcome() {
    Console.print('다리 건너기 게임을 시작합니다.');
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
    Console.print('\n최종 게임 결과');
    this.printMap(gameHistory);
    Console.print(
      `\n게임 성공 여부: ${RESULT_MESSAGE[gameRoundResult]}\n총 시도한 횟수: ${gameRound}`
    );
  },

  printError(errorType) {
    Console.print(PREFIX + ERROR_MESSAGE[errorType]);
  },

  endReadWrite() {
    Console.close();
  },
};

module.exports = OutputView;
