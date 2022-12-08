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
};

module.exports = Validator;
