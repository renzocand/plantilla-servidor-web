const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');


var usuarioSchema = new Schema({
    nombre: { type:String, required: [true, 'El nombre es necesario']},
    correo: { type:String, required: [true, 'El correo es necesario']},
    asunto: { type:String, required: [true, 'El asunto es necesario']},
    mensaje: { type:String, required: [true, 'El mensaje es necesario']},
}, {collection: 'claudia'});

usuarioSchema.plugin(uniqueValidator,{message:'El {PATH} debe de ser único'})

module.exports = mongoose.model('Claudia', usuarioSchema);  