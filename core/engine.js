const sniperStrategy = require("../strategies/sniperStrategy");
const logger = require("../utils/logger");

function executeTrade(price, config) {
  const signal = sniperStrategy(price, config);

  logger(`Current Price: ${price}`);
  logger(`Signal: ${signal}`);

  return signal;
}

module.exports = executeTrade;
