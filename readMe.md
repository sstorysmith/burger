# Node Express Handlebars

### Overview
### Before You Begin

* Eat-the-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
It uses MySQL, Node, Express, Handlebars and a homemade ORM. The MVC design pattern is used. Node and MySQL are used to query and route data in the app, and Handlebars to generate  HTML.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the screen -- waiting to be devoured. Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the screen.

* MySQL stores every burger in a database, whether devoured or not.

* [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).





When trying to connect remotely to your Heroku database on an open network such as a coffee shop, library, or even your University WiFi, it will be blocked. If you are experiencing a Heroku connection error, this could be why.

### Important

* **This assignment must be deployed.** Be sure to utilize the [MYSQL Heroku Deployment Guide](../../Supplemental/MySQLHerokuDeploymentProcess.pdf) in order to deploy your assignment.





#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
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
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

