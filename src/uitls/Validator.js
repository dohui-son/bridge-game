const ErrorHandler = require('./ErrorHandler.js');
const BridgeGameHandler = require('./BridgeGameHandler.js');

const VALIDATE_TABLE = {
  BRIDGE_SIZE: (bridgeSize) => {
    if (isNaN(bridgeSize)) {
      throw new Error('[Error]');
    }
    const BRIDGE_SIZE = parseFloat(bridgeSize);
    if (BRIDGE_SIZE % 1 > 0 || BRIDGE_SIZE < 3 || BRIDGE_SIZE > 20) {
      throw new Error('[Error]');
    }
  },
};

const Validator = {
  validBridgeSize(bridgeSize) {
    const RESULT = ErrorHandler.inputCatcher('BRIDGE_SIZE', bridgeSize, VALIDATE_TABLE['BRIDGE_SIZE']);

    if (!RESULT) {
      this.bridgeSizer();
      return false;
    }
    return true;
  },
};

module.exports = Validator;
