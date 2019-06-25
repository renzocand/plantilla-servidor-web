const express = require('express');
const app = express();


// Configuración global de rutas
app.use('/usuario', require('./usuario.routes'));
app.use('/heroe', require('./heroe.routes'));
app.use('/claudia/rest', require('./claudia.routes'));

module.exports = app;