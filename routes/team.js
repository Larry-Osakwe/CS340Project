const fs = require('fs');

module.exports = {
    addTeamPage: (req, res) => {
        res.render('add-player.ejs', {
            title: 'Welcome to Socka | Add a new player'
            ,message: ''
        });
    },
    addTeam: (req, res) => {
        // if (!req.files) {
        //     return res.status(400).send("No files were uploaded.");
        // }

        let message = '';
        let TeamName = req.body.TeamName;
        let side = req.body.side;
        let wins = req.body.wins;
        let losses = req.body.losses;
        
        let teamnameQuery = "SELECT * FROM `lol_team` WHERE TeamName = '" + TeamName + "'";

        db.query(teamnameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Team name already exists';
                res.render('add-team.ejs', {
                    message,
                    title: 'Welcome to Socka | Add a new player'
                });
            } else {
                // check the filetype before uploading it
                
                    
                // send the player's details to the database
                let query = "INSERT INTO `lol_team` (TeamName, side, wins, losses) VALUES ('" +
                    TeamName + "', '" + side + "', '" + wins + "', '" + losses +"')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/teams');
                });
                    
                
            }
        });
    },
    editTeamPage: (req, res) => {
        let teamId = req.params.id;
        let query = "SELECT * FROM `lol_team` WHERE id = '" + teamId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-team.ejs', {
                title: 'Edit  Player'
                ,player: result[0]
                ,message: ''
            });
        });
    },
    editTeam: (req, res) => {
        let TeamName = req.body.TeamName;
        let side = req.body.side;
        let wins = req.body.wins;
        let losses = req.body.losses;

        let query = "UPDATE `lol_team` SET `TeamName` = '" + TeamName + "', `side` = '" + side + "', `wins` = '" + wins + "', `losses` = '" + losses + "' WHERE `id` = '" + teamId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/teams');
        });
    },
    deleteTeam: (req, res) => {
        let teamId = req.params.id;
        let deleteUserQuery = 'DELETE FROM lol_team WHERE id = "' + teamId + '"';

        db.query(deleteUserQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/teams');
                });
    }
};