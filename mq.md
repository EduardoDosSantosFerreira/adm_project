<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz de Perfil Profissional</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <div class="container">
    <h1 class="mt-5">Quiz de Perfil Profissional</h1>
    <button id="startQuizBtn" class="btn btn-primary mt-3">Iniciar Quiz</button>
    <form id="quizForm" style="display: none;">

      <!-- Pergunta 1 -->
      <div class="form-group">
        <label>Pergunta 1: Como você aborda tarefas desafiadoras no ambiente de trabalho?</label><br>
        <input type="radio" name="q1" value="Executor"> Agindo imediatamente para alcançar resultados (Executor)
        <input type="radio" name="q1" value="Analista"> Analisando detalhadamente antes de tomar medidas (Analista)
        <input type="radio" name="q1" value="Comunicador"> Envolvendo a equipe desde o início (Comunicador)
        <input type="radio" name="q1" value="Planejador"> Desenvolvendo um plano estratégico antes de começar
        (Planejador) 

      </div>

      <!-- Pergunta 2 -->
      <div class="form-group">
        <label>Pergunta 2: Como você lida com prazos apertados no trabalho?</label><br>
        <input type="radio" name="q2" value="Executor"> Trabalhando rapidamente para cumprir prazos (Executor)
        <input type="radio" name="q2" value="Analista"> Planejando cuidadosamente para evitar atrasos (Analista)
        <input type="radio" name="q2" value="Comunicador"> Mantendo a equipe informada para garantir o cumprimento dos
        prazos (Comunicador)
        <input type="radio" name="q2" value="Planejador"> Desenvolvendo um cronograma detalhado para gerenciar prazos
        (Planejador) 

      </div>

      <!-- Pergunta 3 -->
      <div class="form-group">
        <label>Pergunta 3: Em reuniões, como você se apresenta?</label><br>
        <input type="radio" name="q3" value="Executor"> Focando em ações e resultados a serem tomados (Executor)
        <input type="radio" name="q3" value="Analista"> Apresentando informações detalhadas e análises (Analista)
        <input type="radio" name="q3" value="Comunicador"> Sendo expressivo(a) e envolvente (Comunicador)
        <input type="radio" name="q3" value="Planejador"> Seguindo uma estrutura organizada para transmitir informações
        (Planejador) 

      </div>

      <!-- Pergunta 4 -->
      <div class="form-group">
        <label>Pergunta 4: Como você aborda a resolução de conflitos no ambiente de trabalho?</label><br>
        <input type="radio" name="q4" value="Executor"> Tomando medidas rápidas para resolver o conflito (Executor)
        <input type="radio" name="q4" value="Analista"> Analisando as causas e buscando soluções ponderadas
        (Analista)
        <input type="radio" name="q4" value="Comunicador"> Promovendo o diálogo aberto entre as partes (Comunicador)
        <input type="radio" name="q4" value="Planejador"> Desenvolvendo um plano estratégico para resolver a situação
        (Planejador) 

      </div>

      <!-- Pergunta 5 -->
      <div class="form-group">
        <label>Pergunta 5: Qual é a sua abordagem ao lidar com erros no trabalho?</label><br>
        <input type="radio" name="q5" value="Executor"> Aprendendo com os erros e tomando medidas corretivas imediatas
        (Executor)
        <input type="radio" name="q5" value="Analista"> Analisando as causas e implementando melhorias preventivas
        (Analista)
        <input type="radio" name="q5" value="Comunicador"> Comunicando abertamente sobre os erros e buscando soluções
        colaborativas (Comunicador)
        <input type="radio" name="q5" value="Planejador"> Incorporando ajustes ao meu plano para evitar erros futuros
        (Planejador) 

      </div>

      <!-- Pergunta 6 -->
      <div class="form-group">
        <label>Pergunta 6: Como você se comunica com colegas de trabalho?</label><br>
        <input type="radio" name="q6" value="Executor"> De maneira direta e objetiva (Executor)
        <input type="radio" name="q6" value="Analista"> Com detalhes e informações claras (Analista)
        <input type="radio" name="q6" value="Comunicador"> De maneira aberta e expressiva (Comunicador)
        <input type="radio" name="q6" value="Planejador"> Seguindo uma estrutura organizada (Planejador) 

      </div>

      <!-- Pergunta 7 -->
      <div class="form-group">
        <label>Pergunta 7: Como você se sente em relação a seguir uma rotina diária no trabalho?</label><br>
        <input type="radio" name="q7" value="Executor"> Preferindo flexibilidade e ação (Executor)
        <input type="radio" name="q7" value="Analista"> Valorizando uma rotina estruturada e organizada (Analista)
        <input type="radio" name="q7" value="Comunicador"> Apreciando uma mistura de tarefas variadas (Comunicador)
        <input type="radio" name="q7" value="Planejador"> Seguindo uma rotina como parte do meu plano de sucesso
        (Planejador) 

      </div>

      <!-- Pergunta 8 -->
      <div class="form-group">
        <label>Pergunta 8: Em situações de liderança, como você motiva sua equipe?</label><br>
        <input type="radio" name="q8" value="Executor"> Estabelecendo metas desafiadoras para inspirar a ação
        (Executor)
        <input type="radio" name="q8" value="Analista"> Reconhecendo e valorizando as contribuições individuais
        (Analista)
        <input type="radio" name="q8" value="Comunicador"> Promovendo um ambiente positivo e expressivo
        (Comunicador)
        <input type="radio" name="q8" value="Planejador"> Desenvolvendo planos de carreira para incentivar o progresso
        (Planejador) 

      </div>

      <!-- Pergunta 9 -->
      <div class="form-group">
        <label>Pergunta 9: Como você reage a feedback construtivo no trabalho?</label><br>
        <input type="radio" name="q9" value="Executor"> Focando em implementar mudanças imediatas (Executor)
        <input type="radio" name="q9" value="Analista"> Analisando as sugestões e ajustando meu desempenho
        (Analista)
        <input type="radio" name="q9" value="Comunicador"> Valorizando a comunicação aberta e buscando melhorias
        contínuas (Comunicador)
        <input type="radio" name="q9" value="Planejador"> Incorporando feedbacks em meu plano de desenvolvimento
        (Planejador) 

      </div>

      <!-- Pergunta 10 -->
      <div class="form-group">
        <label>Pergunta 10: Em situações de estresse, como você mantém a calma no trabalho?</label><br>
        <input type="radio" name="q10" value="Executor"> Focando na resolução rápida de problemas (Executor)
        <input type="radio" name="q10" value="Analista"> Avaliando a situação e priorizando tarefas de maneira eficiente
        (Analista)
        <input type="radio" name="q10" value="Comunicador"> Comunicando-se abertamente sobre as demandas e buscando
        apoio (Comunicador)
        <input type="radio" name="q10" value="Planejador"> Seguindo meu plano estratégico mesmo sob pressão
        (Planejador) 

      </div>

      <!-- Pergunta 11 -->
      <div class="form-group">
        <label>Pergunta 11: Ao delegar tarefas, como você aborda essa responsabilidade?</label><br>
        <input type="radio" name="q11" value="Executor"> Atribuindo as tarefas diretamente, visando eficiência
        (Executor)
        <input type="radio" name="q11" value="Analista"> Analisando as habilidades individuais antes de delegar
        (Analista)
        <input type="radio" name="q11" value="Comunicador"> Compartilhando responsabilidades de forma colaborativa
        (Comunicador)
        <input type="radio" name="q11" value="Planejador"> Desenvolvendo um plano claro antes de distribuir as tarefas
        (Planejador) 

      </div>

      <!-- Pergunta 12 -->
      <div class="form-group">
        <label>Pergunta 12: Como você se prepara para projetos no ambiente profissional?</label><br>
        <input type="radio" name="q12" value="Executor"> Começando imediatamente, focando em ações rápidas
        (Executor)
        <input type="radio" name="q12" value="Analista"> Realizando uma análise detalhada do projeto antes de começar
        (Analista)
        <input type="radio" name="q12" value="Comunicador"> Envolvendo a equipe desde o início do processo
        (Comunicador)
        <input type="radio" name="q12" value="Planejador"> Desenvolvendo um plano estratégico antes de iniciar o projeto
        (Planejador) 

      </div>

      <!-- Pergunta 13 -->
      <div class="form-group">
        <label>Pergunta 13: Como você lida com mudanças inesperadas no trabalho?</label><br>
        <input type="radio" name="q13" value="Executor"> Adaptando-me rapidamente, buscando soluções práticas
        (Executor)
        <input type="radio" name="q13" value="Analista"> Avaliando as implicações antes de tomar medidas (Analista)
        <input type="radio" name="q13" value="Comunicador"> Mantendo uma comunicação aberta para alinhar expectativas
        (Comunicador)
        <input type="radio" name="q13" value="Planejador"> Ajustando meu plano original conforme necessário
        (Planejador) 

      </div>

      <!-- Pergunta 14 -->
      <div class="form-group">
        <label>Pergunta 14: Ao lidar com desafios no ambiente profissional, qual é sua primeira abordagem?</label><br>
        <input type="radio" name="q14" value="Executor"> Buscando soluções rápidas e diretas (Executor)
        <input type="radio" name="q14" value="Analista"> Analisando as causas antes de agir (Analista)
        <input type="radio" name="q14" value="Comunicador"> Envolvendo a equipe para encontrar soluções colaborativas
        (Comunicador)
        <input type="radio" name="q14" value="Planejador"> Desenvolvendo um plano estratégico para superar o desafio
        (Planejador) 

      </div>

      <!-- Pergunta 15 -->
      <div class="form-group">
        <label>Pergunta 15: Como você se comporta em situações sociais no ambiente de trabalho?</label><br>
        <input type="radio" name="q15" value="Executor"> Sendo direto(a) e focado(a) nos resultados (Executor)
        <input type="radio" name="q15" value="Analista"> Sendo analítico(a) e observador(a) (Analista)
        <input type="radio" name="q15" value="Comunicador"> Sendo expressivo(a) e envolvente (Comunicador)
        <input type="radio" name="q15" value="Planejador"> Mantendo-se organizado(a) e planejado(a) (Planejador)
      
      </div>

      <!-- Pergunta 16 -->
      <div class="form-group">
        <label>Pergunta 16: Como você reage a imprevistos no planejamento de projetos?</label><br>
        <input type="radio" name="q16" value="Executor"> Adaptando-se rapidamente e buscando soluções práticas
        (Executor)
        <input type="radio" name="q16" value="Analista"> Analisando as implicações e ajustando o plano conforme
        necessário (Analista)
        <input type="radio" name="q16" value="Comunicador"> Comunicando as mudanças de maneira aberta e expressiva
        (Comunicador)
        <input type="radio" name="q16" value="Planejador"> Recalibrando o plano estratégico para incorporar as mudanças
        (Planejador) 

      </div>

      <!-- Pergunta 17 -->
      <div class="form-group">
        <label>Pergunta 17: Qual é sua abordagem ao lidar com a delegação de tarefas na equipe?</label><br>
        <input type="radio" name="q17" value="Executor"> Delegando tarefas de forma rápida e eficiente (Executor)
        <input type="radio" name="q17" value="Analista"> Avaliando cuidadosamente as habilidades antes de atribuir
        responsabilidades (Analista)
        <input type="radio" name="q17" value="Comunicador"> Envolvendo a equipe na decisão e atribuição de tarefas
        (Comunicador)
        <input type="radio" name="q17" value="Planejador"> Desenvolvendo um plano estruturado antes de delegar
        (Planejador) 

      </div>

      <!-- Pergunta 18 -->
      <div class="form-group">
        <label>Pergunta 18: Em situações de liderança, você é mais propenso a ser assertivo(a) ou
          colaborativo(a)?</label><br>
        <input type="radio" name="q18" value="Executor"> Tendo uma abordagem mais assertiva para liderar (Executor)
        <input type="radio" name="q18" value="Analista"> Buscando uma liderança mais analítica e ponderada
        (Analista)
        <input type="radio" name="q18" value="Comunicador"> Promovendo uma liderança expressiva e colaborativa
        (Comunicador)
        <input type="radio" name="q18" value="Planejador"> Adotando uma liderança mais planejada e estratégica
        (Planejador) 

      </div>

      <!-- Pergunta 19 -->
      <div class="form-group">
        <label>Pergunta 19: Qual é a sua abordagem ao enfrentar desafios no desenvolvimento profissional?</label><br>
        <input type="radio" name="q19" value="Executor"> Buscando desafios imediatos para aprender com a prática
        (Executor)
        <input type="radio" name="q19" value="Analista"> Analisando as áreas de desenvolvimento e implementando
        melhorias (Analista)
        <input type="radio" name="q19" value="Comunicador"> Buscando oportunidades de desenvolvimento com interações
        sociais (Comunicador)
        <input type="radio" name="q19" value="Planejador"> Desenvolvendo um plano de carreira estruturado e progressivo
        (Planejador) 

      </div>

      <!-- Pergunta 20 -->
      <div class="form-group">
        <label>Pergunta 20: Como você lida com conflitos entre membros da equipe?</label><br>
        <input type="radio" name="q20" value="Executor"> Agindo rapidamente para resolver o conflito e restaurar a
        harmonia (Executor)
        <input type="radio" name="q20" value="Analista"> Analisando as causas do conflito e buscando soluções ponderadas
        (Analista)
        <input type="radio" name="q20" value="Comunicador"> Promovendo o diálogo aberto entre as partes e incentivando a
        colaboração (Comunicador)
        <input type="radio" name="q20" value="Planejador"> Desenvolvendo um plano estratégico para resolver a situação
        de forma duradoura (Planejador) 

      </div>

      <!-- Pergunta 21 -->
      <div class="form-group">
        <label>Pergunta 21: Qual é a sua abordagem ao lidar com situações de crise no ambiente de trabalho?</label><br>
        <input type="radio" name="q21" value="Executor"> Tomando medidas imediatas para lidar com a crise (Executor)
        <input type="radio" name="q21" value="Analista"> Analisando cuidadosamente a situação e implementando
        estratégias para superar a crise (Analista)
        <input type="radio" name="q21" value="Comunicador"> Comunicando-se abertamente com a equipe e buscando soluções
        colaborativas (Comunicador)
        <input type="radio" name="q21" value="Planejador"> Desenvolvendo um plano detalhado para lidar com a crise e
        minimizar impactos (Planejador) 

      </div>

      <!-- Pergunta 22 -->
      <div class="form-group">
        <label>Pergunta 22: Como você mantém a motivação da equipe durante projetos desafiadores?</label><br>
        <input type="radio" name="q22" value="Executor"> Estabelecendo metas claras e desafiadoras para inspirar a ação
        (Executor)
        <input type="radio" name="q22" value="Analista"> Reconhecendo e valorizando as contribuições individuais para
        manter o moral (Analista)
        <input type="radio" name="q22" value="Comunicador"> Promovendo um ambiente positivo e expressivo para sustentar
        a motivação (Comunicador)
        <input type="radio" name="q22" value="Planejador"> Desenvolvendo planos de incentivo e reconhecimento para
        manter a equipe engajada (Planejador)

      </div>

      <!-- Pergunta 23 -->
      <div class="form-group">
        <label>Pergunta 23: Ao lidar com resistência a mudanças, como você aborda a situação?</label><br>
        <input type="radio" name="q23" value="Executor"> Comunicando a necessidade da mudança e implementando-a
        rapidamente (Executor)
        <input type="radio" name="q23" value="Analista"> Analisando as preocupações e explicando as razões por trás da
        mudança (Analista)
        <input type="radio" name="q23" value="Comunicador"> Envolvendo a equipe no processo e destacando os benefícios
        da mudança (Comunicador)
        <input type="radio" name="q23" value="Planejador"> Desenvolvendo um plano estratégico para implementar a mudança
        de maneira eficaz (Planejador) 

      </div>

      <!-- Pergunta 24 -->
      <div class="form-group">
        <label>Pergunta 24: Como você promove a inovação no ambiente de trabalho?</label><br>
        <input type="radio" name="q24" value="Executor"> Buscando soluções práticas e rápidas para desafios
        (Executor)
        <input type="radio" name="q24" value="Analista"> Analisando as tendências e implementando mudanças baseadas em
        dados (Analista)
        <input type="radio" name="q24" value="Comunicador"> Estimulando a criatividade e o pensamento inovador através
        da comunicação aberta (Comunicador)
        <input type="radio" name="q24" value="Planejador"> Desenvolvendo planos estratégicos que incentivam a inovação
        (Planejador) 

      </div>

      <!-- Pergunta 25 -->
      <div class="form-group">
        <label>Pergunta 25: Ao enfrentar uma grande decisão no trabalho, qual é sua abordagem inicial?</label><br>
        <input type="radio" name="q25" value="Executor"> Tomando decisões rápidas e diretas para manter o fluxo de
        trabalho (Executor)
        <input type="radio" name="q25" value="Analista"> Analisando todas as informações relevantes antes de tomar uma
        decisão (Analista)
        <input type="radio" name="q25" value="Comunicador"> Consultando a equipe e buscando perspectivas diversas antes
        de decidir (Comunicador)
        <input type="radio" name="q25" value="Planejador"> Desenvolvendo um plano estratégico e considerando as
        implicações a longo prazo (Planejador)
      </div>


      <button type="submit" id="submitBtn" class="btn btn-primary" style="display: none;">Enviar</button>
    </form>
    <div id="result" style="display: none;">
      <h2 class="mt-5">Seu perfil é: <span id="perfil"></span></h2>
      <canvas id="chart" width="400" height="400"></canvas>
    </div>
  </div>


  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
  <script src="js/script.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.0/chart.min.js"></script>
  <script src="js/script.js"></script>
  <script>
    document.getElementById('startQuizBtn').addEventListener('click', function () {
      this.style.display = 'none';
      document.getElementById('quizForm').style.display = 'block';
      showQuestion(1); // Mostra a primeira pergunta
    });

    var questionNumber = 1;
    var totalQuestions = document.querySelectorAll('.form-group').length;

    document.querySelectorAll('.next-question-btn').forEach(button => {
      button.addEventListener('click', function () {
        showQuestion(++questionNumber);
        if (questionNumber === totalQuestions) {
          document.getElementById('submitBtn').style.display = 'block';
        }
      });
    });

    function showQuestion(questionNumber) {
      var questions = document.getElementsByClassName('form-group');
      for (var i = 0; i < questions.length; i++) {
        if (i === questionNumber - 1) {
          questions[i].style.display = 'block';
        } else {
          questions[i].style.display = 'none';
        }
      }
    }
  </script>
</body>

</html>