var arrayCarrosPosicoes ;
var arrayPontosPosicoes ;
const moment = require("moment");
const util = require("../util/util")
const Ponto = require('../BD/models/pontos');
const Carro = require('../BD/models/carros');
var obgTempoPois = {};
var arrayCarros = [];
var carrosProximos = [];
var arrayFormatado = [];
var objCompleto ={};
const listaCarrosPosicoes = ()=>{
    return arrayCarrosPosicoes;
}

const listaPontosCarros = (arrayPontos, arrayCarros) =>{
    arrayPontosPosicoes = arrayPontos;
    arrayCarrosPosicoes = arrayCarros;

    var accTempo = 0; 
    carrosProximos = []
    arrayPontosPosicoes.reduce((anterior, atual)=>{
        arrayCarrosPosicoes.forEach((item, i)=>{
            var distance = util.distanciaLatLongEmKm(atual, item);
            
            if(distance <= parseInt(atual.raio,10) ){
                objetoCompleto = item;
                criarObjetoCompleto(item, atual, distance);
                //var ultimoItem = arrayCarrosPosicoes.length;
                accTempo++;
            };
        },0);
       
    });
    return carrosProximos;
}

const criarObjetoCompleto = (carro, ponto, distance)=>{
    var objCompleto = {
        placa: carro.placa,
        data_posicao: carro.data_posicao,
        velocidade: carro.velocidade,
        longitude: carro.longitude,
        latitude: carro.latitude,
        ignicao: carro.ignicao,
        distanciaPontoMetros: distance,
        ponto: {
            nome: ponto.nome,
            raio: ponto.raio,
            latitude: ponto.latitude,
            longitude: ponto.longitude
        }
    }
    carrosProximos.push(objCompleto);
}

module.exports = {
    listaCarrosPosicoes,
    listaPontosCarros

}