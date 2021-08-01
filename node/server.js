const express=require('express');
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt-nodejs'); 
const cors=require('cors');
const knex=require('knex');

const register=require('./controllers/register.js');
const profile=require('./controllers/profile.js');
const image=require('./controllers/image.js');
const signin=require('./controllers/signin.js');


const db=knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'aj',
        password :'jab',
        database : 'smart-brain'
    }
  });

// db.select('*').from('users').then(data=>{
//     console.log(data);
// })
const app=express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send(database.users);
})

app.post('/signin',(req,res)=>{signin.handleSignIn(req,res,db,bcrypt)})


app.post('/register',(req,res)=>{register.handleRegister(req,res,db,bcrypt)})

app.get('/profile/:id',(req,res)=>{profile.handleProfileGet(req,res,db,bcrypt)})

app.put('/image',(req,res)=>{image.handleImage(req,res,db,bcrypt)})
app.post('/imageurl',(req,res)=>{image.handleAPICall(req,res)})

app.listen(3000,()=>{
    console.log('app is running  at port 3000');
})

/*
-->res =this is working
/signin=POST //success or fail
/register =POST // user
/profile/:userID--> GET = user
/image --> PUT-->user
*/