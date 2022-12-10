const { generate } = require('../BridgeRandomNumberGenerator.js');
const { makeBridge } = require('../BridgeMaker.js');

class Bridge {
	#bridgeSize;
	#bridgeStatus;
	#bridgeIndex;

	constructor(bridgeSize) {
		this.#bridgeSize = bridgeSize;
		this.#bridgeStatus = [];
		this.#generateBridge();
		this.#bridgeIndex = 0;
	}

	#generateBridge() {
		this.#bridgeStatus = makeBridge(this.#bridgeSize, generate);
		console.log(this.#bridgeStatus);
	}

	crossBridge(movement) {
		this.#bridgeIndex += 1;
		if (this.#bridgeStatus[this.#bridgeIndex - 1] === movement) {
			return true;
		}
		return false;
	}

	crossBridgeComplete() {
		if (this.#bridgeIndex === this.#bridgeSize) {
			return true;
		}
		if (this.#bridgeIndex < this.#bridgeSize) {
			return false;
		}
	}

	initializeBridgeIndex() {
		this.#bridgeIndex = 0;
	}
}

module.exports = Bridge;
