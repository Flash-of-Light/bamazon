DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(10) NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR NOT NULL,
  price DECIMAL(5,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (558, "Christmas Tree", "Holiday", 29.99, 10), (304, "Dog Food", "Pets", 19.99, 150),
(340, "Popcorn", "Food", 7.25, 600), (438, "Sprite 12-Pack", "Food", 4.99, 28), (669, "Stapler", "Office Supplies", 9.99, 231),
(512, "Erasers", "Office Supplies", 4.99, 500), (499, "Galaxy S9", "Electronics", 639.99, 17), (903, "Eggs", "Food", 3.99, 45),
(101, "Speakers", "Electronics", 54.99, 2), (608, "Hot Cocoa", "Food", 3.99, 29);