module.exports = {
    getPositionPage: (req, res) => {
        let query = "SELECT * FROM `lol_position` ORDER BY id ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('positionpage.ejs', {
                title: 'Welcome to Socka | View Players', players: result
            });
        });
    },
};