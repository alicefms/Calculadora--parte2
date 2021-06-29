const Database = require('../db/config')
var moment = require('moment');
moment().format();

const geraRelatorio = require('../services/calculadora')


module.exports = {



    async criar(req, res) {
        const db = await Database()
        const titulo = req.body.nomeanuncio
        const cliente = req.body.cliente
        const datainicio = req.body.datainicio
        const datafim = req.body.datafim
        const investimentod = req.body.investimentod
        const d1 = moment(datainicio, "YYYY-MM-DD")
        const d2 = moment(datafim, "YYYY-MM-DD")
        const qtedias = moment.duration(d2.diff(d1)).asDays();

        const { viewsTotais, clicksTotais, compaTotais, investimetoTotal } = geraRelatorio(investimentod, qtedias)

        console.log(` "${titulo}",
        "${cliente}",
        "${datainicio}",
        "${datafim}",
        ${investimentod},
        ${qtedias},
        ${viewsTotais},
        ${compaTotais},
        ${investimetoTotal}
        
       `)


        await db.run(`INSERT INTO anuncios (
            titulo,
            cliente,
            datainicio,
            datafim,
            investimentod, 
            qtedias,
            viewstotais,
            clickstotais,
            compartilhamentostotais,
            investimentototal
        ) VALUES (
            "${titulo}",
            "${cliente}",
            "${datainicio}",
            "${datafim}",
            ${investimentod},
            ${qtedias},
            ${viewsTotais},
            ${clicksTotais},
            ${compaTotais},
            ${investimetoTotal}
        )`)
        db.close()
        res.render('index')
    },

    async buscar(req, res) {
        const db = await Database()
        const anuncios = await db.all(`SELECT * FROM anuncios`)

        res.render('relatorios', { anuncios: anuncios })
    },




}
