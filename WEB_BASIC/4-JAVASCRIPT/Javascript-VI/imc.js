function imc (peso, altura) {
    return new Promise((resolve, reject)  => {
        const p = Number(peso);
        const a = Number(altura);
    
        if (isNaN(p) || isNaN(a) || a <= 0) {
      return reject(new Error('Insira o peso em KG e a altura em metros (altura > 0)'));
    }
    console.log('executando a promisse')
    const resultado = peso / (altura * altura);
    resolve(resultado);
});
}

module.exports = imc;