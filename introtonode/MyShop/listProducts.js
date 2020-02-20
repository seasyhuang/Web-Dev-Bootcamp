// use faker toprint out 10 random products names and prices
var faker = require("faker");

for (var i = 0; i < 10; i++) {
    console.log(faker.commerce.productName() + ": $" + faker.commerce.price());
}
