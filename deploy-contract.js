"use strict"
const fs = require('fs');
const Web3 = require('web3');

const web3 = new Web3("http://localhost:7545");

const bytecode = fs.readFileSync('NotarizedDocument_sol_NotarizedDocument.bin').toString();
const abi = JSON.parse(fs.readFileSync('NotarizedDocument_sol_NotarizedDocument.abi').toString());

const notarizedContract = new web3.eth.Contract(abi);
notarizedContract.deploy({data: bytecode}).send({from:'0xB70155AaAd2d4b44cD337d2279f9ab1Dc7328a98', gas:1500000, gasPrice:web3.utils.toWei('0.00003', 'ether')})
	.then((newContractInstance) => {
		notarizedContract.options.address=newContractInstance.options.address
	});
