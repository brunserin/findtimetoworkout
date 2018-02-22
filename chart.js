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
      pieHole: 0.4,
      slices: {
            0: { color: '#FFC107'},
            1: { color: '#564F6F' }
      },
      legend: {position: 'right', textStyle: {color: 'black', fontSize: 16}}
  };

  var data2 = google.visualization.arrayToDataTable([
    ['Type', 'Number'],
    ['Completed',     18],
    ['Remaining',     2]
  ]);

  var options2 = {
      title: "Running: 20 miles per week",
      titleTextStyle: { color: "black",
        fontSize: 20,
      },
      pieHole: 0.4,
      slices: {
            0: { color: '#FFC107' },
            1: { color: '#564F6F' }
      },
      legend: {position: 'right', textStyle: {color: 'black', fontSize: 16}}
  };

  var chart1 = new google.visualization.PieChart(document.getElementById('donutchart1'));
  var chart2 = new google.visualization.PieChart(document.getElementById('donutchart2'));


  chart1.draw(data1, options1);
  chart2.draw(data2, options2);
}

var form1 = document.getElementById('form1');
var form2 = document.getElementById('form2');
var bR = document.getElementById('bLogActivityR');
var bS = document.getElementById('bLogActivityS');
var bSC = document.getElementById('bSoloChallenge');
var bGC = document.getElementById('bGroupChallenge');

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
