var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');
var purchased = [];

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
    if(err) console.log(err);

  var table = new Table({
    head: ['Item ID', 'Item Name', 'Product Price']
  , colWidths: [30, 30, 30]
  });

  for (i = 0; i < res.length; i++) {
    table.push([res[i].item_id, res[i].product_name, res[i].price])
  };
  console.log(table.toString());
    processAnswers();
  })

};

//function to ask questions
function processAnswers() {
  function validateName(name) {
    return name !== '';
  }

  var questions = [
  {
    message: "What product would you like to buy? Enter item ID.",
    type: "input",
    name: "id",
    validate: validateName
  },{
    message: "How many would you like to buy?",
    type: "input",
    name: "quantity",
    validate: validateName
  },
  ];
  inquirer.prompt(questions).then(function(res) {
    // console.log("And your answers are:", res);
    // console.log(res.id)
    // console.log(res.quantity)
    var customerChoices = {
      itemID: res.id,
      quantity: res.quantity
    }
    purchased.push(customerChoices);
    // console.log(purchased);
    var chosenItem = res.id;
    var chosenQuantity = res.quantity;
  // console.log(chosenItem);
  // console.log(res);
  // console.log(res.id);
  // console.log(chosenQuantity);
  // console.log(customerChoices)
  //   console.log(res)[0];
  var updatedQuantity = chosenItem.stock_quantity - chosenQuantity;

    // if (updatedQuantity >= 0) {
    //   connection.query('UPDATE products SET ? WHERE chosenItem = ?', [{ stock_quantity: updatedQuantity }, item_id]);
    //   // showProducts();
    //   console.log(res);
   
    //   // var totalCost = res[0].Price * chosenQuantity;
    //   console.log("Your cost is " + totalCost);
    // } 

    // connection.query('SELECT * FROM products WHERE item_id=?', purchased[0].item_id, function(err, res) {
    //   console.log(res[0]);

    //   if(err) console.log(err, "Error: product not found");
      
    //   else if(res[0].stock_quantity < purchased[0].quantity) {
    //       console.log("Currently out of stock");
    //       connection.end();
    //   } 
      
    //   else if(res[0].stock_quantity >= purchased[0].quantity) {
    //       console.log('');
    //       console.log(purchased[0].quantity + " items purchased ");
    //       console.log(res[0].product_name + " " + res[0].price);
    //       var salesTotal = res[0].price * purchased[0].quantity;
    //   }

    //   console.log("Total: " + salesTotal);
    //   newQuantity = res[0].stock_quantity - purchased[0].quantity;

    // connection.query("UPDATE products SET stock_quantity = " + newQuantity +" WHERE item_id = " + purchased[0].item_id, function(err, res) {
    //     console.log('');
    //     console.log(colors.cyan("Success!"));
    //     console.log('');
    //     connection.end();
   })
  // })})
    
};