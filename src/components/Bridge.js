const { makeBridge } = require('../BridgeMaker.js');
const { generate } = require('../BridgeRandomNumberGenerator.js');

class Bridge {
  #bridgeStatus;

  constructor(bridgeSize) {
    this.#bridgeStatus = makeBridge(bridgeSize, generate);
  }

  bridgeMovable(movement, bridgeIndex) {
    if (movement === this.#bridgeStatus[bridgeIndex]) {
      return true;
    }
    return false;
  }
}

module.exports = Bridge;
