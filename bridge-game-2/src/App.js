/*REQUIREMENTS

*/

const Game = require('../src/components/Game.js');

class App {
	#game;
	play() {
		const game = new Game();
	}
}

const app = new App();
app.play();

module.exports = App;
