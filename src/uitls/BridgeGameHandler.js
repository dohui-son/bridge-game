const InputView = require('../UI/InputView.js');
const Validator = require('./Validator.js');

const BridgeGameHandler = {
  bridgeSizer() {
    InputView.readBridgeSize((bridgeSize) => {
      const IS_VALID = Validator.validBridgeSize.bind(this)(bridgeSize);
      if (IS_VALID) {
        console.log('성공 - 제대로 다리 길이 입력됨');
        const BRIDGE_SIZE = parseInt(bridgeSize);
        console.log(BRIDGE_SIZE);

        return BRIDGE_SIZE;
      }
      return 1;
    });
  },
};

module.exports = BridgeGameHandler;
