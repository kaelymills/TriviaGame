$("#start").click(function(){
  console.log("timer");
  countdown.timer();
  });
    

var countdown = {

timer: function(){
  var counter = 60;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("counter");
      span.innerHTML = counter;
    }
    // Display 'counter' wherever you want to display it.
    if (counter === 0) {
        alert('Game over!');
        clearInterval(counter);
    }
  }, 1000);
  },
};



$.fn.every = function(callback) {
  var numElements = this.length;
  return this.filter(callback).length == numElements;
};

$.fn.simpleQuiz = function(options) {
  if(!this.length) { return; };
  
  this.each(function() {
    var form = $(this);
    var submitButton = form.find(':submit');
    var questions = form.find('.question');
    var choices = form.find(':radio');

    var init = function() {
      choices.on('change', answerChanged);
      form.on('submit', answersSubmitted);

      answerChanged();
    };

    var answersSubmitted = function(event) {
      if(!hasPassed()) {
        event.preventDefault();
        alert('Please try again.');
      }
    };

    var score = function() {
      return form.find(':checked[data-correct]').length;
    };

    var hasPassed = function() {
      return score() == questions.length;
    };

    var hasCheckedElement = function() {
      return $(this).has(':checked').length;
    };

    var allQuestionsAnswered = function() {
      return questions.every(hasCheckedElement);
    };

    var answerChanged = function() {
      if(allQuestionsAnswered()) {
        submitButton.removeAttr('disabled');
      } else {
        submitButton.attr('disabled', 'disabled');
      }
    };

    init();
  });

};






/* May or may not need this simple timer: 
var windowTimeout = setTimeout(sixtySeconds, 1000 * 60)

function sixtySeconds() {
            console.log("Time's up!");
            alert("Time's Up!"); 
        }; */ 
            



