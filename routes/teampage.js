module.exports = {
    getTeamPage: (req, res) => {
        let query = "SELECT * FROM `lol_team` ORDER BY id ASC"; // query database to get all the players

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/');
            }
            res.render('teampage.ejs', {
                title: 'Welcome to Socka | View Players', players: result
            });
        });
    },
};