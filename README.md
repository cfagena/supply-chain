# Supply Chain Solution

This repository containts an Ethereum DApp supply chain solution. It is composed by contracts that manage specific user permission controls as well as contracts that track and verify a product’s authenticity.

## Write-ups

### UML
#### Activity
![activity](images/activity.png)

#### Sequence
![sequence](images/sequence.png)

#### State
![state](images/state.png)

#### Data Model
![data](images/data.png)

### Libraries
* Web3: ^0.20.6
* web3.min.js
* truffle-contract: ^4.0.31
* truffle-hdwallet-provider: ^1.0.17

### IPFS
IPFS was not used in this project.

### General
JS library web3.min was added to the project and app.js was "browserified" in order to use ```require```.

Versions:
* Truffle v5.4.1 (core: 5.4.1)
* Solidity v0.5.16 (solc-js)
* Node v14.17.0

### Motivation
This repository containts an Ethereum DApp which digitalize a coffee beans supply chain flow. 

The first advantage of using such a solution is the visibility and predictive guidance on events. Imagine I am a costumer who needs coffee beans for my cafeteria; then knowing the coffee I need is with the distributor I can have an accurate idea on how long it would the grains take to my coffee shop. And then I can make better decisions which affects positively my business. 

Associated with this digitization the solution also allows for traceability. In other words, all players in the chain can know the origin, real-time location and status of the coffee beans throughout the entire chain. This way, if an outstanding batch of coffee arrives I know for sure where that coffee came from and then start to buy from that farmer in particular. The opposite can also happens, if a bad batch comes along I can refuse to buy coffee from that particular farmer.

### Architechture
The entire solution is divided in two main parts: the front end and the Dapp itself. The former is a dinamic web page built in order to the supply chain participants can visualize and interact with the Dapp. This way a participant can search for a particular batch of coffee beans and learn the traceability and status of it. They can also take actions if they want to or possess the coffee beans (ex. put the coffee to be sold or purchase the coffee). The Dapp is an Ethereum application made of several contracts. Those contracts can be divided in three sets according to their function: 
* AccessControl: FarmerRole, DistributorRole, RetailerRole and ConsumerRole. Manages the various addresses and constraints for operations that can be executed only by specific roles
* Base - SupplyChain.sol: This is where we define the most fundamental code shared throughout the core functionality. This includes our main data storage, constants, and data types, plus internal functions for managing these items.
* Core - Ownable.sol: is the contract that controls contract ownership (not coffee beans) and transfer of ownership.

Once front-end and Dapp are connected they hand to the participants an interface to interact with the solution and a reliable decentralized ledger which they can trust to store the sensitive data from the supply chain flow.

In a generic way this solution gives the possibility of two or more players from the supply chain who may or may not know each other, exchange value and information in trusted digital environments without an intermediary between them to validate or protect the transaction.


## Deploy
Contract address at Rinkeby: 0xEa305EBB6310aD7FeD06675575e35D9Fb07fb28d

## Transaction History
* Harvested - 0xfc929a5062a82f4132ee7a8478be62a9841e311878dfb25d61d406098f4bf297
* Processed - 0x1247935c863657cea7a0fe8a46d6cc7e648a70842dc497f92bf16d8ca3ccde80
* Packed - 0xcb6a93c3e4ff843436d5dd0d9fce0907577fff166c6b976f107c21b6e65cddb3
* ForSale - 0x0042ced065d3992f80cc9c2912d4ace49e379f47c7bf317c79a0f486e76b2c05
* Sold - 0x630f834a0eea33d7e628af0984f070023290603adcd1976debe29c9d8967e1cc
* Shipped - 0xb16f452fc4482bca9ea56ac5866490c945fb36423deb0eaa6794516592ad8960
* Received - 0x7f20ebe7ff622a71e5e7fe6d69785b8325fc8042d3ef9f0880555fa3e0ba20cf
* Purchased - 0x5a5d95bc27ca0de6adf330ff5772f7337a895039b5aa61ccd52070fb4bce124e