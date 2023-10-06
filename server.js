require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
  audience: 'nylista',
  issuerBaseURL: 'https://nylista.uk.auth0.com/',
  tokenSigningAlg: 'RS256'
});

//app.use(cors());
app.use(jwtCheck);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('trust proxy', false)

app.listen(port);

console.log('Running on port ', process.env.PORT || 3000);