
$("#start").click(function(){
	console.log("timer");
	countdown.timer();
  Game.startGame();
	});
    
   
/* window.onload = function(){ */ 
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


var questions = [

  {
    question: "1. Who is the current UCF president?",
    //answers: "Blake Bortles", "John Hitt", "Scott Frost", "Daniel Tosh",
    correct: [1],
  },

]

var Game = {
  startGame: function(){
    for (var i = 0; i < questions.length; i++){

    var div = $("<q1>");
    div.html(questions[i].question);
    div.attr("question", i);
    $("#game").append(div);
    }

  },
};




/* May or may not need this simple timer: 
var windowTimeout = setTimeout(sixtySeconds, 1000 * 60)

function sixtySeconds() {
            console.log("Time's up!");
            alert("Time's Up!"); 
        }; */ 
            

    




