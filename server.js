require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PostSchema = require('./schema/PostSchema');
const TopicSchema = require('./schema/TopicsSchema');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');

mongoose
    .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

const jwtCheck = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: process.env.TOKEN_SIGNING_ALGORITHM
});

app.use(cors(
  {
    origin: '*',
    methods: ['POST', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
));
// app.use(jwtCheck);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('trust proxy', false)


app.post('/favourites', async(req, res) => {

  try{

    const posts = await PostSchema.find({}).where('favourites').equals(true)
    res.status(200).send(posts)

  } catch (err){

    console.log(err)
    res.status(500).send(err)

  }

})

app.put('/changeBookmark', async(req, res) => {

  try{

    const { id } = req.body
    const post = await PostSchema.findById(id)
    post.favourites = !post.favourites
    await post.save()

    res.status(200).send(post)

  } catch (err){

    res.status(500).send("Server Error")
  }

});


app.post('/getPosts', async(req, res) => {

  try{

    const posts = await PostSchema.find({})
    res.status(200).send(posts)

  } catch (err){

    console.log(err)
    res.status(500).send(err)

  }

});


app.post('/createPost', async(req, res) => {

  try{

    const data = req.body

    const post = new PostSchema({
      title: data.title,
      content: data.content,
      tags: data.tags,
      topic: data.topic,
      priority: data.priority,
      dueDate: data.dueDate,
      status: data.status,
    });

    await post.save()
    res.sendStatus(201)

  } catch(err){
  
    console.log(err)
    res.status(500).send(err)
  }


});


app.post('/createTopic', async(req, res) => {

  try{

    const name = req.body

    if (name < 3 || name > 20){
      return res.status(400).send("Topic name must be between 3 and 20 characters")
    }


    await topic.save()
    res.sendStatus(201)

  } catch(err){

    console.log(err)
    res.status(500).send(err)

  }

});



app.listen(process.env.PORT, () => {
  console.log('Server Started ', process.env.PORT || 3000);
});
