let pilotName = prompt("Identificação: Digite aqui o seu nome")
let velocityInitial = 0
let velocityAceleration = prompt("Para qual velocidade (km/h) gostaria de acelerar a nave?")
let velocityConfirm = confirm("Confirmar velocidade para " + velocityAceleration + " km/h?")
let velocityNew = velocityAceleration + velocityInitial
velocityConfirm === true ? velocityInitial = velocityNew : velocityInitial === 0 

if(velocityInitial <=0) {
    alert("Nave está parada. Considere acelerar e partir.")
} else if(velocityInitial < 40) {
    alert("Nave devagar. Considere aumentar a velocidade.")
} else if(velocityInitial >= 40 && velocityInitial < 80){
    alert("Velocidade Ideal. Considere manter.")
} else if(velocityInitial >=80 && velocityInitial <=100){
    alert("Velocidade alta. Considere diminuir a velocidade.")
} else {
    alert("Velocidade acima do permitido. Ajuste automático iniciado.")
}

alert("Dados atuais" + "\nPiloto: " + pilotName + "\nVelocidade: " + velocityInitial + " km/h")