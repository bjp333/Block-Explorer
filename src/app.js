import "./styles.css"
const { FeeMarketEIP1559Transaction } = require('@ethereumjs/tx');
const { default: Common, Chain, Hardfork } = require('@ethereumjs/common');
const axios = require('axios');
require('dotenv').config()

// Alchemy/Infura HTTP endpoint URL
const url = process.env.RINKEBY_URL;

// hook up ethers provider
const provider = new ethers.providers.JsonRpcProvider(url);

//copy-paste a prviate key from a Rinkeby account!
const privateKey = process.env.RINKEBY_PRIVATE_KEY;

axios.post(url, {
    
})
