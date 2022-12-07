const OutputView = require('../UI/OutputView.js');

const ErrorHandler = {
  bridgeSizeCatcher(value, callback) {
    try {
      callback(value);
    } catch (error) {
      OutputView.printError('BRIDGE_SIZE');
      return false;
    }
    return true;
  },
};

module.exports = ErrorHandler;
