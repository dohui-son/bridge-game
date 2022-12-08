const { makBridge, makeBridge } = require('../BridgeMaker.js');
const { generate } = require('../BridgeRandomNumberGenerator.js');

class Bridge {
  #bridgeArray; // 이름 바꿔야함

  constructor(bridgeSize) {
    this.#bridgeArray = makeBridge(bridgeSize, generate);
  }

  bridgeMovable(movement, bridgeIndex) {
    if (movement === this.#bridgeArray[bridgeIndex]) {
      return true;
    }
    return false;
  }
}

module.exports = Bridge;
