import { ethers } from "hardhat";
import hre from "hardhat";

async function main() {

  const accounts = await ethers.getSigners();
  const XXXERC20Contract= await ethers.getContractFactory("XXXERC20Contract", accounts[1]);
  const myERC20Contract = await XXXERC20Contract.deploy("XXXToken", "XXX", 18);

  await myERC20Contract.deployed();

  console.log("MyERC20Contract deployed to:", myERC20Contract.address);

  console.log('starting verify contract');

  try {
    await hre.run('verify:verify', {
      address: myERC20Contract.address,
      contract: "contracts/XXXERC20Contract.sol:XXXERC20Contract",
      constructorArguments: ["XXXToken", "XXX", 18],
    });
    console.log('verify success');
  } catch (e: any) {
    console.log(e.message);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
