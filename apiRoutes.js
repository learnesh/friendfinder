//Your apiRoutes.js file should contain two routes:
//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Root get route
app.get("/url/api/friends", function(req, res) {
  connection.query("SELECT * FROM friends;", function(err, data) {
    if (err) throw err;

// Post route -> back to home
app.post("/api/friends", function(req, res) {

res.render("friends", { wishes: data });
  });
});

  connection.query("INSERT INTO friends (friend) VALUES (?)", [req.body.wish], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});
