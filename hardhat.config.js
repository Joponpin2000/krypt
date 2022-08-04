require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/hOkDRR14cRET36rIHrB6NSN-b8q16W2u",
      accounts: [
        "71c1b08988e99ff1a3b6e01c568595e18f728e27b2c37aa070d6e0f2c6878ee8",
      ],
    },
  },
};

// 0xc0DaE4d3803c752C5B8e171Df868bF0c7435Cf53
