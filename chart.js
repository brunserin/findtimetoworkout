var totalSteps = 10000;
var stepsCompleted = 4000;
var stepsRemaining = totalSteps - stepsCompleted;


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
      pieHole: 0.5,
      slices: {
            0: { color: 'orange' },
            1: { color: 'red' }
      },
      legend: {position: 'right', textStyle: {color: 'black', fontSize: 16}}
  };

  var data2 = google.visualization.arrayToDataTable([
    ['Type', 'Number'],
    ['Completed',     11],
    ['Remaining',     2]
  ]);

  var options2 = {
      title: "Running: 20 miles per week",
      titleTextStyle: { color: "black",
        fontSize: 20,
      },
      pieHole: 0.5,
      slices: {
            0: { color: 'orange' },
            1: { color: 'red' }
      },
      legend: {position: 'right', textStyle: {color: 'black', fontSize: 16}}
  };

  var chart1 = new google.visualization.PieChart(document.getElementById('donutchart1'));
  var chart2 = new google.visualization.PieChart(document.getElementById('donutchart2'));


  chart1.draw(data1, options1);
  chart2.draw(data2, options2);
}