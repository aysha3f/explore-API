// node json.js
const user = {id: 1, name: 'Gorib Amair', job: 'actor'};
// JavaScript Object Notation (JSON)
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);


const shop = {
    owner : 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isOld: true
    
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)
