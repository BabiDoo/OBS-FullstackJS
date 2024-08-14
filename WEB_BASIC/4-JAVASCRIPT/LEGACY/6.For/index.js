var spaceship = prompt("Digite aqui o nome da nave que você deseja criptografar")
var firstCharacter = prompt("Digite aqui o caractere que você deseja substituir")
var criptoCharacter = prompt("Digite aqui o novo caractere")
var confirmation = confirm("Tem certeza que deseja substuir " + firstCharacter + " por " + criptoCharacter + "?")
var criptoSpaceship = ""


if (confirmation) {
    for (let i = 0; i < spaceship.length; i++) {
        if (spaceship[i] == firstCharacter) {
            criptoSpaceship += criptoCharacter
        } else {
            criptoSpaceship += spaceship[i]
        }

        
    }
    alert("NOME: " + criptoSpaceship)
} else {
    alert("REINICIAR")
}