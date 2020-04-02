const EventEmitter = require('events').EventEmitter;
const polite = require('polite');

let newPerson = new EventEmitter();

newPerson.on('newcomer', function(name, age, positif){

    console.log("Il s'appele " + name + " et il a  " + age + " ans!");
    polite.direBonjour(name);
    if (positif)
        console.log("...Et il est positif au Corona! On l'applaudit bien fort!");
    else    
        console.log("...Et il est negatif au Corona! En voilà un qui ne vit pas avec son temps!"); 
    polite.direByeBye(name);    
});

newPerson.emit('newcomer', 'Mario',35, true);