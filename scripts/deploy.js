const hre = require("hardhat");

async function main() {
  // Obtenemos los firmantes (cuentas)
  const signers = await hre.ethers.getSigners();
  
  // Usamos la Cuenta #1 para el despliegue
  const deployer = signers[1]; 
  
  console.log("Desplegando contrato con la cuenta:", deployer.address);

  // Obtenemos el factory del contrato
  const AyudaChain = await hre.ethers.getContractFactory("AyudaChain", deployer);

  // Desplegamos
  const ayudachain = await AyudaChain.deploy();
  await ayudachain.deployed();

  console.log("AyudaChain desplegado en la dirección:", ayudachain.address);
  console.log("Administrador del contrato:", deployer.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
