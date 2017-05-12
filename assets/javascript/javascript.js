var correctAnswer = 0;
var incorrectAnswer = 0;


//Hide the Questions untill user clicks start game.           
$(".gameArea").hide();
$('.results').hide();

$("#startButton").on("click", function() {
    $(".gameArea").show();
    $(".startGame").hide();

});




// Check if the answers are correct or incorrect and add to counters
$(".submitButton").click(function() {
    if ($('input[name="answer"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer"]:checked').val() === "wrong") {
        incorrectAnswer++;
    }
    if ($('input[name="answer2"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer2"]:checked').val() === "wrong") {
        incorrectAnswer++;
    }
    if ($('input[name="answer3"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer3"]:checked').val() === "wrong") {
        incorrectAnswer++;
    }
    if ($('input[name="answer4"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer4"]:checked').val() === "wrong") {
        incorrectAnswer++;
    }
    if ($('input[name="answer5"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer5"]:checked').val() === "wrong") {
        incorrectAnswer++;
    }

    //display results area and hide the game area
    $('.gameArea').hide();
    $('.results').show();
    $('.correctAnswers').text("Correct Answers : " + correctAnswer);
    $('.incorrectAnswers').text("Incorrect Answers : " + incorrectAnswer);
});


//reset function

function resetGame() {
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    $(".gameArea").hide();
    $('.results').hide();
    $('.startGame').show();
  }

    $("#restartButton").click(function() {
                resetGame();
            });


