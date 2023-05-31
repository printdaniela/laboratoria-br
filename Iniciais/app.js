let names = prompt("Qual o seu nome e sobrenome?");
let firstInicial = names.slice(0,1);

let secondInicialPosition = names.indexOf(" ") + 1;
let secondInicial = names.slice(secondInicialPosition, secondInicialPosition + 1);

document.write("Suas iniciais são: " + firstInicial.toUpperCase() + secondInicial.toUpperCase());