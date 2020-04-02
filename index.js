const express = require('express');
let app = express();
const bodyParser = require('body-parser');

const session = require ('cookie-session');
const cookieParser = require('cookie-parser');

app.use(session({secret: "jesaispastropaquoicasertmaiscacestfait"}))
.use(bodyParser.urlencoded({ extended: false })) // obligatoire pour parser génériquement toutes les incoming requests sinon req.body n'est pas utilisable
//.use(bodyParser.json());
.use(cookieParser())
.get('/', function(req, res){
    let templist;
    console.log(req.cookies);
    if (req.cookies.list){
        templist = req.cookies.list;
    }
    else{
        templist = ['faire un truc', 'en faire un autre'];
    }
    res.setHeader('Content-Type','text/html' ); 
    res.cookie('list', templist);
    res.status(200).render('index.ejs',{'dolist':templist} );
})
.post('/add', function(req, res){
    let templist = req.cookies.list;
    templist.push(req.body.textinput);
    res.cookie('list', templist);
    res.redirect('/');
})
.post('/remove', function(req, res){
    let templist = req.cookies.list;
    templist.splice(parseInt(Object.keys(req.body)[0]),1);
    res.cookie('list', templist);
    res.redirect('/');
})
.use(function(req,res){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});


app.listen(8080);