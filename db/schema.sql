
DROP DATABASE IF EXISTS burgersDB;
CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burgerName VARCHAR(255) NOT NULL,
  devoured BOOLEAN  
                    );