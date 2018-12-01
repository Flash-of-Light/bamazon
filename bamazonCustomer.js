var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

//establish my mysql connection
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  showProducts();
});

//creating a table using cli table
function showProducts() {
connection.query('SELECT item_id, product_name, price FROM products', function(err, res) {
var table = new Table({
  head: ['Item ID', 'Item Name', 'Product Price']
, colWidths: [30, 30, 30]
});

// console.log(res);
for (i = 0; i < res.length; i++) {
  table.push([res[i].item_id, res[i].product_name, res[i].price])
};
console.log(table.toString());
})
};

//without timeout the question runs before the table and looks bad
setTimeout(function makePurchase() {
    inquirer
      .prompt({
        name: "startQ",
        type: "input",
        message: "What product would you like to buy?",
    })
}, 500);


