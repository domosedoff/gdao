import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const governToken = await get("GovernToken");
  const timeLockContr = await get("Timelock");

  const delay = 1;
  const votingPeriod = 6;
  const quorum = 4;

  await deploy("Governor", {
    from: deployer,
    log: true,
    args: [
      governToken.address,
      timeLockContr.address,
      delay,
      votingPeriod,
      quorum,
    ],
  });
};
