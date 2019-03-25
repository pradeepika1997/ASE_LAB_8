const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
  cors = require('cors')

const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/api', (req, res)=>{
    res.json({
        message:'Welcome to the API'
    });
});

app.post('/api/customers', verifyToken, (req,res)=>{
    jwt.verify(req.token, 'secretkey', (err,authData)=>{
       if(err){
           res.sendStatus(403);
       }    
       else{
           res.json({
               message: 'Showing User Info...',
               authData
           })
       }
    });

});

app.post('/api/login', (req,res)=>{
    const user={
      id: 1,
      name: req.body.name,
      email: req.body.email
    };
   jwt.sign({user}, 'secretkey',(err, token)=>{
        res.json({token});
    });

});
//Format of the token
//Authorizations: Bearer <access_token>

//Verify token
function verifyToken(req,res,next){
    //get auth header value
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== "undefined"){

        //split at the space
        const bearer = bearerHeader.split(' ');

        //Get token from array
        const bearerToken = bearer[1];

        //set the token
        req.token = bearerToken;

        //next middle ware
        next();

    }else{
        res.sendStatus(403);
    }
}

const port = process.env.PORT || 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
