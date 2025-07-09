const mediaAritmetica = (...numbers) => {
    if(numbers.length === 0) {
        alert('Nenhum número informado');
        return;
    }
    const soma = numbers.reduce((acumulador, valor) => acumulador + valor, 0);
    const media  = soma / numbers.length;
    alert(`A média aritmetica desses numeros é ${ media }`);
}


const mediaPonderada = (...notasEPesos) => {
  if (notasEPesos.length === 0) throw new Error('Forneça ao menos um objeto {valor, peso}');
  
  // usamos reduce para acumular soma ponderada e soma dos pesos
  const { somatorioPonderado, somatorioPesos } = notasEPesos.reduce(
    (acum, { valor, peso }) => {
      acum.somatorioPonderado += valor * peso;
      acum.somatorioPesos     += peso;
      return acum;
    },
    { somatorioPonderado: 0, somatorioPesos: 0 }
  );

  return somatorioPonderado / somatorioPesos;
};

// Exemplo de uso:
const media = mediaPonderada(
  { valor: 7,   peso: 2 },
  { valor: 8.5, peso: 3 },
  { valor: 9,   peso: 5 }
);
console.log(media); // 8.45


function  mediana () {}

function  moda () {}