var totalSteps = 10000;
var stepsCompleted = 4000;
var stepsRemaining = totalSteps - stepsCompleted;
var chart1;

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data1 = google.visualization.arrayToDataTable([
    ['Type', 'Number'],
    ['Completed',     stepsCompleted],
    ['Remaining',     stepsRemaining]
  ]);

  var options1 = {
      title: "Steps: 10,000 per day",
      titleTextStyle: { color: "black",
        fontSize: 20,
      },
      pieHole: 0.3,
      slices: {
            0: { color: '#ffcc00'},
            1: { color: '#007acc' }
      },
      legend: {position: 'right', textStyle: {color: 'black', fontSize: 16}}
  };


  chart1 = new google.visualization.PieChart(document.getElementById('donutchart1'));


  chart1.draw(data1, options1);
}

var form2 = document.getElementById('form2');
var bS = document.getElementById('bLogActivityS');
var bSC = document.getElementById('bSoloChallenge');
var bGC = document.getElementById('bGroupChallenge');
var submitS = document.getElementById('submit-steps');
var bSoloChallenge = document.getElementById('bSoloChallenge');
var bGroupChallenge = document.getElementById('bGroupChallenge');


bS.onclick = function() {
    form2.style.display = "block";
}
bSC.onclick = function() {
    form3.style.display = "block";
}
bGC.onclick = function() {
    form4.style.display = "block";
}


submitS.onclick = function() {

	var numSteps = document.getElementById('num-steps').value;
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
  document.getElementById('num-steps').value = "";
  document.getElementById('num-steps').placeholder="1000 (steps)"
  form2.style.display = "none";
  drawChart();
  chart1.draw(data1, options1);
}

bSoloChallenge.onclick = function() {
alert("Enrolled in max number of solo challenges already");
form3.style.display = "none";
return;
}

bGroupChallenge.onclick = function() {
alert("Enrolled in max number of group challenges already");
form4.style.display = "none";
return;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == form2) {
        form2.style.display = "none";
    }
    if(event.target == form3)
        form3.style.display = "none";
    if(event.target == form4)
        form4.style.display = "none";

}
