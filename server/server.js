require('dotenv').config();

const express = require('express'),
    massive = require('massive'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    session = require('session'),
    cors = require('cors'),
    axios = require('axios');

let app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
.then((db) => {
    app.set('db', db);
    console.log('Database Connected Successfully..');
})
.catch((err) => {
    console.log('Could not connect..' + err)
});

//ENDPOINTS

//GET

//POST

//PUT

//DELETE

//AUTH0

const port = 3030;
app.listen(port, console.log(`Reporting for duty on port ${port}`));