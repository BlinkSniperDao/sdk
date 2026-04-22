require("dotenv").config();

module.exports = {
  pair: process.env.TRADE_PAIR,
  entryPrice: Number(process.env.ENTRY_PRICE),
  takeProfit: Number(process.env.TAKE_PROFIT),
  stopLoss: Number(process.env.STOP_LOSS)
};
