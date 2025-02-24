$(document).ready(function () {
  let currentQuestion = 0;
  let score = 0;
  let totalCorrect = 0;
  let attempts = 0;
  let firstAttemptCorrect = 0;
  let secondAttemptCorrect = 0;

  function loadQuestion() {
    const question = questions[currentQuestion];
    $(".quizQuestion").text(question.question);
    $(".quizOption").empty();
    attempts = 0;

    question.options.forEach((option, index) => {
      $(".quizOption").append(
        `<li class="option" data-op="${index + 1}">${option}</li>`
      );
    });

    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
    $(".progressBar").css("width", progressPercentage + "%");
  }

  $(document).on("click", ".option", function () {
    const selected = $(this).data("op");
    const correct = questions[currentQuestion].correct;

    if (attempts === 0) {
      if (selected === correct) {
        score += 10;
        totalCorrect++;
        firstAttemptCorrect++;
        $(this).addClass("correct");
        currentQuestion++;
        if (currentQuestion < questions.length) {
          loadQuestion();
        } else {
          showScore();
        }
      } else {
        $(this).addClass("wrong");
        attempts++;
      }
    } else {
      if (selected === correct) {
        score += 5;
        totalCorrect++;
        secondAttemptCorrect++;
        $(this).addClass("correct");
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        showScore();
      }
    }
  });

  function showScore() {
    $(".scorePoints").text(`Pontuação total: ${score}`);
    $(".scoreMessage").text(getScoreMessage(score));
    $(".totalCorrect").text(
      `Resumo: você respondeu ${
        questions.length
      } perguntas, acertou ${firstAttemptCorrect} na primeira tentativa, ${secondAttemptCorrect} na segunda tentativa e errou ${
        questions.length - totalCorrect
      }.`
    );
    $(".quiz").hide();
    $(".score").show();
  }

  function getScoreMessage(score) {
    if (score === 100) {
      return "Excelente!";
    } else if (score >= 75) {
      return "Ótimo!";
    } else if (score >= 50) {
      return "Bom!";
    } else if (score >= 25) {
      return "Regular!";
    } else {
      return "Péssimo!";
    }
  }

  $(".retryButton").on("click", function () {
    currentQuestion = 0;
    score = 0;
    totalCorrect = 0;
    firstAttemptCorrect = 0;
    secondAttemptCorrect = 0;
    $(".score").hide();
    $(".quiz").show();
    loadQuestion();
  });

  loadQuestion();
});
