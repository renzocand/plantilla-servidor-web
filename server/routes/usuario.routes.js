const express = require("express");
let Usuario = require("../models/usuario.model");

const app = express();

// Rutas
app.get("/", async (req, res) => {
  var desde = req.query.desde || 0;
  desde = Number(desde);
  let limite = req.query.limite || 10;
  limite = Number(limite);
  try {
    let usuarios = await Usuario.find({}, "nombre poder vivo")
      .skip(desde)
      .limit(limite);
    let contar = await Usuario.countDocuments({});
    res.status(200).json({
      ok: true,
      usuarios,
      total: contar
    });
  } catch (error) {
    res.json({
      ok: false
    });
  }
});

app.post("/", async (req, res) => {
  try {
    let body = req.body;

    let usuario = new Usuario({
      nombre: body.nombre,
      poder: body.poder,
      vivo: body.vivo
    });

    usuarioGuardado = await usuario.save();

    res.status(201).json({
      ok: true,
      mensaje: "Se guardo correctamente",
      usuarioGuardado
    });
  } catch (error) {
    res.json({
      ok: false,
      error
    });
  }
});

app.get("/:id", async (req,res)=>{
  let id = req.params.id;
  try {
    let usuario = await Usuario.findById(id)
    if(usuario === null){
      return res.json({
        ok: false,
        mensaje: "no existe un usuario con ese ID"
      })
    }
    res.json({
      ok:true,
      mensaje: "Usuario encontrado",
      usuario
    })
  } catch (error) {
    res.json(error)
  }
})

app.delete("/:id", async (req, res) => {
  try {
    var id = req.params.id;

    let usuario = await Usuario.findByIdAndRemove(id);
    if (usuario === null) {
      return res.json({
        ok: false,
        mensaje: "No existe un usuario con ese ID"
      });
    }
    res.json({
      ok: true,
      mensaje: "Usuario Eliminado",
      usuario
    });
  } catch (error) {
    res.json(error);
  }
});

app.put('/:id', async (req,res)=>{
  try {
      var id = req.params.id;
      let body = req.body;
      let cambio = {
          nombre: body.nombre,
          poder: body.poder,
          vivo: body.vivo
      }
      let usuario = await Usuario.findByIdAndUpdate(id, {$set:cambio}, {new:true});
      res.json({
          ok:true,
          usuario,
      })
  } catch (error) {
      res.json(error)
  }
})

module.exports = app;
