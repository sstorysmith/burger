CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN  
                    );