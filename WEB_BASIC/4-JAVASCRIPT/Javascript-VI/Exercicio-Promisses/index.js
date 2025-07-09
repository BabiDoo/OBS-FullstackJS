const imc = require('./imc.js');

function myResult(peso, altura) {
  const alturaEmMetros = altura > 10 ? altura / 100 : altura;

  imc(peso, alturaEmMetros)
    .then(resultado => {
      console.log(`Seu IMC é ${resultado.toFixed(2)}`);
      if (resultado < 18.5) {
        console.log('Abaixo do peso');
      } else if (resultado <= 24.9) {
        console.log('Peso normal');
      } else if (resultado <= 29.9) {
        console.log('Sobrepeso');
      } else {
        console.log('Obesidade');
      }
    })
    .catch(error => {
      console.error('Erro no cálculo do IMC:', error.message);
    });
}

myResult(75, 160);
