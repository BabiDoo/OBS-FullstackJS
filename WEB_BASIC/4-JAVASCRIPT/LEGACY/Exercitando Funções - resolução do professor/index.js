let spaceshipName = prompt("Digite o nome da nave")

let spaceshipVelocity = 0

let chosenOption

function showMenu() {
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4") {
       option = prompt ("O que deseja fazer?\n" +
                        "1 - acelerar a nave em 5km/s\n" +
                        "2- Desacelerar a nave em 5km/s\n" +
                        "3- Imprimir dados de bordo\n" +
                        "4- Sair do programa") 
    }
    return option
}






function speedUp(velocity) {
    newVelocity = velocity + 5
    return newVelocity
    
}

function slowDown(velocity) {
    let newVelocity = velocity - 5
    if(newVelocity < 0 ) {
        newVelocity = 0
    }
    return newVelocity
    
}


function printSpaceshipBordData(name,velocity) { 
    alert("Espaçonave: " + name + "/n" + "Velocidade: " + velocity + "km/s")
}








do{
    chosenOption = showMenu()
    switch(chosenOption) {
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
            break;
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
            break;
        case "3":
            printSpaceshipBordData(spaceshipName,spaceshipVelocity)
            break;
        default:
            alert("Encerrando programa de bordo")

    }
} while(chosenOption != "4")










