var logForm = document.getElementById("logForm");
var challengeForm = document.getElementById("ChallengeForm")
var bSubmit = document.getElementById("submit-log");
var bNewChallenge = document.getElementById("new-challenge-button");
var bLogChallenge = document.getElementById("log-challenge-button");



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
      challengeForm.style.display = "none";
      logForm.style.display = "none";
    }
}


bNewChallenge.onclick= function() {
  alert("Already enrolled in max number of challenges");
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
        if (numMiles <= 0 || numMiles == NaN){
          alert("Invalid value");
        }
        // if (numMiles == 5){
          document.getElementById("graph").innerHTML = "<img src='progressAfter.png' class='graph-image'/>";
        // }
        document.getElementById('logAmount').value = "";
        document.getElementById('logAmount').placeholder="e.g. 10"
        logForm.style.display = "none";
      }

}
