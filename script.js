
let calcular = document.getElementById('calcular')


function imc() {
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1); //arrendo o resultado pra uma casa depois da virgula

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if (valorIMC < 25) {
            classificacao = 'Seu peso é ideal!'
        } else if (valorIMC < 35) {
            classificacao = 'levemente acima do peso!'
        } else if (valorIMC < 40) {
            classificacao = 'obesidade grau I'
        } else if (valorIMC < 45) {
            classificacao = 'obesidade grau II'
        } else {
            classificacao = 'Obesidade morbida, cuidado!'
        }

        resultado.textContent = `${nome} seu IMC é: ${valorIMC} e você está ${classificacao}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }

}

calcular.addEventListener('click', imc)