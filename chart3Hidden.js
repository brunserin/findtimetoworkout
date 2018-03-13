var totalThrowMins = 10000;
var throwMinsCompleted = 0;
var throwMinsRemaining = totalThrowMins - throwMinsCompleted;
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
      backgroundColor: "#c0d5e3",
      pieHole: 0.3,
      slices: {
            0: { color: '#ffcc00'},
            1: { color: '#007acc' }
      },
      legend: {position: 'right', textStyle: {color: 'black', fontSize: 16}}
  };


  chart3 = new google.visualization.PieChart(document.getElementById('donutchart3'));


  chart3.draw(data3, options3);
}

var logForm = document.getElementById("logForm");
var submitS = document.getElementById('submit-log');
var bNewChallenge = document.getElementById("new-challenge-button");
var bLogChallenge = document.getElementById("log-challenge-button");

// bNewChallenge.onclick= function() {
//   alert("Already enrolled in max number of challenges");
// }
//
// bLogChallenge.onclick = function() {
//   logForm.style.display= "block";
// }
