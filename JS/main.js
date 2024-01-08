const userName = prompt("Qual è il tuo nome?", "Jhonny");
console.log(userName);

const UserLastName = prompt("Qual è il tuo cognome?", "Bravo");
console.log(UserLastName);

const UserFavColor = prompt("Qual è il tuo colore preferito?", "Pink");
console.log(UserFavColor);

const date = new Date();
const year = String(date.getFullYear()).substring(2, 4);
console.log(year);

const resultPwd = userName + UserLastName + UserFavColor + year;
console.log(resultPwd);

const resultTitle = document.getElementById("resultTitle");
resultTitle.innerText = "La tua password super sicura che vai sereno è: " + resultPwd;
