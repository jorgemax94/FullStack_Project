var mongoose = require('../config/db');

var CarroSchema = new mongoose.Schema({
    placa: String,
    data_posicao: String,
    velocidade: String,
    longitude: String,
    latitude: String,
    ignicao: String
})

const Car = mongoose.model('carros', CarroSchema);

module.exports = Car;