require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0", // Asegúrate que esto coincida con la versión de tu contrato
  networks: {
    hardhat: {
      // Esto es para el nodo local (npx hardhat node)
      chainId: 31337,
      hostname: "127.0.0.1" 
    },
    localhost: {
      // Esto es para cuando despliegas (--network localhost)
      url: "http://127.0.0.1:8545",
      chainId: 31337
    }
  }
};
