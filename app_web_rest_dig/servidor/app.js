import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

//Conexión a base de datos
const mongose = require('mongoose');
const uri = 'mongodb://localhost:27017/restaurante';
const options = {useNewUrlParser: true, useUnifiedTopology: true};

mongose.connect(uri, options).then(
    () => {
        console.log("Conectado a mongoDB");
    },
    err => { err }
);

//Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Rutas
app.use('/api', require('./routes/menu'));

const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


//Generación puerto automático
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), function (){
    console.log('Ejemplo escucha en el puerto ' + app.get('puerto'));
});