require('babel-register');
require('babel-polyfill');

// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const mnemonic = "damp arch hazard super vault token mosquito idea wreck attack enjoy demand job grain crunch";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/b0e2c80524ff42f4824795def6423362")
      },
      network_id: 3
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "kovan.infura.io/v3/b0e2c80524ff42f4824795def6423362")
      },
      network_id: 42
    },
    main: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://mainnet.infura.io/v3/b0e2c80524ff42f4824795def6423362" + process.env.INFURA_API_KEY),
      network_id: 1,
      gas: 3000000,
      gasPrice: 10000000000
    }      
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
