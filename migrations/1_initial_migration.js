var Migrations = artifacts.require("./SharedWallet.sol");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
