const request = require("request");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => { 
    res.render("home");
});

app.get("/results", (req, res) => {
    request("http://omdbapi.com/?s=Inception&apikey=thewdb", (error, response, body) => {
        if(!error && response.statusCode == 200) {
            let results = JSON.parse(body);
            res.send(results);
        }
    });
});

app.listen(3000, () => console.log("server started"));

// app.listen(3000, function() {
//     console.log("server started");
// });