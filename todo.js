var express = require('express');
var session = require('cookie-session'); // Charge le middleware de sessions
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });
urlencodedParser.
var app = express();


/* On utilise les sessions */
app.use(session({secret: 'todotopsecret'}))


/* Gestion des routes en-dessous
   ....                         */
.post('/todo/:ajouter',function(req,res,next){
    res.setHeader('Content-Type','');
    res.render('todo.ejs',{ajouter:req.params.ajouter});
})
.post('/todo/:ajouter',function(req,res,next){
    res.setHeader('Content-Type','');
    res.render('todo.ejs',{ajouter:req.params.ajouter});
})
.post('/todo/:ajouter',function(req,res,next){
    res.setHeader('Content-Type','');
    res.render('todo.ejs',{ajouter:req.params.ajouter});
})