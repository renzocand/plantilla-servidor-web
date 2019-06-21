const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');


var usuarioSchema = new Schema({
    nombre: { type:String, required: [true, 'El nombre es necesario']},
    correo: { type:String,unique:true, required: [true, 'El correo es necesario']},
});

usuarioSchema.plugin(uniqueValidator,{message:'El {PATH} debe de ser único'})

module.exports = mongoose.model('Usuario', usuarioSchema);  