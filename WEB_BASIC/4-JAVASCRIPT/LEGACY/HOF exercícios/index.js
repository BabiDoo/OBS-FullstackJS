function opening(velocity, printer) {
    let deceleration = 20

    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }
    alert("Saída autorizada")
}

let dataPrint = velocity => {
    alert("Velocidade atual: " + velocity + "km/s" + "\nFavor aguardar autorização de saída.")
}

let spaceshipVelocity = 80
opening(spaceshipVelocity, dataPrint)
