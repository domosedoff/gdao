import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

/** @type import('hardhat/config').HardhatUserConfig */
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000,
      },
    },
  },
  namedAccounts: {
    deployer: 0,
  },
};

export default config;
