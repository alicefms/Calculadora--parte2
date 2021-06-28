var form = document.getElementById('cadastro')
var invest = document.querySelector('.test')

form.addEventListener('submit', function (e) {

    e.preventDefault();
    reais = invest.value
    geraRelatorio(reais)


})


document.getElementById('reais').innerHTML = `${reais}`
document.getElementById('viewsTotais').innerHTML = `${viewsTotais}`
document.getElementById('clicksTotais').innerHTML = `${clicksTotais}`
document.getElementById('compaTotais').innerHTML = `${compaTotais}`



