const { network } = require("hardhat");

async function main() {
  const tresDias = 3 * 24 * 60 * 60; 
  
  await network.provider.send("evm_increaseTime", [tresDias]);
  await network.provider.send("evm_mine");

  console.log("Tiempo avanzado 3 días.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
