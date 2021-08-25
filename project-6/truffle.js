const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "d718b92f991944d9b02fb4d1eaa773ae";

const mnemonic = "water luxury team member grass ethics destroy subway exhaust crouch clay brief";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
};