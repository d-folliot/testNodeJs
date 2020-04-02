const express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil, que puis-je pour vous ?');
})
.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
})
.get('/etage/1/chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Hé ho, c\'est privé ici !');
})
.get('/etage/:etagenum/:chambre', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    let chambre = parseInt(req.params.chambre);
    let etage = parseInt(req.params.etagenum);
    //res.end('Vous êtes à la chambre ' + chambre + ' de l\'étage n°' + etage );
    res.render('chambre.ejs',{'chambre' : chambre, 'etage' : etage });
})
.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);