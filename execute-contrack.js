"use strict"
const fs = require('fs');
const Web3 = require('web3');

const web3 = new Web3("http://localhost:7545");
const abi = JSON.parse(fs.readFileSync('NotarizedDocument_sol_NotarizedDocument.abi').toString());

const notarizedContract = new web3.eth.Contract(abi, '0x728250212bf9BC44211753d3c22ddB03cA2e307e');

console.log(notarizedContract.options.address);

console.log(notarizedContract.methods);

notarizedContract.methods.notarize("Hello Miguel!!").send({from:'0x5707f83d808b99b7447DCf1f4fbfb03f238dBe78'}).then(
    (result) => {
        console.log(result);

        notarizedContract.methods.checkDocument("Hello Miguel!!").call(console.log);
    });