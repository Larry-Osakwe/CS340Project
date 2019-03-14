const fs = require('fs');

module.exports = {
    addPlayerPage: (req, res) => {
        res.render('add-player.ejs', {
            title: 'Welcome to Socka | Add a new player'
            ,message: ''
        });
    },
    addPlayer: (req, res) => {
        // if (!req.files) {
        //     return res.status(400).send("No files were uploaded.");
        // }

        let message = '';
        let gamertag = req.body.gamertag;
        let fname = req.body.fname;
        let lname = req.body.lname;
        let region = req.body.region;
        let teamid = req.body.team;
        let positionid = req.body.position;
        

        let usernameQuery = "SELECT * FROM `lol_player` WHERE gamertag = '" + gamertag + "'";

        db.query(usernameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Username already exists';
                res.render('add-player.ejs', {
                    message,
                    title: 'Welcome to Socka | Add a new player'
                });
            } else {
                // check the filetype before uploading it
                
                    
                // send the player's details to the database
                let query = "INSERT INTO `lol_player` (gamertag, fname, lname, region, teamid, positionid) VALUES ('" +
                    gamertag + "', '" + fname + "', '" + lname + "', '" + region + "', '" + teamid + "', '" + positionid + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/players');
                });
                    
                
            }
        });
    },
    editPlayerPage: (req, res) => {
        let playerId = req.params.id;
        let query = "SELECT * FROM `lol_player` WHERE id = '" + playerId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-player.ejs', {
                title: 'Edit  Player'
                ,player: result[0]
                ,message: ''
            });
        });
    },
    editPlayer: (req, res) => {
        let playerId = req.params.id;
        let gamertag = req.body.gamertag
        let fname = req.body.fname;
        let lname = req.body.lname;
        let region = req.body.region;

        let query = "UPDATE `lol_player` SET `gamertag` = '" + gamertag + "', `fname` = '" + fname + "', `lname` = '" + lname + "', `region` = '" + region + "' WHERE `id` = '" + playerId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/players');
        });
    },
    deletePlayer: (req, res) => {
        let playerId = req.params.id;
        let deleteUserQuery = 'DELETE FROM lol_player WHERE id = "' + playerId + '"';

        db.query(deleteUserQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/players');
                });
    }
};