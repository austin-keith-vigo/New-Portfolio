const EXPRESS = require('Express');
var app =  EXPRESS();

app.get('/test', function(req, res) {
    console.log("Got a get request");
    res.send({body: "I got this"})
})

// Make the app listen on port 5000
app.listen(5000, () => {
    console.log("Starting Server")
});