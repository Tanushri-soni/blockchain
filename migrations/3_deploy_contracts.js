var DocumentStorage = artifacts.require("./DocumentStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(DocumentStorage);
};