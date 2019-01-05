const express =require('express'); //let, var can also be uses
const hbs=require('hbs');
 

var app=express();
app.set('view engine', 'hbs'); //setting hbs as view engine

app.get('/home',(req, res)=>{ //home.bhs should be created in the folder named views
    res.render('home.hbs'); //render is to load a HTML page
});

app.get('/about', (req, res)=>{
    res.render('about.hbs');
});

app.get('/',(req, res)=>{ //defining routing when hitting /
    res.send('<h1>Welcome to my webpage</h1>')

});

app.post('/getusers', (req, res)=>{
    res.send({
        name:'Rahul',
        Age:23,
        likes:['biking', 'reading']
    });
});

app.listen(3000); //listen is a function and 3000 is port number to host the web
console.log('server running on http://localhost:3000');