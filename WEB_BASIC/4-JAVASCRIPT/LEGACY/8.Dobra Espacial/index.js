let warpDrive = 0
 let spaceship = prompt("Seja bem vindo, Piloto." + "\nPor favor, digite o nome da nave.")
 let confirmWarpDrive = prompt("Viagem iniciada." + "\nDeseja entrar em dobra espacial?" + "\n1 - Sim" + "\n2 - Não")
 let newWarpDrive
 let finalRelatory

if(confirmWarpDrive == true) {
    warpDrive =+1
    newWarpDrive = prompt("Deseja entrar na próxima dobra espacial?" + "\n1 - Sim" + "\n2 - Não")
}


switch(newWarpDrive) {
    case "1": {
       newWarpDrive === true
       warpDrive =+1
       newWarpDrive= prompt("Deseja entrar na próxima dobra espacial?" + "\n1 - Sim" + "\n2 - Não")
      }
   break
    
    case "2": {  
     if (newWarpDrive === "2") {
        finalRelatory = alert("Nave: " + spaceship + "está em " + warpDrive + "dobras espaciais.")
     } 
     break
    }
}


alert("Não entramos em nenhuma dobra espacial. Favor reiniciar a nave")


 

 
