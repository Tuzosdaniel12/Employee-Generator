//Dependencies
const express = require("express")
const exphbs = require('express-handlebars')
const path = require("path");
const app = express();

//set up express app
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//display deployment
app.get("/", function(req, res){
    res.render("team");
})

//listeners
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });