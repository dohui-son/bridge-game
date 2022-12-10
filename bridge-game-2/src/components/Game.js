const OutputView = require('../UI/OutputView.js');
const InputView = require('../UI/InputView.js');
const Validator = require('../utils/Validator.js');
const Bridge = require('../components/Bridge.js');

class Game {
	#bridgeGame;
	#bridgeSize;
	#bridge;

	constructor() {
		OutputView.printWelcome();
		this.initializeGame();
	}

	initializeGame() {
		InputView.readBridgeSize.bind(this)(this.bridgeSizeHandler);
	}

	bridgeSizeHandler(bridgeSizeInput) {
		this.#errorHandler('BRIDGE_SIZE', () => {
			Validator.validBridgeSize(bridgeSizeInput);
			this.#bridgeSize = parseInt(bridgeSizeInput);
			return this.#createBridge();
		});
	}

	#createBridge() {
		this.#bridge = new Bridge(this.#bridgeSize);
		this.#bridgeGame = new Bridge();
		return InputView.readMoving.bind(this)(this.#userMove);
	}

	#userMove(movement) {
		this.#errorHandler('MOVE', () => {
			// const MOVE_RESULT = this.#bridge.moveCapability(movement);
			// this.#bridgeGame.move(MOVE_RESULT);
		});
	}

	#errorHandler(errorType, callback) {
		try {
			callback();
		} catch (error) {
			console.log(error);
			this.#errorResponse.bind(this)(errorType);
		}
	}

	#errorResponse(errorType) {
		OutputView.printError(errorType);
		if (errorType === 'BRIDGE_SIZE') {
			InputView.readBridgeSize.bind(this)(this.bridgeSizeHandler);
		}
	}
}

module.exports = Game;
