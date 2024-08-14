let vagas = [];

let option;

do {
  option = Number(prompt(
    "Bem vindo ao nossso sistema ! Digite a opção desejada\n 1- listar vagas disponíveis\n 2- criar uma nova vaga\n3- visualizar uma vaga\n4- inscrever um canditado em uma vaga\n 5- excluir uma vaga\n 6- SAIR"
  ));
  switch (option) {
    case 1:
      if (vagas.length === 0) {
        alert("Não há vagas disponíveis!");
      } else ListarVagas();
      break;
    case 2:
      criarVaga();
      break;
    case 3:
      visualizarVaga();
      break;
    case 4:
      AdicionarCanditado()
      break;
    case 5:
      ExcluirVaga()
      break;
    case 6:
      alert("Saindo...");
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (option !== 6);

function AdicionarCanditado() {
  let nomeCanditado = prompt("Digite o nome do canditado que deseja adicionar");
  let vagaSelecionada = prompt(
    "Digite o nome da vaga que deseja adicionar " + nomeCanditado
  );
  for (let i = 0; i < vagas.length; i++) {
    if (vagaSelecionada === vagas[i].nome) {
      vagas[i].candidatos.push(nomeCanditado);
      alert(nomeCanditado + " foi adicionado(a) à vaga " + vagas[i].nome);
      return;
    }
  }
  alert("Vaga não encontrada!");
}

function visualizarVaga() {
  let indice = prompt("Digite o nome da vaga que você quer visualizar");
  for (let i = 0; i < vagas.length; i++) {
    if (vagas[i].nome == indice) {
      alert(
        "Vaga: " +
          vagas[i].nome +
          "\nDescrição: " +
          vagas[i].descricao +
          "\nSalário: " +
          vagas[i].salario +
          "\nCanditados nessa vaga: " +
          vagas[i].candidatos
      );
      return
    }
  }
  alert("Vaga não encontrada!")
}

function ListarVagas() {
  for (let i = 0; i < vagas.length; i++) {
    alert(
      "Vaga: " +
        (i + 1) +
        "\nNome: " +
        vagas[i].nome +
        "\nQuantidade de inscritos: " +
        vagas[i].candidatos.length
    );
  }
}

function criarVaga() {
  let vaga = {};
  vaga.candidatos = [];
  vaga.nome = prompt("Escreva o nome da vaga");
  vaga.descricao = prompt("Escreva aqui a descrição da vaga");
  vaga.salario = prompt("Digite o salário dessa vaga")
  vaga.dataLimite = prompt("Qual da data limite? Escreva em DD/MM/AA");
  let confirmation = confirm(
    "As informações estão corretas?\n" +
      "NOME DA VAGA: " +
      vaga.nome +
      "\nDESCRIÇÃO: " +
      vaga.descricao +
      "\nSALÁRIO: " +
      vaga.salario +
      "\nDATA LIMITE: " +
      vaga.dataLimite
  );
  if (confirmation === true) {
    vagas.push(vaga);
    alert("Vaga criada com sucesso!")
  }
}

function ExcluirVaga() {
  let vagaSelecionada = prompt("Digite o nome da vaga que deseja excluir")
  for (let i = 0; i < vagas.length; i++) {
    if (vagaSelecionada === vagas[i].nome) {
      vagas.splice(i, 1);
      alert("Vaga " + vagaSelecionada + " excluída com sucesso!")
      return
    }
  }
  alert("Vaga não encontrada!")
}
