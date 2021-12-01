const CommieCoin = artifacts.require("CommieCoin");
const PancakeRouter = artifacts.require("PancakeRouter");

module.exports = function (deployer) {
  deployer.deploy(PancakeRouter);
  deployer.deploy(CommieCoin, PancakeRouter.address);
};
