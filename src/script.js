import { CONTRACT_ADDRESS, CONTRACT_ABI } from './config.js';

let web3;
let contract;

window.onload = async function() {
    if (typeof window.ethereum !== 'undefined') {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    } else {
        alert('Please install MetaMask!');
    }
};

async function produceItem() {
    const itemId = document.getElementById('itemId').value;
    const itemName = document.getElementById('itemName').value;
    const location = document.getElementById('location').value;
    let expiryDate = document.getElementById('expiryDate').value || 0;

    const accounts = await web3.eth.getAccounts();

    try {
        await contract.methods.produceItem(itemId, itemName, location, expiryDate).send({ from: accounts[0] });
        alert('Item produced successfully!');
    } catch (error) {
        console.error(error);
        alert('Error producing item');
    }
}

async function updateItemLocation() {
    const itemId = document.getElementById('updateItemId').value;
    const newLocation = document.getElementById('newLocation').value;
    const newStage = document.getElementById('newStage').value;

    const accounts = await web3.eth.getAccounts();

    try {
        await contract.methods.updateItemLocation(itemId, newLocation, newStage).send({ from: accounts[0] });
        alert('Location updated successfully!');
    } catch (error) {
        console.error(error);
        alert('Error updating location');
    }
}

async function transferOwnership() {
    const itemId = document.getElementById('transferItemId').value;
    const newHandler = document.getElementById('newHandler').value;

    const accounts = await web3.eth.getAccounts();

    try {
        await contract.methods.transferOwnership(itemId, newHandler).send({ from: accounts[0] });
        alert('Ownership transferred successfully!');
    } catch (error) {
        console.error(error);
        alert('Error transferring ownership');
    }
}

async function viewItemDetails() {
    const itemId = document.getElementById('viewItemId').value;

    try {
        const details = await contract.methods.viewItemDetails(itemId).call();
        
        // Convert BigInt to Number for timestamp and expiry date
        const timestamp = Number(details[3]);
        const expiryDate = Number(details[5]);

        document.getElementById('itemDetails').innerHTML = `
            <p><strong>Name:</strong> ${details[0]}</p>
            <p><strong>Stage:</strong> ${details[1]}</p>
            <p><strong>Location:</strong> ${details[2]}</p>
            <p><strong>Timestamp:</strong> ${new Date(timestamp * 1000).toLocaleString()}</p>
            <p><strong>Handler:</strong> ${details[4]}</p>
            <p><strong>Expiry Date:</strong> ${expiryDate == 0 ? 'No expiry set' : new Date(expiryDate * 1000).toLocaleString()}</p>
        `;
    } catch (error) {
        console.error(error);
        alert('Error fetching details');
    }
}

// Attach functions to the global window object
window.produceItem = produceItem;
window.updateItemLocation = updateItemLocation;
window.transferOwnership = transferOwnership;
window.viewItemDetails = viewItemDetails;