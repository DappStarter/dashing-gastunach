require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note outside common inner problem obscure sick'; 
let testAccounts = [
"0x6c21c00dd41fb1e443348fc0c277598545bc81139bddeac496975b596feebd68",
"0xd0f9d623e014b61c46a7d73b9c6fa03ffa5745156e6e6883fb7dbff8ddc495d8",
"0x80ad93f57dca3528b6e2cd3242fd1edd8456c050238493eb5705afb6fe0e41dc",
"0x58192ce7a29c7d540d0c6e49f4b8b63eff5dd6fdd40397556b68aa232f629874",
"0xd201f1280656a8989c1a58d17f05b406651089a272745bf77dbcc919206c847d",
"0x24dc0200dceb8cca73e5558aa090d0863875afcc72a32cf150f1bc8e40e1f19c",
"0x2a7ef8de33b96503e5c4cddbe03db9c73bbe54f6648cc0ac93ba3a90fa7c11b8",
"0x6f81355903b533f64192105f02c0559f78f349d56202900ebdc864810050f765",
"0x7defadff914e40638ba860924b571381a0bca32155a1e1c1b3727b0e4a4e9c36",
"0x47074b3ca6aaa917b637fee403adeeaa8a2f6f169e32b46870323a1db104c0b3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

