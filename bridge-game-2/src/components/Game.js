const OutputView = require('../UI/OutputView.js');
const InputView = require('../UI/InputView.js');
const Validator = require('../utils/Validator.js');
const Bridge = require('../components/Bridge.js');

class Game {
	#bridgeGame;
	#bridgeSize;
	#bridge;
	#gameRound;
	constructor() {
		OutputView.printWelcome();
		this.initializeGame();
		this.#gameRound = 1;
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
