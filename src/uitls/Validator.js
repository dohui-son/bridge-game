const ErrorHandler = require('./ErrorHandler.js');
const BridgeGameHandler = require('./GameHandler.js');

// const VALIDATE_TABLE = {
//   BRIDGE_SIZE: (bridgeSize) => {
//     if (isNaN(bridgeSize)) {
//       throw new Error('[Error]');
//     }
//     const BRIDGE_SIZE = parseFloat(bridgeSize);
//     if (BRIDGE_SIZE % 1 > 0 || BRIDGE_SIZE < 3 || BRIDGE_SIZE > 20) {
//       throw new Error('[Error]');
//     }
//   },
// };

const Validator = {
  validBridgeSize(bridgeSize) {
    if (isNaN(bridgeSize)) {
      throw new Error('[ERROR]');
    }
    const BRIDGE_SIZE = parseFloat(bridgeSize);
    if (BRIDGE_SIZE % 1 > 0 || BRIDGE_SIZE < 3 || BRIDGE_SIZE > 20) {
      throw new Error('[ERROR]');
    }
  },

  validMovement(movement) {
    if (movement !== 'U' && movement !== 'D') {
      throw new Error('[ERROR]');
    }
  },
  //{
  //   const IS_VALID = ErrorHandler.bridgeSizeCatcher(bridgeSize, VALIDATE_TABLE['BRIDGE_SIZE']);

  //   if (!IS_VALID) {
  //     this.bridgeSizer();
  //     return false;
  //   }
  //   if (IS_VALID) {
  //     return true;
  //   }
  // },
};

module.exports = Validator;
