import { ethers } from "hardhat";
import hre from "hardhat";
import * as dotenv from "dotenv";
import keccak256 from "keccak256";
import { MerkleTree } from "merkletreejs";

async function main() {
  const reward_period_days = 2;
  const lock_period_days = 7;
  const reward_procents = 5;
  const daoMinimumQuorum = ethers.utils.parseEther("1");
  const daoDebatingPeriodDuration = 24;

  const accounts = await ethers.getSigners();

  let whiteListAddresses = [
    await accounts[0].getAddress(),
    await accounts[1].getAddress(),
    await accounts[2].getAddress(),
    await accounts[3].getAddress(),
    await accounts[4].getAddress(),
    await accounts[5].getAddress()
  ];

  const leafNodes = whiteListAddresses.map(addr => keccak256(addr));

  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

  const rootHash = await merkleTree.getHexRoot();

  const SuperStaking = await ethers.getContractFactory("MyStaking", accounts[1]);
  const superStaking = await SuperStaking.deploy(
    process.env.UNISWAP_LP_CONTRACT!,
    process.env.XXX_CONTRACT!,
    reward_period_days,
    lock_period_days,
    reward_procents,
    rootHash,
    await accounts[0].getAddress(),
    daoMinimumQuorum,
    daoDebatingPeriodDuration);

  await superStaking.deployed();

  console.log("staking deployed to:", superStaking.address);

  console.log('starting verify contract');

  try {
    await hre.run('verify:verify', {
      address: superStaking.address,
      contract: "contracts/MyStaking.sol:MyStaking",
      constructorArguments: [
        process.env.UNISWAP_LP_CONTRACT!,
        process.env.XXX_CONTRACT!,
        reward_period_days,
        lock_period_days,
        reward_procents,
        rootHash,
        await accounts[0].getAddress(),
        daoMinimumQuorum,
        daoDebatingPeriodDuration
      ],
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
