const InputView = require('../UI/InputView.js');
const Validator = require('./Validator.js');

const BridgeGameHandler = {
  bridgeSizer() {
    InputView.readBridgeSize((bridgeSize) => {
      const IS_VALID = Validator.validBridgeSize.bind(this)(bridgeSize);
      if (IS_VALID) {
        console.log('성공 - 제대로 다리 길이 입력됨');
        const BRIDGE_SIZE = parseInt(bridgeSize);

        return BRIDGE_SIZE;
      }
    });
  },
};

module.exports = BridgeGameHandler;
