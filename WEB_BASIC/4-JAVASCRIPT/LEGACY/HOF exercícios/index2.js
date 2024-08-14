let spaceshipVelocity = 150
let deceleration = 20





function open(velocity, printer) {
    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    } alert("Saída Autorizada")

}


let dataPrinter = velocity => {
 alert("Velocidade atual: " + velocity + "km/s")
}

let confirmation = open(spaceshipVelocity,dataPrinter)