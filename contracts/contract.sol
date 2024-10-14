// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FoodSupplyChain {

    // Enum to represent different stages in the supply chain
    enum SupplyChainStage {
        Produced,  // Food item produced
        InTransit, // Food item in transit
        AtWarehouse, // Food item at warehouse
        Delivered // Food item delivered to retailer/consumer
    }

    // Structure to store details of each step in the supply chain
    struct SupplyChainStep {
        SupplyChainStage stage;
        string location;
        uint256 timestamp;
        address handler; // The entity responsible at this step
    }

    // Structure to store food item details and history
    struct FoodItem {
        string itemName;
        uint256 itemId;
        address producer;
        address currentHandler; // Track the current owner or handler of the food item
        SupplyChainStep[] history; // Array to store the history of all steps
        uint256 expiryDate; // Optional expiry date (0 means no expiry)
    }

    // Mapping to store food items by their ID
    mapping(uint256 => FoodItem) public foodItems;

    // Event to emit when food item is updated
    event FoodItemUpdated(uint256 indexed itemId, SupplyChainStage stage, string location, uint256 timestamp, address handler);

    // Overloaded function to produce a new food item with expiry date
    function produceItem(uint256 _itemId, string memory _itemName, string memory _location, uint256 _expiryDate) public {
        _produceItemInternal(_itemId, _itemName, _location, _expiryDate);
    }

    // Overloaded function to produce a new food item with default expiry date (0)
    function produceItem(uint256 _itemId, string memory _itemName, string memory _location) public {
        _produceItemInternal(_itemId, _itemName, _location, 0); // Default expiry date to 0
    }

    // Internal function to handle the common logic of producing a food item
    function _produceItemInternal(uint256 _itemId, string memory _itemName, string memory _location, uint256 _expiryDate) internal {
        require(foodItems[_itemId].itemId == 0, "Item already exists");
       
        // Initialize the food item and its first step in the supply chain
        SupplyChainStep memory initialStep = SupplyChainStep({
            stage: SupplyChainStage.Produced,
            location: _location,
            timestamp: block.timestamp,
            handler: msg.sender
        });

        FoodItem storage newItem = foodItems[_itemId];
        newItem.itemName = _itemName;
        newItem.itemId = _itemId;
        newItem.producer = msg.sender;
        newItem.currentHandler = msg.sender;
        newItem.history.push(initialStep); // Add the first step to history
        newItem.expiryDate = _expiryDate; // Set the expiry date (0 if no expiry is provided)
       
        emit FoodItemUpdated(_itemId, SupplyChainStage.Produced, _location, block.timestamp, msg.sender);
    }

    // Function to update the location and stage of a food item in the supply chain
    function updateItemLocation(uint256 _itemId, string memory _newLocation, SupplyChainStage _newStage) public {
        require(foodItems[_itemId].itemId != 0, "Item does not exist");
        require(foodItems[_itemId].currentHandler == msg.sender, "Only the current handler can update the item");

        // Create a new step in the supply chain
        SupplyChainStep memory newStep = SupplyChainStep({
            stage: _newStage,
            location: _newLocation,
            timestamp: block.timestamp,
            handler: msg.sender
        });

        // Update the food item's current handler and add the new step to its history
        foodItems[_itemId].currentHandler = msg.sender;
        foodItems[_itemId].history.push(newStep);

        emit FoodItemUpdated(_itemId, _newStage, _newLocation, block.timestamp, msg.sender);
    }

    // Function to transfer ownership of the food item
    function transferOwnership(uint256 _itemId, address _newHandler) public {
        require(foodItems[_itemId].itemId != 0, "Item does not exist");
        require(foodItems[_itemId].currentHandler == msg.sender, "Only the current handler can transfer ownership");

        // Update the current handler to the new handler
        foodItems[_itemId].currentHandler = _newHandler;
    }

    // Function to view the complete history of a food item
    function viewItemHistory(uint256 _itemId) public view returns (SupplyChainStep[] memory) {
        require(foodItems[_itemId].itemId != 0, "Item does not exist");

        return foodItems[_itemId].history;
    }

    // Function to view the latest details of a food item, including expiry date
    function viewItemDetails(uint256 _itemId) public view returns (
        string memory itemName,
        SupplyChainStage latestStage,
        string memory latestLocation,
        uint256 latestTimestamp,
        address latestHandler,
        uint256 expiryDate
    ) {
        require(foodItems[_itemId].itemId != 0, "Item does not exist");
       
        FoodItem storage item = foodItems[_itemId];
        SupplyChainStep memory latestStep = item.history[item.history.length - 1]; // Get the latest step

        return (
            item.itemName,
            latestStep.stage,
            latestStep.location,
            latestStep.timestamp,
            latestStep.handler,
            item.expiryDate // Return the expiry date (0 if no expiry was set)
        );
    }
}
