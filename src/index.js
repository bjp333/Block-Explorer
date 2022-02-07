const { utils, providers, Wallet, ethers } = require('ethers');
const axios = require('axios');
require('dotenv').config()

// Alchemy/Infura HTTP endpoint URL
const url = process.env.RINKEBY_URL;

// hook up ethers provider
const provider = new ethers.providers.JsonRpcProvider(url);

//copy-paste a prviate key from a Rinkeby account!
const privateKey = process.env.RINKEBY_PRIVATE_KEY;

// let's create a Wallet instance 
const wallet = new ethers.Wallet(privateKey, provider);

const blocksToDisplay = 4;

async function getBlockNumber() {
    const blockArray = [];
    let block = await provider.getBlock();
    return block;
    //blockArray.push(block);
    /*
    for (let i = 1; i <= blocksToDisplay; i++) {
        block = await provider.getBlock(block.number - 1);

        console.log(block);
        blockArray.push(block);
    }
    console.log(blockArray);
    */
   console.log("block");

}

module.exports = getBlockNumber;


