const executeTrade = require("./core/engine");
const config = require("./config/settings");

function getMockMarketPrice() {
  return Math.floor(Math.random() * (67000 - 64000 + 1)) + 64000;
}

setInterval(() => {
  const currentPrice = getMockMarketPrice();
  executeTrade(currentPrice, config);
}, 2000);
