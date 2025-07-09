async function imc (peso, altura) {
        const p = Number(peso);
        const a = Number(altura);
    
        if (isNaN(p) || isNaN(a) || a <= 0) {
      return Promise.reject('Insira o peso em KG e a altura em metros (altura > 0)');}
      return peso / (altura * altura);
    
}



async function myResult(peso, altura) {
  const alturaEmMetros = altura > 10 ? altura / 100 : altura;

  try {
    const resultado = await imc(peso, alturaEmMetros);
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
  } catch (error) {
    console.error('Erro no cálculo do IMC:', error.message);
  }
}

myResult(60, 160);
