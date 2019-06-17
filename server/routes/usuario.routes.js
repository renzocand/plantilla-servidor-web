const express = require('express');
let Usuario = require('../models/usuario.model');

const app = express();


// Rutas
app.get('/', async (req, res, next) => {

    var desde = req.query.desde || 0;
    desde = Number(desde);
    let limite = req.query.limite || 5;
    limite = Number(limite)
    try {
        let usuarios = await Usuario.find({}, 'nombre poder vivo')
        .skip(desde)
        .limit(limite)
        let contar = await Usuario.countDocuments({})
        res.status(200).json({
            ok: true,
            usuarios,
            total: contar
        });

    } catch (error) {
        res.json({
            ok: false
        })
    }
});


app.post('/' ,async (req, res) => {
    try {
        let body = req.body;

        let usuario = new Usuario({
            nombre: body.nombre,
            poder: body.poder,
            vivo: body.vivo
        })

        usuarioGuardado = await usuario.save()
    
        res.status(201).json({
            ok: true,
            mensaje: 'Se guardo correctamente',
            usuarioGuardado
        });
    } catch (error) {
        res.json({
            ok:false,
            error
        })
    }
})

module.exports = app;