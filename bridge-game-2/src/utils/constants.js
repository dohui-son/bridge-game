const PREFIX = '\n[ERROR] ';

const MESSAGE = {
	WELCOME: '다리 건너기 게임을 시작합니다.',
	BRIDGE_SIZE: '\n다리의 길이를 입력해주세요.\n',
	MOVEMENT: '\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
	QUIT: '\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
};

const ERROR_MESSAGE = {
	BRIDGE_SIZE: PREFIX + '다리 길이는 3부터 20 사이의 숫자여야 합니다.\n',
	MOVEMENT: PREFIX + '이동할 칸은 대문자 U나 D이어야 합니다. (위: U, 아래: D)\n',
	QUIT: PREFIX + '게임 재시도 여부는 R이나 Q여야 합니다. (재시도: R, 종료: Q)\n',
};

module.exports = {
	MESSAGE,
	ERROR_MESSAGE,
};
