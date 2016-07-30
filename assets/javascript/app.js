$("#start").click(function(){
  console.log("timer");
  countdown.timer();
  });
    

var countdown = {

timer: function(){
  var counter = 30;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("counter");
      span.innerHTML = counter;
    }
    
    if (counter === 0) {
        alert('Game over!');
        clearInterval(counter);
    }
  }, 1000);
  },
};



var allQuestions = [{
    question: "Who is UCF's President?",
    choices: ["Blake Bortles", "John C. Hitt", "Scott Frost"],
    correctAnswer: 1
  },

  {
    question: "What was UCF's first mascot?",
    choices: ["Citronaut", "Knightro", "Sir Wins-a-lot", "Puff the Magic Dragon"],
    correctAnswer: 0
  },

  {
    question: "What was UCF first called?",
    choices: ["University of Central Florida", "Orlando University", "Florida Technological University", "Florida Institute of Technology"],
    correctAnswer: 2
  },

  {
    question: "What is the name of the UCF tradition that was named Best Campus Tradition nationally?",
    choices: ["Spirit Splash", "Tailgate UCF", "Skit Knight", "Comedy Knight"],
    correctAnswer: 0
  },

  {
    question: "What is the name of UCF's first first-round NFL draft pick?",
    choices: ["JJ Worton", "Russel Wilson", "Blake Bortles", "Daunte Caulpepper"],
    correctAnswer: 3
  },

  {
    question: "What is myth of the Pegusus in the UCF Student Union?",
    choices: ["No one has ever stepped on it", "If you step on it, you won't graduate ", "If you step on it, you will become a pegasus ", "There is no myth"],
    correctAnswer: 1
  },

  {
    question: "Which of the following celebrities is a UCF alumni?",
    choices: ["Mila Kunis", "Daniel Tosh", "Jimmy Fallon", "All of the above"],
    correctAnswer: 1
  },

  {
    question: "What year was UCF founded?",
    choices: ["1950", "1988", "1979", "1963"],
    correctAnswer: 3
  },

  {
    question: "In UCF's first-eve bowl game win, what SEC team did they beat?",
    choices: ["Florida Gators", "Georgia Bulldogs", "LSU Tigers", "Mississippi State Bulldogs"],
    correctAnswer: 1
  },

  {
    question: "How many students were enrolled at UCF in the fall of 2015?",
    choices: ["30,000+", "40,000+", "50,000+", "60,000+"],
    correctAnswer: 3
  }
];
var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
      allQuestions[currentquestion].choices[i] + '</label></div><br/>';
  }
  $('#form').html(formHtml);
  $("#option0").prop('checked', true);
};

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  };
};

$(document).ready(function() {

  $(".jumbotron").hide();
  $('#start').click(function() {
    $(".jumbotron").fadeIn();
    $(this).hide();
  });

  $(function() {
    $("#progressbar").progressbar({
      max: allQuestions.length - 1,
      value: 0
    });
  });

  setupOptions();

  $("#next").click(function() {
    event.preventDefault();
    checkAns();
    currentquestion++;
    $(function() {
      $("#progressbar").progressbar({
        value: currentquestion
      });
    });
    if (currentquestion < allQuestions.length) {
      setupOptions();
      if (currentquestion == allQuestions.length - 1) {
        $('#next').html("Submit");
        $('#next').click(function() {
          $(".jumbotron").hide();
          $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
          $("#result").fadeIn(1500);
        });

      };

    };
  });
});