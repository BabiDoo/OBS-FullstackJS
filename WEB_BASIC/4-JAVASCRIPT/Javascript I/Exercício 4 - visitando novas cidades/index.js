let visitedCities = ""
let qntCityVisited = 0
const touristName = prompt("Olá! Qual o seu nome?")
let cityQuestion = confirm("Você já visitou alguma cidade?")





while (cityQuestion === true) {
    let cityName = prompt("LEGAL!!\nQual o nome da cidade?")
    visitedCities += cityName + "\n"
    qntCityVisited++
    cityQuestion = confirm("Você já visitou alguma outra cidade?")
}


alert(touristName + ", você já visitou " + qntCityVisited + " cidades:\n" + visitedCities)