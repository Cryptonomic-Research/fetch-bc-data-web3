var Web3 = require("web3");

var web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://eth-rinkeby.alchemyapi.io/v2/MohCB10WeCdVog8W2wZIxzJbzg9oz5lQ"
  )
);

web3.eth.getBlock(10000000).then(console.log);
