var totalThrowMins = 10000;
var throwMinsCompleted = 0;
var throwMinsRemaining = totalThrowMinss - throwMinsCompleted;
var chart3;

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data3 = google.visualization.arrayToDataTable([
    ['Type', 'Number'],
    ['Completed',     throwMinsCompleted],
    ['Remaining',     throwMinsRemaining]
  ]);

  var options3 = {
      title: "Throwing Minutes: 30 per day",
      titleTextStyle: { color: "black",
        fontSize: 20,
      },
      pieSliceTextStyle: {
            color: 'black',
          },
      pieHole: 0.3,
      slices: {
            0: { color: '#ffcc00'},
            1: { color: '#007acc' }
      },
      legend: {position: 'right', textStyle: {color: 'black', fontSize: 16}}
  };


  chart3 = new google.visualization.PieChart(document.getElementById('donutchart3'));


  chart1.draw(data3, options3);
}

var logForm = document.getElementById("logForm");
var submitS = document.getElementById('submit-log');
var bNewChallenge = document.getElementById("new-challenge-button");
var bLogChallenge = document.getElementById("log-challenge-button");

bNewChallenge.onclick= function() {
  alert("Already enrolled in max number of challenges");
}

bLogChallenge.onclick = function() {
  logForm.style.display= "block";
}


submitS.onclick = function() {

	// var numSteps = document.getElementById('num-steps').value;
  // if (numSteps == "")
  // {
  //   alert("Enter a value");
  //   return;
  // }
  // numSteps = parseInt(numSteps);
  // if (numSteps <= 0 || numSteps == NaN){
  //   alert("Invalid value");
  // }
	// if(numSteps > stepsRemaining){
	// 	numSteps = stepsRemaining;
	// }
  // stepsCompleted += numSteps;
  // stepsRemaining -= numSteps;
  // document.getElementById('num-steps').value = "";
  // document.getElementById('num-steps').placeholder="1000 (steps)"
  // form2.style.display = "none";
  // drawChart();
  // chart1.draw(data1, options1);
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == logForm) {
        logForm.style.display = "none";
    }

}
