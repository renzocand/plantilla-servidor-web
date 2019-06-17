require('./config/config')

const express = require('express')
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express()

//CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

// PUBLIC
app.use(express.static(path.resolve(__dirname, '../public')))


// parse application/x-www-form-urlencoded y json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


 // Configuración global de rutas
app.use(require('./routes/index'));


mongoose.connect(process.env.URLDB,{useNewUrlParser: true}, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});