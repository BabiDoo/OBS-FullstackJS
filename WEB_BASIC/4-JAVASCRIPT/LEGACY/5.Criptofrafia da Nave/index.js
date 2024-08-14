let spaceshipName = prompt("Bem vindo ao sistema de criptografia." + 
                        "\nDigite aqui o nome da nave que deseja criptografar.")

let inverted = ""

for(let i = spaceshipName.length-1; i >=0; i--) {
    inverted += spaceshipName[i]
}
 alert("Resultado: " + inverted)