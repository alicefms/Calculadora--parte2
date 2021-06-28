const Database = require('../db/config')

module.exports = {
    async criar(req, res) {
        const db = await Database()
        const titulo = req.body.nomeanuncio
        const cliente = req.body.cliente
        const datainicio = req.body.datainicio
        const datafim = req.body.datafim
        const investimentod = req.body.investimentod


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

        res.render('index')

    }
}


