let initialQnt = prompt("Qual o valor inicial que você possui?")
let initialQntN = parseFloat(initialQnt)
let menu

do {
    menu = prompt("Você possui " + initialQntN + " REAIS\nEscolha uma das opções:\n1- ADICIONAR\n2- REMOVER\n3- SAIR")
    switch (menu) {
        case "1":
            let add = prompt("Digite o valor que quer adicionar");
            let addN = parseFloat(add)
            initialQntN += addN;
            break;
        case "2":
            let rmv = prompt("Digite o valor que deseja remover");
            let rmvN = parseFloat(rmv);
            if(rmv > initialQnt) {
                alert("Você não tem saldo suficiente para realizar este saque")
            } else {
                initialQntN -= rmvN;
            }
            break;

    }
}
while (menu != "3")
alert("saindo...")