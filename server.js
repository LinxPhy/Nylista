require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: process.env.TOKEN_SIGNING_ALGORITHM
});

//app.use(cors());
app.use(jwtCheck);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('trust proxy', false)


app.post('/createPost', (req, res) => {

  const formData = req.body;
  


});











app.listen(port, () => {
  console.log('Server Started ', process.env.PORT || 3000);
});
