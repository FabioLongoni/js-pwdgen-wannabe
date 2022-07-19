
let yourName = prompt('whats your name?')
console.log(yourName)

let yourLastName = prompt('whats your lastname?')
console.log(yourLastName)

let yourFavColor = prompt('whats your favorite color?')
console.log(yourFavColor)

let number = Math.floor((Math.random() * 100) + 1);

const passwordGenerator = yourName + yourLastName + yourFavColor + number

const password = document.getElementById('password')

console.dir('password')

password.innerHTML = 'la tua password è: ' + passwordGenerator