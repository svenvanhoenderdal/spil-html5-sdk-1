function Wallet(walletData) {
    var PlayerCurrency = require("./PlayerCurrency");

    this.currencies = [];
    this.currenciesDict = {};
    for (var i = 0; i < walletData.currencies.length; i++) {
        var currency = new PlayerCurrency(walletData.currencies[i]);
        this.currencies.push(currency);
        this.currenciesDict[currency.getId()] = currency;
    }
    this.offset = walletData.offset;
    this.logic = walletData.logic;
}

Wallet.prototype.getCurrencies = function () {
    return this.currencies;
};
Wallet.prototype.getCurrency = function (currencyId) {
    return this.currenciesDict[currencyId] || null;
};
Wallet.prototype.getOffset = function () {
    return this.offset;
};
Wallet.prototype.setOffset = function (offset) {
    this.offset = offset;
};
Wallet.prototype.getLogic = function () {
    return this.logic;
};
Wallet.prototype.setLogic = function (logic) {
    this.logic = logic;
};
Wallet.prototype.addCurrency = function (currency) {
    this.currencies.push(currency);
    this.currenciesDict[currency.getId()] = currency;
};
Wallet.prototype.removeCurrency = function (currencyId) {
    var currency = this.currenciesDict[currencyId],
        index = this.currencies.indexOf(currency);
    if (index > -1) {
        this.currencies.splice(index, 1);
    }
    delete this.currenciesDict[currencyId];
};

module.exports = Wallet;