document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const responses = {};
  for (let pair of formData.entries()) {
    responses[pair[0]] = pair[1];
  }

  const profileCounts = {
    Executor: 0,
    Analista: 0,
    Comunicador: 0,
    Planejador: 0,
  };

  for (let response in responses) {
    profileCounts[responses[response]]++;
  }

  const maxProfile = Object.keys(profileCounts).reduce((a, b) =>
    profileCounts[a] > profileCounts[b] ? a : b
  );

  updateProfileAndImage(maxProfile);

  const ctx = document.getElementById("chart").getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: Object.keys(profileCounts),
      datasets: [
        {
          label: "Perfil",
          data: Object.values(profileCounts),
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

function updateProfileAndImage(maxProfile) {
  document.getElementById("perfil").innerText = maxProfile;

  // Atualiza a imagem correspondente ao perfil e o texto descritivo
  var perfilImage = document.getElementById("perfilImage");
  var perfilDescription = document.getElementById("perfilDescription");
  switch (maxProfile) {
    case "Executor":
      perfilImage.src = "../img/executor.jpg";
      perfilDescription.innerText =
        "O Executor: Transformando Visão em Realidade";
      break;
    case "Analista":
      perfilImage.src = "../img/analista.jpg";
      perfilDescription.innerText =
        "O Analista: Desvendando Complexidades e Criando Estratégias Sólidas";
      break;
    case "Comunicador":
      perfilImage.src = "../img/comunicador.jpg";
      perfilDescription.innerText =
        "O Comunicador: Construindo Conexões e Inspirando Mudanças";
      break;
    case "Planejador":
      perfilImage.src = "../img/planejador.jpg";
      perfilDescription.innerText =
        "O Planejador: Construindo Pontes entre o Presente e o Futuro";
      break;
  }

  document.getElementById("result").style.display = "block";
}
