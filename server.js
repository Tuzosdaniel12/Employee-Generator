//Dependencies
const express = require("express")
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get("/", function(res, req){
    res.sendFile(path.join(__dirname, ".output/team.html"));
})

//listeners
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
  });