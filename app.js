var express = require('express');
var app = express();

// Binding express app to port 3000
app.listen(3000,function(){
    console.log('Node server running @ http://localhost:3000')
});


// In the app.js file, define the static folder paths so that it gets resolved in the node application
app.use('/node_modules',  express.static(__dirname + '/node_modules'));

app.use('/style',  express.static(__dirname + '/style'));

// Now let’s define the default route for our application.
app.get('/',function(req,res){
    res.sendFile('home.html',{'root': __dirname + '/templates'});
})

/* 
As seen in the above code, when the / route is requested the home.html page is rendered. 

Point browser URL to http://localhost:3000 and you should be able to view the home page.
*/

// Next define the routes to show the sign in page and the sign up page in app.js
app.get('/showSignInPage',function(req,res){
    res.sendFile('signin.html',{'root': __dirname + '/templates'});
})

app.get('/showSignUpPage',function(req,res){
  res.sendFile('signup.html',{'root':__dirname + '/templates'})
})
