/**
 * 
    Console Application
    Display grocery list
    Add items to grocery list
        Array of Items Objects
        Item
            Name
                String
            Quantity
                Number
            Price
                Number
            Bought
                Boolean
    Remove items from the grocery list
    Set whether the item has been bought or not

 */

// Import the readline module for handling user input in the console
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (console)
});

// Define an array to store the shopping list
const shoppingList = [];

// add item

function addItem(){
    // prompt the user to get the name of the item
    rl.question("What's the name of the item to add \n", (itemName) => {
        itemName = itemName.trim();
        // check if the name is empty, tell them
        if(!itemName){
            console.log("There must be a name");
            return addItem();
        }

        rl.question(`What's the price for ${itemName} \n`, (itemPrice) => {
            const price = parseFloat(itemPrice) || 0;

            rl.question(`How many of ${itemName}? \n`, (itemQuantity) => {
                const quantity = parseInt(itemQuantity) || 0;

                const newItem = {
                    name: itemName,
                    price: price.toFixed(2), // format to 2 decimal places
                    quantity: quantity,
                    purchased: false
                }

                // add item to the shopping list
                shoppingList.push(newItem);

                // display the shopping list
                displayShoppingList();
            })


        })
    })
}

// display items
function displayShoppingList(){
    console.log("\nShopping List\n");
    shoppingList.forEach((item, index) => {
        const status = item.purchased ? ' (Purchased)' : '';
        console.log(`${index + 1}   |   $${item.price}  |   ${item.name}    |   Quantity: ${item.quantity}  |   ${status}`);
    })

    rl.question(`Options

    (1) Add Item
    (2) Toggle Purchased
    (3) Remove Item
    (4) Quit

    Please choose an option from the list
    `, (option) => {
        switch(option){
            case "1":
                addItem();
                break;
            case "2":
                rl.question("What is the item number\n?", (itemNumber) => {
                    const index = parseInt(itemNumber) - 1;
                    togglePurchased(index);
                })
                break;
            case "3":
                rl.question("What is the item number\n?", (itemNumber) => {
                    const index = parseInt(itemNumber) - 1;
                    removeItem(index);
                })
                break;
            case "4":
                console.log("Goodbye!")
                shopping = false;
                rl.close();
                break;
            default:
                break;
            
        }
    })
}

// remove items
function removeItem(index){
    const removedItem = shoppingList.splice(index, 1);

    console.log(`${removedItem[0].name} has been removed`);
    displayShoppingList();
}

// toggle the status of the item
function togglePurchased(index){
    shoppingList[index].purchased = !shoppingList[index].purchased;
    displayShoppingList();
}





// rl.once('close', () => {
//      // end of input
//      console.log("Goodbye");
//  });


displayShoppingList();