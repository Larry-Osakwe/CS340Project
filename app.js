var express = require("express");
var app = express();
var mysql = require('mysql');
var bodyParser = require("body-parser");


const path = require('path');
//const {getHomePage} = require('./routes/index');
//const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');

const db = mysql.createConnection ({
    host: 'classmysql.engr.oregonstate.edu',
    user: 'cs340_osakwel',
    password: '5681',
    database: 'cs340_osakwel'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");



//app.get('/', getHomePage);   
app.get("/", function(req, res){
    res.render("index");
});

app.get("/players", function(req, res){
    res.render("players",{page_name: 'players'});
});

// app.post("/campgrounds", function(req, res){
//     // get data from form and add to campgrounds array
//     var name = req.body.name;
//     var image = req.body.image;
//     var newCampground = {name: name, image: image}
//     campgrounds.push(newCampground);
//     //redirect back to campgrounds page
//     res.redirect("/campgrounds");
// });

app.get("/players/new", function(req, res){
   res.render("newplayer.ejs"); 
});

app.listen(5681, process.env.IP, function(){
   console.log("The LoL Database Has Started!");
});