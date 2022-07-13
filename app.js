//- App generals //
//jshint esversion:6
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('Public'));
//--

app.set('view engine', 'ejs');

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

  if (items.length > 0) {
    console.table(items);
  }

});

app.post('/', function(req, res) {

  let newItem = req.body.newItem;

  items.push(newItem);

  res.redirect('/');
});





app.listen(3000, function() {
  console.log('Server running on port 3000');
});
