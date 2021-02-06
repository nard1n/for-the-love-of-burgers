
// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Sets up express app
const PORT = process.env.PORT || 8080;
const app = express();

//set handlevars as the default templating engine
app.engine('handlebards', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Data
//? const burgers = [{burger: 'baja'}, {burger: 'classic'}];

//Routes
app.get("/burgers", function (req, res) {
 //   res.render('index', burgers[0]);
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});