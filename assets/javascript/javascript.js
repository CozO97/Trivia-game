var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var timer = 30;

function runTimer() {

    intervalId = setInterval(decrement, 1000);

}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    timer--;

    //  Show the number in the .timerDiv tag.
    $('#timer').html(timer);


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
    $('#timer').html(timer);
    runTimer();

});

function timerAnswer() {
    if ($('input[name="answer"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer"]:checked').val() === "wrong") {
        incorrectAnswer++;
    } else if ($('input:radio[checked=false]')) {
        unanswered++;
    }
    if ($('input[name="answer2"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer2"]:checked').val() === "wrong") {
        incorrectAnswer++;
    } else if ($('input:radio[checked=false]')) {
        unanswered++;
    }
    if ($('input[name="answer3"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer3"]:checked').val() === "wrong") {
        incorrectAnswer++;
    } else if ($('input:radio[checked=false]')) {
        unanswered++;
    }
    if ($('input[name="answer4"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer4"]:checked').val() === "wrong") {
        incorrectAnswer++;
    } else if ($('input:radio[checked=false]')) {
        unanswered++;
    }
    if ($('input[name="answer5"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer5"]:checked').val() === "wrong") {
        incorrectAnswer++;
    } else if ($('input:radio[checked=false]')) {
        unanswered++;
    }

    //display results area and hide the game area
    $('.gameArea').hide();
    $('.results').show();
    $('.correctAnswers').text("Correct Answers : " + correctAnswer);
    $('.incorrectAnswers').text("Incorrect Answers : " + incorrectAnswer);
    $('.unanswered').text("Unanswered : " + unanswered);
}


// Check if the answers are correct or incorrect and add to counters
$(".submitButton").click(function() {
    if ($('input[name="answer"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer"]:checked').val() === "wrong") {
        incorrectAnswer++;
    } else if ($('input:radio[checked=false]')) {
        unanswered++;
    }
    if ($('input[name="answer2"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer2"]:checked').val() === "wrong") {
        incorrectAnswer++;
    } else if ($('input:radio[checked=false]')) {
        unanswered++;
    }
    if ($('input[name="answer3"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer3"]:checked').val() === "wrong") {
        incorrectAnswer++;
    } else if ($('input:radio[checked=false]')) {
        unanswered++;
    }
    if ($('input[name="answer4"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer4"]:checked').val() === "wrong") {
        incorrectAnswer++;
    } else if ($('input:radio[checked=false]')) {
        unanswered++;
    }
    if ($('input[name="answer5"]:checked').val() === "correct") {
        correctAnswer++;
    } else if ($('input[name="answer5"]:checked').val() === "wrong") {
        incorrectAnswer++;
    } else if ($('input:radio[checked=false]')) {
        unanswered++;
    }

    //display results area and hide the game area
    $('.gameArea').hide();
    $('.results').show();
    $('.correctAnswers').text("Correct Answers : " + correctAnswer);
    $('.incorrectAnswers').text("Incorrect Answers : " + incorrectAnswer);
    $('.unanswered').text("Unanswered : " + unanswered);
});

function clearForm() {
    $('input[type=radio]').prop('checked', false);

}


//reset function

function resetGame() {
    correctAnswer = 0;
    incorrectAnswer = 0;
    unanswered = 0;
    timer = 30;
    $(".gameArea").hide();
    $('.results').hide();
    $('.startGame').show();
    $('#timer').html(timer);
    stop();
    clearForm();

}

$("#restartButton").click(function() {
    resetGame();
});
