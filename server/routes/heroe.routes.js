const express = require("express");
let Heroe = require("../models/heroe.model");

const app = express();

// Rutas
app.get("/", async (req, res) => {
  var desde = req.query.desde || 0;
  desde = Number(desde);
  let limite = req.query.limite || 10;
  limite = Number(limite);
  try {
    let heroes = await Heroe.find({}, "nombre poder vivo")
      .skip(desde)
      .limit(limite);
    let contar = await Heroe.countDocuments({});
    res.status(200).json({
      ok: true,
      heroes,
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

    let heroe = new Heroe({
      nombre: body.nombre,
      poder: body.poder,
      vivo: body.vivo
    });

    heroeGuardado = await heroe.save();

    res.status(201).json({
      ok: true,
      mensaje: "Se guardo correctamente",
      heroeGuardado
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
    let heroe = await Heroe.findById(id)
    if(heroe === null){
      return res.json({
        ok: false,
        mensaje: "no existe un Heroe con ese ID"
      })
    }
    res.json({
      ok:true,
      mensaje: "Heroe encontrado",
      heroe
    })
  } catch (error) {
    res.json(error)
  }
})

app.delete("/:id", async (req, res) => {
  try {
    var id = req.params.id;

    let heroe = await Heroe.findByIdAndRemove(id);
    if (heroe === null) {
      return res.json({
        ok: false,
        mensaje: "No existe un Heroe con ese ID"
      });
    }
    res.json({
      ok: true,
      mensaje: "Heroe Eliminado",
      heroe
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
      let heroe = await Heroe.findByIdAndUpdate(id, {$set:cambio}, {new:true});
      res.json({
          ok:true,
          heroe,
      })
  } catch (error) {
      res.json(error)
  }
})

module.exports = app;