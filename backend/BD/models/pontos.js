var mongoose = require('../config/db');


const PontoSchema = new mongoose.Schema({
    nome: String,
    raio: String,
    latitude: String,
    longitude: String
})

const Ponto = mongoose.model('pontos', PontoSchema);

module.exports = Ponto;