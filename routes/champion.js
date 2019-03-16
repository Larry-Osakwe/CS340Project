const fs = require('fs');

module.exports = {
    addChampionPage: (req, res) => {
        res.render('add-champion.ejs', {
            title: 'Welcome to Socka | Add a new player'
            ,message: ''
        });
    },
    addChampion: (req, res) => {
        // if (!req.files) {
        //     return res.status(400).send("No files were uploaded.");
        // }

        let message = '';
        let name = req.body.name;
        let gender = req.body.gender;
        let archetype = req.body.archetype;

        let usernameQuery = "SELECT * FROM `lol_player` WHERE name = '" + name + "'";

        db.query(usernameQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Champion name already exists';
                res.render('add-champion.ejs', {
                    message,
                    title: 'Welcome to Socka | Add a new player'
                });
            } else {
                // check the filetype before uploading it
                
                    
                // send the player's details to the database
                let query = "INSERT INTO `lol_champion` (name, gender, archetype) VALUES ('" +
                    name + "', '" + gender + "', '" + archetype + "')";
                db.query(query, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/champions');
                });
                    
                
            }
        });
    },
    editChampionPage: (req, res) => {
        let championId = req.params.id;
        let query = "SELECT * FROM `lol_champion` WHERE id = '" + championId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-champion.ejs', {
                title: 'Edit  Player'
                ,player: result[0]
                ,message: ''
            });
        });
    },
    editChampion: (req, res) => {
        let championId = req.params.id;
        let name = req.body.name;
        let gender = req.body.gender;
        let archetype = req.body.archetype;

        let query = "UPDATE `lol_champion` SET `name` = '" + name + "', `gender` = '" + gender + "', `archetype` = '" + archetype + "' WHERE `id` = '" + championId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/champions');
        });
    },
    deleteChampion: (req, res) => {
        let championId = req.params.id;
        let deleteUserQuery = 'DELETE FROM lol_champion WHERE id = "' + championId + '"';

        db.query(deleteUserQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/champions');
                });
    }
};