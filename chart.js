var totalSteps = 10000;
var stepsCompleted = 4000;
var stepsRemaining = totalSteps - stepsCompleted;
var chart1;
var data1 ;
var options1;

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  console.log("draw chart called");
 data1 = google.visualization.arrayToDataTable([
    ["Type", "Number"],
    ["Completed",     stepsCompleted],
    ["Remaining",     stepsRemaining]
  ]);

 options1 = {
      title: "Steps: 10,000 per day",
      titleTextStyle: { color: "black",
        fontSize: 20,
      },
      backgroundColor: "#c0d5e3",
      pieSliceTextStyle: {
            color: "black",
          },
      pieHole: 0.3,
      slices: {
            0: { color: "#ffcc00"},
            1: { color: "#007acc" }
      },
      legend: {position: "right", textStyle: {color: "black", fontSize: 16}}
  };

  chart1 = new google.visualization.PieChart(document.getElementById("donutchart1"));
  chart1.draw(data1, options1);
  console.log("chart drawn");
}

var logForm = document.getElementById("logForm");
var challengeForm = document.getElementById("ChallengeForm")
var bSubmit = document.getElementById("submit-log");
var bNewChallenge = document.getElementById("new-challenge-button");
var bLogChallenge = document.getElementById("log-challenge-button");

bNewChallenge.onclick= function() {
  challengeForm.style.display="block";
}

bLogChallenge.onclick = function() {
  logForm.style.display= "block";
}


function logSteps() {
  console.log("submit pressed");
  var challengeActivity = document.getElementById("logSelect").value;
  if (challengeActivity == "Steps")
  {
    	var numSteps = document.getElementById("logAmount").value;
      if (numSteps == "")
      {
        alert("Enter a value");
        return;
      }
      numSteps = parseInt(numSteps);
      if (numSteps <= 0 || numSteps == NaN){
        alert("Invalid value");
      }
    	if(numSteps > stepsRemaining){
    		numSteps = stepsRemaining;
    	}
      stepsCompleted += numSteps;
      stepsRemaining -= numSteps;
      drawChart();
      //chart1.draw(data1, options1);
      document.getElementById("logAmount").value = "";
      document.getElementById("logAmount").placeholder="e.g. 10" ;
      logForm.style.display = "none";

  }
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == logForm) {
        logForm.style.display = "none";
    }
    if (event.target == challengeForm) {
        challengeForm.style.display = "none";
    }
    if(event.target == bSubmit)
    {
      logSteps();
    }
}

// function newRadioButtonSelection(){
//   if(document.getElementById("newSolo").checked) {
//     document.getElementById("forGroupOnly").style = "display: none";
//   }else if(document.getElementById("newGroup").checked) {
//     document.getElementById("forGroupOnly").style = "display: normal";
//   }
// }
//
// function logRadioButtonSelection(){
//   if(document.getElementById("logSolo").checked) {
//     document.getElementById("forGroupOnly").style = "display: none";
//   }else if(document.getElementById("logGroup").checked) {
//     document.getElementById("forGroupOnly").style = "display: normal";
//   }
// }
