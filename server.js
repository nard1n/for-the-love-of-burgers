// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgersController.js")

// Sets up express app
const PORT = process.env.PORT || 8085;
const app = express();

// use express.static middleware to serve static content from the 'public' dir
app.use(express.static('public'));

//set express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set handlevars as the default templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Give server access to routes
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});