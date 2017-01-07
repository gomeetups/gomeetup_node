// jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

let port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.log('GoMeetup starterd on port %s.', port);
});

module.exports = app;
