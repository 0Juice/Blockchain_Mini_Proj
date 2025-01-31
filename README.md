# Food Supply Chain Tracking DApp

## Overview

The Food Supply Chain Tracking DApp is a decentralized application designed to facilitate the tracking of food items throughout the supply chain. Built on the Ethereum blockchain using Solidity, this DApp utilizes smart contracts to ensure transparency, traceability, and accountability in the food supply chain.

## Features

- **Produce Food Item**: Allows users to produce and register new food items with relevant details.
- **Update Item Location**: Enables users to update the location and status of food items as they move through the supply chain.
- **Transfer Ownership**: Facilitates the transfer of ownership of food items between different stakeholders.
- **View Item Details**: Provides users with the ability to view the details of specific food items, including their current status and location.

## Tech Stack

- **Blockchain**: Ethereum Sepolia
- **Smart Contract Language**: Solidity
- **Frontend**: HTML, CSS, JavaScript
- **Web3 Interaction**: Web3.js
- **Development Environment**: Remix, Ganache, MetaMask

## Installation

### Prerequisites

- Ganache installed for local Ethereum blockchain simulation.
- MetaMask browser extension for interacting with the Ethereum blockchain.

### Steps to Run Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/Blockchain_Mini_Proj.git
   cd Blockchain_Mini_Proj
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Compile Smart Contracts**:
    Open the Remix IDE, load the smart contracts from the `contracts` directory, and compile them.

4. **Deploy Smart Contracts**:
    Use Ganache for local blockchain simulation. Deploy the compiled smart contracts to the local blockchain using Remix.

5. **Modify Configuration**:
    - Update `config.js` with the contract address and ABI generated after compiling and deploying the smart contract on Ganache.

6. **Configure MetaMask**:
    - Connect MetaMask to the local blockchain provided by Ganache.
    - Import the account from Ganache into MetaMask.

7. **Run the Frontend**:
    Open `index.html` in your preferred web browser to interact with the DApp.

8. **Interact with the DApp**:
    Use the provided interface to produce food items, update their location, transfer ownership, and view item details.

