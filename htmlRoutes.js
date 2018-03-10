// GET method route
app.get('/survey', function (req, res) {
  res.send('GET request to the survey homepage')
})


 // What does this log?
  console.log(chosen);

  res.end();
};

app.get("/", function(req, res) {
  connection.query("SELECT * FROM survey;", function(err, data) {
    if (err) throw err;

    res.render("index", {survey: data });
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
 

  connection.query("INSERT INTO surveys (survey) VALUES (?)", [req.body.task], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});
