require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind concert grace hero foster tattoo'; 
let testAccounts = [
"0x3635a2efb1f0314a65029b888ae44bf450debe4cac8293eb4462d8dc08081054",
"0x86e844effb2f294490eff917dbe70db813f6e1f8ffa350e60d2d3b9ab486cd41",
"0x0c28fa81446e788a6152c529d715baad58149346339bfdf87d0724f6a1b21091",
"0xa60b6a27c679df1463ecf95a355fbe1de744aa2dcdf10918ce5d3fed3e25d431",
"0x6a96b940ff09b064ec701aff18fe918525878634b07e1fc5f90b256609c9ca4e",
"0x7e79cde87c78da4b36aa0139609d0a98e4c32baccc80ef37c8b5f0b4c02468d1",
"0xf828cdc4a6db5dc5d33e66b87f96510a959bd75856a74a04488c18d66f7e8d73",
"0x97da27263f27a84ea7472b305d41f4373d249112f93c5a0c300e66297aadf650",
"0xe38f9ee6b9724d4de559949d31873be2c0b11a0763eef2f33b39ace22f504c2a",
"0xc6c48ccac035e163314594db134f1ae207834326a2f581f3ab0f08dede283cf6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


