
let yourName = prompt('whats your name?')
console.log(yourName)

let yourLastName = prompt('whats your lastname?')
console.log(yourLastName)

let yourFavColor = prompt('whats your favourite color?')
console.log(yourFavColor)

const passwordGenerator = 'yourName' + 'yourLastname' + 'yourFavColor' + 21

const password = document.getElementById('password')

console.dir(password)

password.innerHTML = passwordGenerator