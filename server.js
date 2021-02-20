const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const register=require('./controllers/register');
const signin = require('./controllers/signin');
const image= require('./controllers/image');
const profile= require('./controllers/profile');
const db = require('knex')({
  client: 'pg',
  connection: {
  	host:'127.0.0.1',
  	user:'postgres',
  	password:'test',
    database: 'smart_brain'
  },
})




app.use(bodyParser.json());
app.use(cors());

app.post('/signin',(req,res)=>{signin.handleSignin(req,res,db,bcrypt)});

app.get('/profile/:id',(req,res)=>{profile.handleProfile(req,re)})



app.post('/register', (req,res)=>{register.handleRegister(req,res,db,bcrypt)})


app.put('/image', (req,res)=>{image.handleImageCount(req,res,db)})
app.post('/imageurl', (req,res)=>{image.handleApiCall(req,res)})

app.listen('3000',()=>
{
	console.log('app is listening to 3000');

});