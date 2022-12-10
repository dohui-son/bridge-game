const { generate } = require('../BridgeRandomNumberGenerator.js');
const { makeBridge } = require('../BridgeMaker.js');

class Bridge {
	#bridgeSize;
	#bridgeStatus;

	constructor(bridgeSize) {
		this.#bridgeSize = bridgeSize;
		this.#bridgeStatus = [];
		this.#generateBridge();
	}

	#generateBridge() {
		this.#bridgeStatus = makeBridge(this.#bridgeSize, generate);
	}

	moveCapability(movement, moveIndex) {
		if (this.#bridgeStatus[moveIndex] === movement) {
			return true;
		}
		return false;
	}
}

module.exports = Bridge;
