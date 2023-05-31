let income = parseFloat(prompt("Qual é o valor da entrada?"));
let costs = parseFloat(prompt("Qual é o valor da saída?"));
let taxPercent = parseFloat(prompt("Qual é a porcentagem dos impostos?"));

let grossProfit = income - costs;
let tax = grossProfit * taxPercent/100
let netIncome = grossProfit - tax;

// mostrar na página web

document.write("Sua renda líquida é de $" + netIncome);



