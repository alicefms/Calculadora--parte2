const Database = require('../db/config')
var moment = require('moment');
moment().format();

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

        console.log(` "${titulo}",
        "${cliente}",
        "${datainicio}",
        "${datafim}",
        ${investimentod},
        ${qtedias}`)


        await db.run(`INSERT INTO anuncios (
            titulo,
            cliente,
            datainicio,
            datafim,
            investimentod
        ) VALUES (
            "${titulo}",
            "${cliente}",
            "${datainicio}",
            "${datafim}",
            ${investimentod}
        )`)
        db.close()
        res.render('index')


    }
}
