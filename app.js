var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var noteRoutes = require('./Routes/routeNote');
var app = express();

app.use(cors());

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(jsonParser);
app.use(urlencodedParser);
app.use('/api/v1', noteRoutes);
app.get('/', function (req, res) {
  res.send('server started.....');
});

app.listen(3000, () => {
  console.log('server start');
});
