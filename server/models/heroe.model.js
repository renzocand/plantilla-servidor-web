const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: { type:String,  unique:true,required: [true, 'El nombre es necesario'] },
    poder: { type:String, required: [true, 'El poder es necesario']},
    vivo: { type:Boolean, required: [true, 'Tienes que escoger si esta vivo o muerto'] },
},{collection: 'heroes'});

usuarioSchema.plugin(uniqueValidator,{message:'El {PATH} debe de ser único'})

module.exports = mongoose.model('Heroe', usuarioSchema);