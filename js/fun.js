document.getElementById("startQuizBtn").addEventListener("click", function () {
  this.style.display = "none";
  document.getElementById("quizForm").style.display = "block";
  showQuestion(1); // Mostra a primeira pergunta
});

var questionNumber = 1;
var totalQuestions = document.querySelectorAll(".form-group").length;

document.querySelectorAll(".next-question-btn").forEach((button) => {
  button.addEventListener("click", function () {
    showQuestion(++questionNumber);
    if (questionNumber === totalQuestions) {
      document.getElementById("submitBtn").style.display = "block";
    }
  });
});

// Adicionando evento de clique aos elementos de entrada de rádio
document.querySelectorAll("input[type=radio]").forEach((radio) => {
  radio.addEventListener("click", function () {
    // Verificar se o usuário respondeu à última pergunta
    if (questionNumber === totalQuestions) {
      document.getElementById("submitBtn").style.display = "block";
    }
    // Avançar para a próxima pergunta
    showQuestion(++questionNumber);
  });
});

function showQuestion(questionNumber) {
  var questions = document.getElementsByClassName("form-group");
  for (var i = 0; i < questions.length; i++) {
    if (i === questionNumber - 1) {
      questions[i].style.display = "block";
    } else {
      questions[i].style.display = "none";
    }
  }
}

document.getElementById("startQuizBtn").addEventListener("click", function () {
  document.querySelector("h4").style.display = "none";
  document.querySelectorAll("p").forEach(function (element) {
    element.style.display = "none";
  });
  document.getElementById("quizForm").style.display = "block"; // Mostra o formulário do quiz
});

// Função para atualizar o perfil e exibir a imagem correspondente
function updateProfileAndImage(maxProfile) {
  document.getElementById("perfil").innerText = maxProfile;

  // Atualiza a imagem correspondente ao perfil
  var perfilImage = document.getElementById("perfilImage");
  switch (maxProfile) {
    case "Executor":
      perfilImage.src = "img/executor.jpg";
      break;
    case "Analista":
      perfilImage.src = "img/analista.jpg";
      break;
    case "Comunicador":
      perfilImage.src = "img/comunicador.jpg";
      break;
    case "Planejador":
      perfilImage.src = "img/planejador.jpg";
      break;
  }

  document.getElementById("result").style.display = "block";
}