function sniperStrategy(currentPrice, config) {
  if (currentPrice <= config.entryPrice) {
    return "BUY";
  }

  if (currentPrice >= config.takeProfit) {
    return "SELL";
  }

  if (currentPrice <= config.stopLoss) {
    return "STOP LOSS";
  }

  return "HOLD";
}

module.exports = sniperStrategy;
