let views = 0
let clicks = 0
let compartilhamentos = 0
let maisviews = 0
let viewsTotais = 0
let compaTotais = 0
let clicksTotais = 0
let share = 0

function calculaloop(view) {

    clicks = Math.floor(12 / 100 * view)
    compartilhamentos = Math.floor(3 / 20 * clicks)
    maisviews = compartilhamentos * 40

    clicksTotais = clicksTotais + clicks
    compaTotais = compaTotais + compartilhamentos
    viewsTotais = viewsTotais + maisviews
    return maisviews
}

const geraRelatorio = (valor, qtedias) => {
    views = 30 * valor
    viewsTotais = views

    do {
        if (share < 3) {
            views = calculaloop(views)
        }

        share = share + 1

        if (share == 3) break
    } while (compartilhamentos >= 1)

    clicksTotais = clicksTotais + Math.floor(12 / 100 * views)

    const investimetoTotal = qtedias * valor
    return { viewsTotais, clicksTotais, compaTotais, investimetoTotal }
}

module.exports = geraRelatorio
