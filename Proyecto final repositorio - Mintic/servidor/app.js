import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
/*let express = require("express"),
cors = require("cors"),
mongoose = require("mongoose"),
bodyParser = require("body-parser");
morgan = require("morgan");
path = require("path");*/

const app= express();

//CONEXION A BASE DE DATOS
const mongoose = require('mongoose');


//const uri = "mongodb://localhost:27017/restaurante";
//const uri = 'mongodb+srv://HeilyR:Nicolas23@cluster0.xxlvk.mongodb.net/restaurante?retryWrites=true&w=majority';
const uri = "mongodb+srv://mtic:Grupo92equipo2@cluster0.lcb4i.mongodb.net/restaurante?retryWrites=true&w=majority";
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => { 
        console.log("conectado a DB")
     },
    err => { err }
  );


//MIDDLEWARE
app.use(morgan('tiny'));
app.use(cors());
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
   });
app.use(express.json());

app.use(express.urlencoded({ extended: true }))




//RUTA
//app.get("/", function(req,res){

//    res.send("Hola Mundo");

//});

app.use('/api', require('./routes/menu'));
app.use('/api', require('./routes/usuarios'));
app.use('/api', require('./routes/nota'));
app.use('/api', require('./routes/factura'));


const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//PUERTO


app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function () {
    console.log('Example app listening on port'+ app.get('puerto'));
});