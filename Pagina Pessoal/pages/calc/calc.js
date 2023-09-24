const numeros = [...document.getElementsByClassName('numero')]
const visor = document.querySelector('#visor')
const limp = document.getElementById('limp')
const limpar = document.getElementById('limpar')
const operador = [...document.getElementsByClassName('operador')]
const calcular = document.getElementById('igual')

numeros.map((el) => {
    el.addEventListener('click', () => {
        console.log(el.textContent)
        visor.innerHTML += el.textContent
    })
})

limp.addEventListener('click', () => {
    visor.innerHTML = ''
})

limpar.addEventListener('click', () => {
    var resultado = visor.innerHTML
    visor.innerHTML = resultado.substring(0, resultado.length -1)
})

operador.map((el) => {
    el.addEventListener('click', () => {
        var exp = el.id
        switch(exp) {
            case "multi":
                visor.innerHTML = visor.innerHTML + '*'
            break
            case "divi":
                visor.innerHTML = visor.innerHTML + '/'
            break
            case "mais":
                visor.innerHTML = visor.innerHTML + '+'
            break
            case "menos":
                visor.innerHTML = visor.innerHTML + '-'
            break
            case "pont":
                visor.innerHTML = visor.innerHTML + '.'
            break
        }
    })
})

calcular.addEventListener('click', () => {
    eval(visor.innerHTML)
    visor.innerHTML = eval(visor.innerHTML)
})


