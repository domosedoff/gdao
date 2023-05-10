import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Timelock, GDGovernor } from "../typechain-types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();

  const governor = await hre.ethers.getContract<GDGovernor>(
    "GDGovernor",
    deployer
  );

  const timelock = await hre.ethers.getContract<Timelock>(
    "GDGovernor",
    deployer
  );
};
