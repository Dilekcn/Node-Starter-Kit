
const express = require("express");
const app = express();


app.get("/", function (req, res) {
    res.send("Hello Dilek!");
  });


  app.get('/ask', (req,res)=>{
      res.send('How are you?')
  })

  app.get("/search", function (req, res) {
    let searchQuery = req.query.search;
    res.send("Hello World! You searched for " + searchQuery);
  });
  
  //http://localhost:3000/search?search=hello


  app.get("/chocolate", function (req, res) {
    let amountTotal = req.query.amount;
    res.send("Hello World! Total chocolate = " + amountTotal);
  });

//http://localhost:3000/chocolate?amount=3


app.get("/json", function (req, res) {
    let lat = req.query.lat;
    let lng = req.query.lng;
    res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});
//http://localhost:3000/json?lat=51.5311&lng=0.0481

app.post('/', function (req, res) {
    res.send('Got a POST request')
  })

  
app.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});