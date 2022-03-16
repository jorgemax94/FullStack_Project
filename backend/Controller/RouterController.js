const express = require('express');

const bodyParser = require('body-parser');
const csvtojson = require('csvtojson');
const fs = require('fs');
const csv = require('csv-parser');
const multer = require('multer');
const multerConfig = multer();
const controllerAPI = require('./ControllerApi')

const Ponto = require('../BD/models/pontos');
const Carro = require('../BD/models/carros');

var qntReg;
const router = express.Router();

router.get('/listaCarrosPontos', async (req, res)=>{
    try {
        const arrayPontosPosicoes = await Ponto.find();
        const arrayCarrosPosicoes = await Carro.find();
        
        const arrayCarrosProximos = await controllerAPI.listaPontosCarros(arrayPontosPosicoes, arrayCarrosPosicoes);
        return res.send(arrayCarrosProximos);
    } catch (error) {
        res.status(400).send({error: error.message});
    }
})

router.get('/listaCarrosPosicoes', async (req, res)=>{
    try {
        const carrosCompleta = await Carro.find();

        return res.send({carrosCompleta});
    } catch (error) {
        res.status(400).send({error: error.message});
    }
})

router.get('/listaPontosPosicoes', async (req, res)=>{
    try {
        const carrosCompleta = await Ponto.find();

        return res.send({carrosCompleta});
    } catch (error) {
        res.status(400).send({error: error.message});
    }
})

router.post('/loadPontosPosicoes', multerConfig.single("file"), async (req, res)=>{
    try {
        csvtojson()
        .fromString(req.file.buffer.toString('utf-8'))
        .then((json)=>{
            //fs.writeFileSync("./backend/BD/pois.json", JSON.stringify(json), "utf-8");
            qntReg = json.length;
            json.forEach((item, i)=>{
                Ponto.create(item);
            })
            return res.send(`CSV processado com sucesso. ${qntReg} Registros inseridos`);
        })
    } catch (error) {
        res.status(400).send({error: error.message});
    }
})

router.post('/loadCarrosPosicoes', multerConfig.single("file"), async (req, res)=>{
    try {
        csvtojson()
        .fromString(req.file.buffer.toString('utf-8'))
        .then((json)=>{
            //fs.writeFileSync("./backend/BD/pois.json", JSON.stringify(json), "utf-8");
            qntReg = json.length;
            json.forEach((item, i)=>{
                Carro.create(item);
            })
            return res.send(`CSV processado com sucesso. ${qntReg} Registros inseridos`);
        })
    } catch (error) {
        res.status(400).send({error: error.message});
    }
})


module.exports = app => app.use('/rastreio', router);