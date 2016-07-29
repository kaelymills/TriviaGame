$("#start").click(function(){
	console.log("timer");
	countdown.timer();
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



// closes onload function }

/* May or may not need this simple timer: 
var windowTimeout = setTimeout(sixtySeconds, 1000 * 60)

function sixtySeconds() {
            console.log("Time's up!");
            alert("Time's Up!"); 
        }; */ 
            

    

/* var questions = [
{
    question: "What is UCF's current mascot?"
    answer1: "Warriors", "Pirates", "Lions", "Knights"
    correct: "3",
},

] */ 


