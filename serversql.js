const HTTP_PORT = process.env.PORT || 8081;

const express = require("express");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const cors = require("cors");
const app = express();

const mysql = require('mysql');
//
const {addNewMemory,getAllMemories, addUser, getValidEmail} = require('./db-services.js');


app.use(bodyParser.json());
app.use(cors());


app.get('/data', getAllMemories);
app.get('/userAuthentication', urlencodedParser,getValidEmail);

app.get("/", (req, res) => {
  
 });

 app.post('/addMemory',urlencodedParser,addNewMemory);

app.post('/addUsers',urlencodedParser,addUser)

const dbconnection = mysql.createConnection({
  host: 'mymysql.senecacollege.ca',
  user: 'prj666_193a02',
  password: 'kdJL@3928',
  database: 'prj666_193a02'
});

dbconnection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

global.dbconnection =dbconnection;


  app.listen(HTTP_PORT, ()=>{console.log("API listening on: " + HTTP_PORT)});
