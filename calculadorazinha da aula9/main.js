function somar() {
    const valor1 = document.querySelector('input#txtn1')
    const valor2 = document.querySelector('input#txtn2')
    const res = document.querySelector('div#res')
    const numero1 = Number(valor1.value)
    const numero2 = Number(valor2.value)
    var resultado = numero1 + numero2
    res.innerHTML = `o resultado da soma entre ${numero1} e ${numero2} é ${resultado}`
}

function subtrair() {
    const valor1 = document.querySelector('input#txtn1')
    const valor2 = document.querySelector('input#txtn2')
    const res = document.querySelector('div#res')
    const numero1 = Number(valor1.value)
    const numero2 = Number(valor2.value)
    var resultado = numero1 - numero2
    res.innerHTML = `o resultado da subtração entre ${numero1} e ${numero2} é ${resultado}`
}

function multiplicar() {
    const valor1 = document.querySelector('input#txtn1')
    const valor2 = document.querySelector('input#txtn2')
    const res = document.querySelector('div#res')
    const numero1 = Number(valor1.value)
    const numero2 = Number(valor2.value)
    var resultado = numero1 * numero2
    res.innerHTML = `o resultado da multiplicação entre ${numero1} e ${numero2} é ${resultado}`
}

function dividir() {
    const valor1 = document.querySelector('input#txtn1')
    const valor2 = document.querySelector('input#txtn2')
    const res = document.querySelector('div#res')
    const numero1 = Number(valor1.value)
    const numero2 = Number(valor2.value)
    var resultado = numero1 / numero2
    res.innerHTML = `o resultado da divisão entre ${numero1} e ${numero2} é ${resultado}`
}

