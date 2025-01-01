function submitQuiz() {
  var score = 0;
  var totalQuestions = 10;
  var correctAnswers = {
    q1: "B",
    q2: "False",
    q3: "C",
    q4: "C",
    q5: "False",
    q6: "A",
    q7: "C",
    q8: "True",
    q9: "A",
    q10: "C",
  };

  for (var i = 1; i <= totalQuestions; i++) {
    var answer = document.querySelector('input[name="q' + i + '"]:checked');
    if (answer && answer.value === correctAnswers["q" + i]) {
      score++;
    }
  }

  document.getElementById("score").innerText =
    "You got " + score + " out of 10 correct!";
  var feedback = "";

  if (score >= 8) {
    feedback =
      "Financial Pro! You understand the fundamentals of personal finance.";
  } else if (score >= 5) {
    feedback =
      "Finance Savvy. You’re on the right track, but there’s still room for improvement!";
  } else {
    feedback =
      "Financial Beginner. Consider reviewing some key topics to improve your financial literacy!";
  }

  document.getElementById("feedback").innerText = feedback;
  document.querySelector(".result").style.display = "block";
}
