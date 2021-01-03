var MyContract = artifacts.require("./SharedWallet.sol");

module.exports = function (deployer) {
  deployer.deploy(MyContract);
};
