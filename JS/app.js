
let yourName = prompt('whats your name?')
console.log(yourName)

let yourLastName = prompt('whats your lastname?')
console.log(yourLastName)

let yourFavColor = prompt('whats your favorite color?')
console.log(yourFavColor)

const passwordGenerator = yourName + yourLastName + yourFavColor + 21

const password = document.getElementById('password')

console.dir('password')

password.innerHTML = 'la tua password è ' + passwordGenerator