const express = require('express');
const app = express();


// Configuración global de rutas
app.use('/usuario', require('./usuario.routes'));

module.exports = app;