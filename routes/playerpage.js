module.exports = {
    getPlayerPage: (req, res) => {
        let query = "SELECT * FROM `lol_player` ORDER BY id ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('playerpage.ejs', {
                title: 'Welcome to Socka | View Players', players: result
            });
        });
    },
};