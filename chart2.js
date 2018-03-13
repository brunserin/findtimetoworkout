var milesCompleted = 12;
var milesRemaining = 8;
var chart2;

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

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
      pieHole: 0.3,
      slices: {
            0: { color: '#ffcc00' },
            1: { color: '#007acc' }
      },
      legend: {position: 'right', textStyle: {color: 'black', fontSize: 16}}
  };

  chart2 = new google.visualization.PieChart(document.getElementById('donutchart2'));

  chart2.draw(data2, options2);
}

var form1 = document.getElementById('form1');
var bR = document.getElementById('bLogActivityR');
var bSC = document.getElementById('bSoloChallenge');
var bGC = document.getElementById('bGroupChallenge');
var submitR = document.getElementById('submit-miles');
var bSoloChallenge = document.getElementById('bSoloChallenge');
var bGroupChallenge = document.getElementById('bGroupChallenge');


bR.onclick = function() {
    form1.style.display = "block";
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
    if (event.target == form1) {
        form1.style.display = "none";
    }
    if(event.target == form3)
        form3.style.display = "none";
    if(event.target == form4)
        form4.style.display = "none";

}