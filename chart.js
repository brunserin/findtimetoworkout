var totalSteps = 10000;
var stepsCompleted = 4000;
var stepsRemaining = totalSteps - stepsCompleted;


google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Type', 'Number'],
    ['Completed',     stepsCompleted],
    ['Remaining',     stepsRemaining]
  ]);

  var options = {
      title: "Steps",
      titleTextStyle: { color: "black",
        fontSize: 40,
      },
      pieHole: 0.5,
      slices: {
            0: { color: 'orange' },
            1: { color: 'red' }
      },
      legend: {position: 'right', textStyle: {color: 'black', fontSize: 16}}
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}