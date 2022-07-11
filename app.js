//jshint esversion:6

//- App generals
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
//--

app.get('/', function(req, res) {

  let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = new Date();
  let currentDay = day.getDay();
  let today = week[currentDay];

  res.render('list', {
    weekDay: today
  });

});


app.listen(3000, function() {
  console.log('Server running on port 3000');
});
