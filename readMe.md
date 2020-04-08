#Eat-the-Burger!
Sharon Story Smith     storysmithsharon@gmail.com
Fall 2019
Description of the App
Uses: Node, Express, Handlebars, MySQL, MVC, "custom" ORM and Heroku

Screen Shot:
    ![screenshot of burgers](.\PrintScreen.jpg)
     
Working Demo:
    ![working demo of burgers](https://mighty-castle-12131.herokuapp.com/)
    When trying to connect remotely to the Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.     

Local working demo: 

Developer: 
    -Install MySQL and create a database and table:
            DROP DATABASE IF EXISTS burgersDB;
            CREATE DATABASE burgersDB;
            USE burgersDB;

            CREATE TABLE burgers (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            burgerName VARCHAR(255) NOT NULL,
            devoured BOOLEAN  
                                );
    -Download App code GitHub.
        file: configuration.js, lines 9 - 19 are inserted to enable heroku.
//       Delete these lines and remove the comment delimieters
//       from lines 24-30.
//      modify user, password, database for your specifics
    -Run "$npm install" on the git bash command line.
    -Enter "$node server.js" on the git bash command line.
    -There's no need to open a localhost - this is automatic with React.



Overview:
Burgers is a restaurant app that lets users create/devour burgers and keep a list of those created but not devoured and those devoured.

    * Whenever a user submits a burger's name, the app will display the burger on the left side of the screen -- waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks the button, the burger will move to the right side of the screen and appear in the "devoured" list.

    * MySQL stores every burger in a database, whether 'devoured' or not.


Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. The Express.js framework makes it very easy to develop an application which can be used to handle multiple types of requests like the GET, PUT, and POST and DELETE requests. Node Express is used to handle routing.

With Handlebars, you can separate the generation of HTML from the rest of your JavaScript and write cleaner code. The derived handlebar-javascript expressions then take one parameter, an object(your data) and it returns a string with the HTML and the object properties with values inserted into the HTML. Its syntax is obvious to the ye with its signature double curly braces.

MySQL is Oracle's SQL database.

The MVC design is used. Model - stores an application data; View - renders Model for a client; and Controller - updates Model by reacting on client's actions.

Heroku is a cloud platform as a service and is used to deploy the app on the web.

 

Steps for academic Class:
  $npm - i   // this creates the package.json file with dependencies named
  $npm install express 
  $node install path 


The Design Flow of this application:
**SERVER side in blue**    CLIENT side

  **1.** Start the SERVER listening on port 3000 in directory "burgers" with "$ node server.js".
              2. Connect to the port on the CLIENT side with "http://localhost:3000".
              3. GET "/" is sent to the "burger_controller" on the server. 
  **4.** "burger_Controller" responds and sends to client the display "index.
                 handlebars".
              5. User enters data to add a burger, click on "Add a Burger" button. 
              6. Client submits the POST "/api/burgers" to the SERVER.
  **7.** "burger_controller" uses "connection","orm", and "model" to INSERT the new
                 burger into MySQL database with an SQL statement.
              8. The "index.handlebars" reloads the display and the new burger
                  displays in the Burgers List. 
              9. User clicks on "Devour It!" button and PUT "/api/burgers/:id" is
                 sent to the "burger_controller" on the server. 
  **10.**"burger_controller" uses "connection","orm", and "model" to update the
                burger to MySQL database with an SQL statement.
              11. The "index.handlebars" reloads the display and the updated burger
                  displays in the Devoured List. 
              12. User clicks on "Delete" button and DELETE "/api/burgers/:id" is 
                  sent to the "burger_controller" on the server. 
              13."burger_controller" uses "connection","orm", and "model" to delete 
                  the burger from MySQL database with an SQL statement.
              14. The "index.handlebars" reloads the display and the deleted burger
                  does not show in any lists. 
              