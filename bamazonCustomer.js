var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "asdkasd",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  showProducts();
});

//switch function to select search option
//creating a table
function showProducts() {
connection.query('SELECT item_id, product_name, price FROM products', function(err, res) {
var table = new Table({
  head: ['Item ID', 'Item Name', 'Product Price']
, colWidths: [30, 30, 30]
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
table.push(
  ['First value', 'Second value']
, ['First value', 'Second value']
);
console.log(table.toString());
}
});


// function start() {
//     inquirer
//       .prompt({
//         name: "startQ",
//         type: "input",
//         message: "What product would you like to buy?",
//     })
// };

