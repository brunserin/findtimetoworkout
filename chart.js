var totalSteps = 10000;
var stepsCompleted = 4000;
var stepsRemaining = totalSteps - stepsCompleted;
var milesCompleted = 12;
var milesRemaining = 8;
var chart2;

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
      pieHole: 0.4,
      slices: {
            0: { color: '#ffcc00'},
            1: { color: '#564F6F' }
      },
      legend: {position: 'right', textStyle: {color: 'black', fontSize: 16}}
  };

  var data2 = google.visualization.arrayToDataTable([
    ['Type', 'Number'],
    ['Completed',     milesCompleted],
    ['Remaining',     milesRemaining]
  ]);

  var options2 = {
      title: "Running: 20 miles per week",
      titleTextStyle: { color: "black",
        fontSize: 20,
      },
      pieHole: 0.4,
      slices: {
            0: { color: '#ffcc00' },
            1: { color: '#564F6F' }
      },
      legend: {position: 'right', textStyle: {color: 'black', fontSize: 16}}
  };

  var chart1 = new google.visualization.PieChart(document.getElementById('donutchart1'));
  chart2 = new google.visualization.PieChart(document.getElementById('donutchart2'));


  chart1.draw(data1, options1);
  chart2.draw(data2, options2);
}

var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var bR = document.getElementById('bLogActivityR');
var bS = document.getElementById('bLogActivityS');
var bSC = document.getElementById('bSoloChallenge');
var bGC = document.getElementById('bGroupChallenge');
var submitR = document.getElementById('submit-miles');
var submitS = document.getElementById('submit-steps');

bR.onclick = function() {
    form1.style.display = "block";
}

bS.onclick = function() {
    form2.style.display = "block";
}
bSC.onclick = function() {
    form3.style.display = "block";
}
bGC.onclick = function() {
    form4.style.display = "block";
}

submitR.onclick = function() {

	var numMiles = document.getElementById('num-miles').value;
  if (numMiles == "")
  {
    alert("Enter a value");
    return;
  }
  numMiles = parseInt(numMiles);
  if (numMiles <= 0 || numMiles == NaN){
    alert("Invalid value");
  }
	if(numMiles > milesRemaining){
		numMiles = milesRemaining;
	}
  milesCompleted += numMiles;
  milesRemaining -= numMiles;
  document.getElementById('num-miles').value = "";
  document.getElementById('num-miles').placeholder="5 (miles)"
  form1.style.display = "none";
  drawChart();
  chart2.draw(data2, options2);
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



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == form1) {
        form1.style.display = "none";
    }
    if (event.target == form2) {
        form2.style.display = "none";
    }
    if(event.target == form3)
        form3.style.display = "none";
    if(event.target == form4)
        form4.style.display = "none";

}
