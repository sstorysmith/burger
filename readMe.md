# Node, Express, Handlebars, and MySQL, MVC and Heroku

Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. The Express.js framework makes it very easy to develop an application which can be used to handle multiple types of requests like the GET, PUT, and POST and DELETE requests

 With Handlebars, you can separate the generation of HTML from the rest of your JavaScript and write cleaner code. The derived handlebar-javascript expressions then takes one parameter, an object(your data) and it returns a string with the HTML and the object properties with values inserted into the HTML. It's obcious to the ye with it's
 signature double curly braces.

 MySQL is Oracles SQL database.

 The MVC design is used. Model - stores an application data; View - renders Model for a client; and Controller - updates Model by reacting on client's actions.

 Heroku is a cloud platform as a service and is used to deploy the app on the web.

 

### Description of the App
Eat-the-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
It uses MySQL, Node, Express, Handlebars and a homemade ORM. The MVC design pattern is used. Node and MySQL are used to query and route data in the app, and Handlebars to generate  HTML.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the screen -- waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the screen.

* MySQL stores every burger in a database, whether devoured or not.

#### Directory structure

All the recommended files and directories from the steps above are in the following file structure:

burger
|
|_ server.js
|
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burgers.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
|       |    |_ reset.css
│       └── img
│           └── burger.png
|           |_  fatman.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
       └── main.handlebars





### Overview
Steps for academic Class:
  $npm - i   // this creates the package.json file with dependencies named
  $npm install express 
  $node install path 
node Express is used to handle routing.

The flow of this application:
SERVER side    CLIENT side

  1. Start the SERVER listening on port 3000 in directory "burgers" with "$ node server.js".
              2. Connect to the port on the CLIENT side with "http://localhost:3000".
              3. GET "/" is sent to the "burger_controller" on the server. 
  4. "burger_Controller" responds and sends to client the display "index.handlebars".
              5. User enters data to add a burger, click on "Add a Burger" button. 
              6. Client submits the POST "/api/burgers" to the SERVER.
  7. "burger_controller" uses "connection","orm", and "model" to INSERT the new burger into MySQL 
      database with an SQL statement.
              8. The "index.handlebars" reloads the display and the new burger displays in the Burgers List. 
              9. User clicks on "Devour It!" button and PUT "/api/burgers/:id" is  sent to the "burger_controller"
                on the server. 
  10."burger_controller" uses "connection","orm", and "model" to update the burger to MySQL database with an 
    SQL statement.
              11. The "index.handlebars" reloads the display and the updated burger displays in the Devoured List. 
              12. User clicks on "Delete" button and DELETE "/api/burgers/:id" is sent to the "burger_controller"
                 on the server. 
  13."burger_controller" uses "connection","orm", and "model" to delete the burger from MySQL database with an
     SQL statement.
              14. The "index.handlebars" reloads the display and the deleted burger does not show in any lists. 
              



Connect:

When trying to connect remotely to the Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.

https://mighty-castle-12131.herokuapp.com/




