const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();

const {getPlayerPage} = require('./routes/playerpage');
const {getChampionPage} = require('./routes/championpage');
const {getTeamPage} = require('./routes/teampage');
const {getPositionPage} = require('./routes/positionpage');
const {addPlayerPage, addPlayer, deletePlayer, editPlayer, editPlayerPage} = require('./routes/player');
const {addChampionPage, addChampion, deleteChampion, editChampion, editChampionPage} = require('./routes/champion');
const {addTeamPage, addTeam, deleteTeam, editTeam, editTeamPage} = require('./routes/team');
const {addPositionPage, addPosition, deletePosition, editPosition, editPositionPage} = require('./routes/position');
const port = 5681;

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'classmysql.engr.oregonstate.edu',
    user: 'cs340_osakwel',
    password: '5681',
    database: 'cs340_osakwel'
});

// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;

// configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder
app.use(fileUpload()); // configure fileupload

// routes for the app

app.get("/", function(req, res){
    res.render("index", {page_name: 'index'});
});

app.get('/players', getPlayerPage);
app.get('/players/add', addPlayerPage);
app.get('/players/edit/:id', editPlayerPage);
app.get('/players/delete/:id', deletePlayer);
app.post('/players/add', addPlayer);
app.post('/players/edit/:id', editPlayer);

app.get('/champions', getChampionPage);
app.get('/add', addChampionPage);
app.get('/edit/:id', editChampionPage);
app.get('/delete/:id', deleteChampion);
app.post('/add', addChampion);
app.post('/edit/:id', editChampion);

app.get('/teams', getTeamPage);
app.get('/teams/add', addTeamPage);
app.get('/teams/edit/:id', editTeamPage);
app.get('/teams/delete/:id', deleteTeam);
app.post('/teams/add', addTeam);
app.post('/teams/edit/:id', editTeam);

app.get('/positions', getPositionPage);
app.get('/add', addPositionPage);
app.get('/edit/:id', editPositionPage);
app.get('/delete/:id', deletePosition);
app.post('/add', addPosition);
app.post('/edit/:id', editPosition);

// set the app to listen on the port
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});