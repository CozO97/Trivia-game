var correctAnswer = 0;
var incorrectAnswer = 0;
var timer = 31;  
  
  function runTimer() {

      intervalId = setInterval(decrement, 1000);

    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      timer--;

      //  Show the number in the .timerDiv tag.
      $('#timer').html(timer + " Seconds Remaining!");


      // When the time runs out
      if (timer === 0) {
          stop();
          timerAnswer();
          $('.gameArea').hide();
    $('.results').show();
    
       }
    }

    //  The stop function
    function stop() {

      //  to the clearInterval function.
      clearInterval(intervalId);

    }


//Hide the Questions untill user clicks start game.           
$(".gameArea").hide();
$('.results').hide();

$("#startButton").on("click", function() {
    $(".gameArea").show();
    $(".startGame").hide();
    runTimer();

});

function timerAnswer() {
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

}


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

function clearForm(){
  $('input[type=radio]').prop('checked',false);
  
 }


//reset function

function resetGame() {
    correctAnswer = 0;
    incorrectAnswer = 0;
    timer = 31;
    $(".gameArea").hide();
    $('.results').hide();
    $('.startGame').show();
    stop();
    clearForm();
    
  }

    $("#restartButton").click(function() {
                resetGame();
            });


