var express = require("express");
var app = express();
var cors=require('cors')
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
const DB = require("./DataBaseConnection")

// for parsing application/json
app.use(bodyParser.json());
app.use(cors(3000));
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());

DB()


// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST,PUT ,PATCH, DELETE, OPTIONS'
  );
  next();
});


app.get("/", function (req, res) {
res.send("Home page")
});


app.listen(5000)