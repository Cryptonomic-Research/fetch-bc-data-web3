var Web3 = require("web3");

var web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://eth-rinkeby.alchemyapi.io/v2/MohCB10WeCdVog8W2wZIxzJbzg9oz5lQ"
  )
);

// Get block data from block number
const getBlockData = async (blockNo) => {
  return web3.eth.getBlock(blockNo);
};

// Get transaction data from tx hash
const getTransactionData = async (txHash) => {
  return web3.eth.getTransaction(txHash);
};

(async () => {
  var block = await getBlockData(10000000);
  console.log(block.transactions);
  block.transactions.map(async (txHash, i) => {
    var tx = await getTransactionData(txHash);
    console.log(`=======================[Tx${i}]=======================`);
    console.log(tx);
  });
})();
