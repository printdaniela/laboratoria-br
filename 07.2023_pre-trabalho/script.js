const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./questions.js";  //importando as questões da classe questions


let currentIndex = 0; //variavel para armazenar o index atual

let questionsCorrect = 0; //variavel para armazenar a quantidade de acerto;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") { //essa função vai verificar se tem questão verdadeira
    questionsCorrect++;
    alert("Acertou!");
  }
  alert("Errou!");
  
  if (currentIndex < questions.length - 1) { //vai verificar se n é a última questao, se n for ele vai aumentat mais 1 indice atual

    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`; // mostra a quantidade de questões que esta sendo respondida na tela 1/4
  const item = questions[currentIndex];// aqui eu declaro "item",ele vai pegar a questao do index atual 
  answers.innerHTML = "";
  question.innerHTML = item.question;  //qdo chamar a função vai me garantir answers(respostas) esteja vazio e retorna a question(pergunta) do item atual

  item.answers.forEach((answer) => { // forEach eh uma estrutura de repetição, eh usada para facilitar a iteracao de estutura com array
    const div = document.createElement("div");

    div.innerHTML = `
    <button class="answer" data-correct="${answer.correct}">
      ${answer.option}
    </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => { {  // document.querySelectorAll() é um método q retorna uma lista de todos os botoes
    item.addEventListener("click", nextQuestion); // dando forEach para aumentar osclicks em cada botao

    }

  });
}


  
loadQuestion(); // função para carregar o acerto de questoes. Ela vai ser chamada assim que carregar o documento;
