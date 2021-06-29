const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE anuncios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            cliente TEXT,
            datainicio TEXT ,
            datafim TEXT,
            investimentod INTEGER,
            qtedias INTEGER,
            viewstotais INTEGER,
            clickstotais INTEGER,
            compartilhamentostotais INTEGER,
            investimentototal INTEGER
        )`);

        await db.close()
    }
}

initDb.init()


