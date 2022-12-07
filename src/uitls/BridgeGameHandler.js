const InputView = require('../UI/InputView.js');
const Validator = require('./Validator.js');

const BridgeGameHandler = {
  bridgeSizer() {
    InputView.readBridgeSize((bridgeSize) => {
      if (Validator.validBridgeSize.bind(this)(bridgeSize)) {
        const BRIDGE_SIZE = parseInt(bridgeSize);
        return BRIDGE_SIZE;
      }
    });
  },
};

module.exports = BridgeGameHandler;
