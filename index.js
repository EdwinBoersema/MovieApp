const request = require("request");
const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => { 
    res.render("home");
});

app.get("/results", (req, res) => {
    let query = req.query.search;
    let url = "http://omdbapi.com/?s=";
    let key = "&apikey=thewdb";
    request(url + query + key, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});

app.listen(3000, () => console.log("server started"));

// app.listen(3000, function() {
//     console.log("server started");
// });