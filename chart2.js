var milesCompleted = 12;
var milesRemaining = 8;
var chart2;
var data2;
var options2;

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

  data2 = google.visualization.arrayToDataTable([
    ['Type', 'Number'],
    ['Completed',     milesCompleted],
    ['Remaining',     milesRemaining]
  ]);

  options2 = {
      title: "Running: 20 miles per week",
      titleTextStyle: { color: "black",
        fontSize: 20,
      },
      backgroundColor: "#c0d5e3",
      pieSliceTextStyle: {
            color: 'black',
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

var logForm = document.getElementById("logForm");
var challengeForm = document.getElementById("ChallengeForm")
var bSubmit = document.getElementById('submit-log');
var bNewChallenge = document.getElementById("new-challenge-button");
var bLogChallenge = document.getElementById("log-challenge-button");

bNewChallenge.onclick= function() {
  challengeForm.style.display="block";
}

bLogChallenge.onclick = function() {
  logForm.style.display= "block";
}


bSubmit.onclick = function() {

  var challengeActivity = document.getElementById('logSelect').value;
  if (challengeActivity == "Running")
  {
        var numMiles = document.getElementById("logAmount").value;
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
        document.getElementById('logAmount').value = "";
        document.getElementById('logAmount').placeholder="e.g. 10"
        logForm.style.display = "none";
        drawChart();
        chart2.draw(data2, options2);
}
}
