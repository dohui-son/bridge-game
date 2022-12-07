const OutputView = require('../UI/OutputView.js');

const ErrorHandler = {
  inputCatcher(inputType, value, callback) {
    try {
      callback(value);
    } catch (error) {
      OutputView.printError(inputType);
      return false;
    }
    return true;
  },
};

module.exports = ErrorHandler;
