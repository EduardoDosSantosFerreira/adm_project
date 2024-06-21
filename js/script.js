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
      perfilImage.src = "img/executor.jpg";
      perfilDescription.innerText =
        "O Executor: Transformando Visão em Realidade\n\n" +
        "O perfil Executor é caracterizado por sua habilidade em transformar planos e ideias em ações concretas. " +
        "Pessoas com esse perfil são práticas, focadas e altamente eficientes na implementação de projetos. " +
        "Elas se destacam por sua capacidade de resolver problemas rapidamente e de gerenciar bem o tempo. " +
        "Os Executores são movidos por resultados e têm uma abordagem direta e orientada para a ação, " +
        "tornando-os essenciais em qualquer equipe que precise concretizar metas e objetivos.";
      break;
    case "Analista":
      perfilImage.src = "img/analista.jpg";
      perfilDescription.innerText =
        "O Analista: Desvendando Complexidades e Criando Estratégias Sólidas\n\n" +
        "O Analista é aquele que se aprofunda nos detalhes, buscando entender as nuances e complexidades de cada situação. " +
        "Com uma mente lógica e estruturada, os Analistas são excelentes em avaliar dados, identificar padrões e desenvolver " +
        "estratégias bem fundamentadas. Eles são meticulosos e precisos, garantindo que as decisões sejam baseadas em informações " +
        "concretas e análises rigorosas. Esse perfil é crucial para empresas que precisam de uma visão clara e detalhada para tomar decisões informadas.";
      break;
    case "Comunicador":
      perfilImage.src = "img/comunicador.jpg";
      perfilDescription.innerText =
        "O Comunicador: Construindo Conexões e Inspirando Mudanças\n\n" +
        "Os Comunicadores são os mestres em criar e manter relacionamentos. Eles têm uma habilidade natural para se conectar " +
        "com as pessoas e inspirar mudanças através de suas palavras e ações. Com excelente capacidade de comunicação, " +
        "eles são persuasivos e sabem como influenciar positivamente os outros. Os Comunicadores são essenciais em funções " +
        "que requerem colaboração, negociação e motivação de equipes.";
      break;
    case "Planejador":
      perfilImage.src = "img/planejador.jpg";
      perfilDescription.innerText =
        "O Planejador: Construindo Pontes entre o Presente e o Futuro\n\n" +
        "O Planejador é o estrategista de longo prazo, focado em construir um caminho claro do presente para o futuro. " +
        "Com uma visão abrangente e um talento para organização, os Planejadores são excelentes em definir objetivos " +
        "e criar planos detalhados para alcançá-los. Eles antecipam desafios e oportunidades, garantindo que os recursos " +
        "sejam alocados de maneira eficiente. Esse perfil é essencial para qualquer organização que busca crescimento e sustentabilidade a longo prazo.";
      break;
  }

  document.getElementById("result").style.display = "block";
}
