// config.js
const CONTRACT_ADDRESS = "0xd84e891c3AE35fba86d132eCf8eD074036435d1C";
const CONTRACT_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum FoodSupplyChain.SupplyChainStage",
				"name": "stage",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "handler",
				"type": "address"
			}
		],
		"name": "FoodItemUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_itemId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_itemName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_expiryDate",
				"type": "uint256"
			}
		],
		"name": "produceItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_itemId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_itemName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			}
		],
		"name": "produceItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_itemId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_newHandler",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_itemId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_newLocation",
				"type": "string"
			},
			{
				"internalType": "enum FoodSupplyChain.SupplyChainStage",
				"name": "_newStage",
				"type": "uint8"
			}
		],
		"name": "updateItemLocation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "foodItems",
		"outputs": [
			{
				"internalType": "string",
				"name": "itemName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "itemId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "producer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "currentHandler",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "expiryDate",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_itemId",
				"type": "uint256"
			}
		],
		"name": "viewItemDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "itemName",
				"type": "string"
			},
			{
				"internalType": "enum FoodSupplyChain.SupplyChainStage",
				"name": "latestStage",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "latestLocation",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "latestTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "latestHandler",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "expiryDate",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_itemId",
				"type": "uint256"
			}
		],
		"name": "viewItemHistory",
		"outputs": [
			{
				"components": [
					{
						"internalType": "enum FoodSupplyChain.SupplyChainStage",
						"name": "stage",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "handler",
						"type": "address"
					}
				],
				"internalType": "struct FoodSupplyChain.SupplyChainStep[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Export them to be accessible globally
export { CONTRACT_ADDRESS, CONTRACT_ABI };
