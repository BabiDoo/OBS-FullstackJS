let lyDistance = prompt("Qual a distância em anos-luz que você deseja converter?")

let chosenOption = prompt("Você pode converter em três unidades" +"\nEscolha o número da opçao desejada" + "\n1-Parsec (pc)" + "\n2-Unidade Atronômica(AU)" + "\n3-Quilômetros(km)")

let chosenUnity
let convertedDistance


switch(chosenOption) {
    case "1":
        chosenUnity = "Parsecs"
        convertedDistance = (lyDistance * 0.306601)
        break
    case "2":
        chosenUnity = "Unidades Astronõmicas"
        convertedDistance = (lyDistance * 63241.1)
        break
    case "3":
        chosenUnity = "Quilômetros"
        convertedDistance = (lyDistance * 9.5 * Math.pow(10, 12))
        break
    default:
        alert("Distância em anos luz: " + lyDistance + "\nUnidade não identificada. Conversão fora do escopo")
}

alert("Distância Inicial em anos-luz: " + lyDistance + "\nDistância convertida: " + convertedDistance + " " + chosenUnity)