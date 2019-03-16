const fs = require('fs');

module.exports = {
    addPositionPage: (req, res) => {
        res.render('add-position.ejs', {
            title: 'Welcome to Socka | Add a new player'
            ,message: ''
        });
    },
    addPosition: (req, res) => {
        // if (!req.files) {
        //     return res.status(400).send("No files were uploaded.");
        // }

        let message = '';
        let position_name = req.body.position_name;
        let lane = req.body.lane;
        let position_type = req.body.position_type;
        
        // send the player's details to the database
        let query = "INSERT INTO `lol_position` (position_name, lane, position_type) VALUES ('" +
            position_name + "', '" + lane + "', '" + position_type + "')";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/positions');
        });
    },
    editPositionPage: (req, res) => {
        let positionId = req.params.id;
        let query = "SELECT * FROM `lol_position` WHERE id = '" + positionId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-position.ejs', {
                title: 'Edit  Player'
                ,player: result[0]
                ,message: ''
            });
        });
    },
    editPosition: (req, res) => {
        let positionId = req.params.id;
        let position_name = req.body.position_name;
        let lane = req.body.lane;
        let position_type = req.body.position_type;

        let query = "UPDATE `lol_position` SET `position_name` = '" + position_name + "', `lane` = '" + lane + "', `position_type` = '" + position_type + "' WHERE `id` = '" + positionId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/positions');
        });
    },
    deletePosition: (req, res) => {
        let positionId = req.params.id;
        let deleteUserQuery = 'DELETE FROM lol_position WHERE id = "' + positionId + '"';

        db.query(deleteUserQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/positions');
                });
    }
};