//- App generals
//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
//--

const items = [];

app.get('/', function(req, res) {

  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };
  let today = new Date();
  let day = today.toLocaleDateString('en-US', options);

  res.render('list', {
    actualDate: day,
    newListItems: items
  });

});

app.post('/', function(req, res) {

  let newItem = req.body.newItem;
  console.log(newItem);

  items.push(newItem);

  res.redirect('/');
});





app.listen(3000, function() {
  console.log('Server running on port 3000');
});
