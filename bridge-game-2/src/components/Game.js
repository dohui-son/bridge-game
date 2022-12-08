const OutputView = require('../UI/OutputView.js');
const InputView = require('../UI/InputView.js');
const Validator = require('../utils/Validator.js');

class Game {
	#bridgeGame;
	#birdgeSize;
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
			this.#birdgeSize = parseInt(bridgeSizeInput);
			return this.#createBridge;
		});
	}

	#errorHandler(errorType, callback) {
		try {
			callback();
		} catch (error) {
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
