
let yourName = prompt('whats your name?')

let yourLastName = prompt('whats your lastname?')

let yourFavColor = prompt('whats your favourite color?')

const passwordGenerator = 'yourName' + 'yourLastname' + 'yourFavColor' + 21

const password = document.getElementById('password')

console.dir(password)

password.innerHTML = passwordGenerator