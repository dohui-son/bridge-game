const OutputView = require('../UI/OutputView.js');
const InputView = require('../UI/InputView.js');
const Validator = require('../utils/Validator.js');
const Bridge = require('../components/Bridge.js');
const BridgeGame = require('../components/BridgeGame.js');

class Game {
	#bridgeGame;
	#bridgeSize;
	#bridge;
	#gameRound;
	#moveIndex;

	constructor() {
		this.initializeGame();
	}

	initializeGame() {
		OutputView.printWelcome();
		InputView.readBridgeSize.bind(this)(this.#bridgeSizeHandler);
		this.#gameRound = 1;
		this.#moveIndex = 0;
	}

	#bridgeSizeHandler(bridgeSizeInput) {
		this.#errorHandler('BRIDGE_SIZE', () => {
			Validator.validBridgeSize(bridgeSizeInput);
			this.#bridgeSize = parseInt(bridgeSizeInput);
			return this.#createBridge();
		});
	}

	#createBridge() {
		this.#bridge = new Bridge(this.#bridgeSize);
		this.#bridgeGame = new BridgeGame();
		return InputView.readMoving.bind(this)(this.#moveHandler);
	}

	#moveHandler(movement) {
		this.#errorHandler('MOVEMENT', () => {
			Validator.validMovement(movement);
			const MOVE_RESULT = this.#bridge.moveCapability(movement, this.#moveIndex);
			this.#bridgeGame.move(movement, MOVE_RESULT);
			this.#showMoveStatus();
			return this.#gameHandler(MOVE_RESULT);
		});
	}

	#showMoveStatus() {
		const MOVE_HISTORY = this.#bridgeGame.moveHistoryGetter;
		OutputView.printMap(MOVE_HISTORY);
	}

	#gameHandler(moveResult) {
		console.log(moveResult);
	}

	#errorHandler(errorType, callback) {
		try {
			callback();
		} catch (error) {
			console.log(error);
			OutputView.printError(errorType);
			this.#errorResponse.bind(this)(errorType);
		}
	}

	#errorResponse(errorType) {
		if (errorType === 'BRIDGE_SIZE') {
			InputView.readBridgeSize.bind(this)(this.#bridgeSizeHandler);
		}
		if (errorType === 'MOVEMENT') {
			InputView.readMoving.bind(this)(this.#moveHandler);
		}
	}
}

module.exports = Game;
