const express = require("express");
const nodemailer = require("nodemailer");
let Claudia = require("../models/claudia.model");

const app = express();

// Rutas
app.get("/", async (req, res) => {
  var desde = req.query.desde || 0;
  desde = Number(desde);
  let limite = req.query.limite || 10;
  limite = Number(limite);
  try {
    let usuarios = await Claudia.find({})
      .skip(desde)
      .limit(limite);
    let contar = await Claudia.countDocuments({});
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


    const output = `
    <p>Hola, te acaban de enviar un correo desde tu pagina web</p>
    <h3>Detalles de contacto</h3>
    <ul>  
      <li>Nombre: ${body.nombre}</li>
      <li>Email: ${body.correo}</li>
    </ul>
    <h3>Mensaje: ${body.mensaje}</h3>
  `;

    let usuario = new Claudia({
      nombre: body.nombre,
      correo: body.correo,
      asunto: body.asunto,
      mensaje: body.mensaje
    });

    let transporter = await nodemailer.createTransport({
      host: "renzocandiotti.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "informes@renzocandiotti.com", // generated ethereal user
        pass: "}Q#(_-*Rc1DM" // generated ethereal password
      }
    });


    usuarioGuardado = await usuario.save();

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Renzo Candiotti" <informes@renzocandiotti.com>', // sender address
      to: `renzocand@gmail.com`, // list of receivers
      subject: usuario.asunto, // Subject line
      html: output // html body
    });

    res.status(201).json({
      ok: true,
      mensaje: "El correo se envio correctamente",
      info: info.messageId,
      usuarioGuardado
    });
  } catch (error) {
    res.json({
      ok: false,
      error
    });
  }
});

module.exports = app;
