const OutputView = require('../UI/OutputView.js');

class Game {
	#bridgeGame;
	constructor() {
		OutputView.printWelcome();
	}
}

module.exports = Game;
