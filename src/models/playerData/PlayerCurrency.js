var Currency = require('../gameData/Currency.js');

function PlayerCurrency(playerCurrencyData, _gameData) {
    Currency.call(this, playerCurrencyData);
    var currency = _gameData.getCurrency(this.id);
    this.name = currency.getName();
    this.type = currency.getType();
    this.currentBalance = playerCurrencyData.currentBalance;
    this.delta = playerCurrencyData.delta;
}
PlayerCurrency.prototype = Object.create(Currency.prototype);
PlayerCurrency.prototype.constructor = PlayerCurrency;

PlayerCurrency.prototype.getCurrentBalance = function(){
    return this.currentBalance;
};
PlayerCurrency.prototype.getDelta = function(){
    return this.delta;
};

module.exports = PlayerCurrency;
