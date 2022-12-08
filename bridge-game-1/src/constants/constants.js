const INPUT_MESSAGE = {
  BRIDGE_SIZE: '\n다리의 길이를 입력해주세요.\n',
  MOVE: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  RETRY: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const MESSAGE = {
  WELCOME: '다리 건너기 게임을 시작합니다.',
  WIN: '성공',
  LOST: '실패',
  RESULT_TITLE: '\n최종 게임 결과',
  SUCCESS_SUBTITLE: '\n게임 성공 여부:',
  ROUND_SUBTITLE: '\n총 시도한 횟수:',
};

const PREFIX = '\n[ERROR] ';

const ERROR_MESSAGE = {
  BRIDGE_SIZE: PREFIX + '다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
  MOVEMENT: PREFIX + '이동할 칸은 대문자 U나 D만 입력해주세요. (위: U, 아래: D)\n',
  RETRY: PREFIX + '게임 다시 시도 여부는 대문자 R이나 Q만 입력해주세요. (재시도: R, 종료: Q)',
};

module.exports = {
  INPUT_MESSAGE,
  MESSAGE,
  ERROR_MESSAGE,
};
