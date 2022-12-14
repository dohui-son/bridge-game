const OutputView = require('../UI/OutputView.js');
const InputView = require('../UI/InputView.js');
const Validator = require('../utils/Validator.js');
const Bridge = require('../components/Bridge.js');
const BridgeGame = require('../components/BridgeGame.js');

class Game {
	#bridgeGame;
	#bridge;

	constructor() {
		this.#initializeGame();
	}

	#initializeGame() {
		OutputView.printWelcome();
		InputView.readBridgeSize.bind(this)(this.#bridgeSizeHandler);
	}

	#bridgeSizeHandler(bridgeSizeInput) {
		this.#errorHandler('BRIDGE_SIZE', () => {
			Validator.validBridgeSize(bridgeSizeInput);
			const BRIDGE_SIZE = parseInt(bridgeSizeInput);
			return this.#createBridge(BRIDGE_SIZE);
		});
	}

	#createBridge(bridgeSize) {
		this.#bridge = new Bridge(bridgeSize);
		this.#bridgeGame = new BridgeGame();
		return InputView.readMoving.bind(this)(this.#moveHandler);
	}

	#moveHandler(movement) {
		this.#errorHandler('MOVEMENT', () => {
			Validator.validMovement(movement);
			const MOVE_RESULT = this.#bridge.crossBridge(movement);
			this.#bridgeGame.move(movement, MOVE_RESULT);
			this.#showMoveStatus();
			return this.#gameHandler(MOVE_RESULT);
		});
	}

	#showMoveStatus() {
		const MOVE_HISTORY = this.#bridgeGame.moveHistoryGetter;
		OutputView.printMap(MOVE_HISTORY);
	}

	#gameHandler(moveSuccess) {
		if (!moveSuccess) {
			return InputView.readGameCommand.bind(this)(this.#lostHandler);
		}
		const IS_GAME_END = this.#bridge.crossBridgeComplete();
		if (IS_GAME_END) {
			return this.#endOfGame('WIN');
		}
		return InputView.readMoving.bind(this)(this.#moveHandler);
	}

	#retryHandler() {
		this.#bridge.initializeBridgeIndex();
		this.#bridgeGame.retry();
		return InputView.readMoving.bind(this)(this.#moveHandler);
	}

	#lostHandler(quitCommand) {
		this.#errorHandler('QUIT', () => {
			Validator.validGameCommand(quitCommand);
			if (quitCommand === 'Q') {
				return this.#endOfGame('LOST');
			}

			return this.#retryHandler();
		});
	}

	#endOfGame(gameResult) {
		const MOVE_HISTORY = this.#bridgeGame.moveHistoryGetter;
		const GAME_ROUND = this.#bridgeGame.gameRoundGetter;
		OutputView.printResult(MOVE_HISTORY, gameResult, GAME_ROUND);
		OutputView.endUI();
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
		if (errorType === 'QUIT') {
			InputView.readGameCommand.bind(this)(this.#lostHandler);
		}
	}
}

module.exports = Game;
