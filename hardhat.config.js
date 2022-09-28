/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

const { 
  GOERLI,
  ACC_1
} = process.env;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `${GOERLI}`,
      accounts: [`${ACC_1}`]
    }
  }
};
