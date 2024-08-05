# Blockchain Marketplace Decentralized E-commerce Platform

This project is a decentralized e-commerce platform built on Ethereum using Solidity for smart contracts and ReactJS for the frontend. It allows users to create stores, list products, and conduct transactions in a secure, trustless environment using cryptocurrency.

## Features

- **Store Creation**: Users can create their own stores with unique branding.
- **Product Listings**: Sellers can list products with detailed descriptions and prices.
- **Smart Contract-Based Transactions**: All transactions are processed via Ethereum smart contracts, ensuring security and transparency.
- **Auction System**: Inspired by NFT marketplaces, users can also auction products.
- **Reviews**: Buyers can leave reviews for purchased products.

## Tech Stack
- **Frontend:** JavaScript, React
- **Backend:** Node.js
- **Blockchain:** Solidity, Truffle
- **Storage:** IPFS (InterPlanetary File System)

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: v14.x or higher
- **npm**: v6.x or higher
- **Ganache CLI**: For local blockchain development
- **Truffle**: For smart contract compilation and migration
- **MetaMask**: For interacting with the dApp

## Installation

1. Clone the repository:
   git clone https://github.com/mikexarau/Blockchain-Marketplace-Decentralized-E-commerce-Platform.git
   cd Blockchain-Marketplace-Decentralized-E-commerce-Platform

2. Install the dependencies:
    npm install

3. Compile the smart contracts:
    truffle compile

4. Deploy the contracts to the local blockchain:
    truffle migrate

5. Run the development server:
    npm start


# Usage

1. Open your browser and navigate to http://localhost:3000.

2. Create an account or log in using your Ethereum wallet.

3. Browse products, add items to your cart, and complete transactions using your wallet.

4. Admin Panel: After logging in, users can create stores, manage products, and review transactions.

5. Storefront: Shoppers can browse available products, participate in auctions, and leave reviews.

6. Blockchain Integration: All transactions are logged on the blockchain, ensuring transparency and immutability.


# Smart Contracts

- Marketplace.sol: Main contract handling store creation, product listings, and transactions.

- Auction.sol: Manages the auction process, including bidding and finalizing sales.


# Testing

To run tests on the smart contracts:
    truffle test


# Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.


# License
This project is licensed under the MIT License - see the LICENSE file for details.


# Contact
For any inquiries or issues, please contact MXG.