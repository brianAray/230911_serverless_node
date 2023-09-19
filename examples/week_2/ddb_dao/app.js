// assume this is the express main file
// in the 3 tier architecture, you need to separate your database logic into its own layer
const uuid = require('uuid');
const groceryItemDao = require('./repository/grocery_item_dao');


// groceryItemDao.addGroceryItem(uuid.v4(), 'Tomato', 30, 1.00, 'Vegetable')
//     .then((data) => {
//         console.log('Adding Item Successful');
//     }).catch((err) => {
//         console.log('An Error Occurred!');
//         console.error(err);
//     });

// groceryItemDao.retrieveGroceryItemById('ff95604a-a416-4bcf-97fc-b62f775a02b6')
//     .then((data) => {
//         console.log(data.Item);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// groceryItemDao.retrieveAllGroceryItems()
//     .then((data) => {
//         console.log(data.Items);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// groceryItemDao.retrieveGroceryItemsByCategory("Vegetable")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

// groceryItemDao.updateGroceryNameById('ff95604a-a416-4bcf-97fc-b62f775a02b6', 'Leek')
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.error(err);
//     })

groceryItemDao.deleteGroceryItemById('ff95604a-a416-4bcf-97fc-b62f775a02b6')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    })

