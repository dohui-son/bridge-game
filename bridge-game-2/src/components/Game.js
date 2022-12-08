const OutputView = require('../UI/OutputView.js');
const InputView = require('../UI/InputView.js');

class Game {
	#bridgeGame;
	constructor() {
		OutputView.printWelcome();
	}

	initializeGame() {
		InputView.readBridgeSize.bind(this)(b);
	}

	bridgeSizeHandler(bridgeSize) {
		this.#errorHandler('BRIDGE_SIZE', () => {});
	}

	#errorHandler(errorType, callback) {
		try {
			callback();
		} catch (error) {
			this.#errorResponse(errorType);
		}
	}

	#errorResponse(errorType) {
		OutputView.printError(errorType);
		if (errorType === 'BRIDGE_SIZE') {
		}
	}
}

module.exports = Game;
