var logForm = document.getElementById("logForm");
var challengeForm = document.getElementById("ChallengeForm")
var bSubmit = document.getElementById("submit-log");
var bNewChallenge = document.getElementById("new-challenge-button");
var bLogChallenge = document.getElementById("log-challenge-button");
var sharing = 0;



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == logForm) {
        resetLogForm();
        logForm.style.display = "none";
    }
    if (event.target == challengeForm) {
        challengeForm.style.display = "none";
    }
    if(event.target == bSubmit)
    {
      logForm.style.display = "none";
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
        resetLogForm();
      }

}

function toggleVisibility(){
  if(sharing == 0) {
    document.getElementById("privacy").style = "display: normal";
    document.getElementById("logMsgWrapper").style = "display: normal";
    sharing = 1;
  } else {
    document.getElementById("privacy").style = "display: none";
    document.getElementById("logMsgWrapper").style = "display: none";
    sharing = 0;
  }
}

function resetLogForm(){
  document.getElementById('logAmount').value = "";
  document.getElementById('logAmount').placeholder="e.g. 10"
  document.getElementById('logShare').checked=0;
  toggleVisibility();
  document.getElementById('logAddMsg').value = "";
  logForm.style.display = "none";
  document.getElementById('logRadioAll').checked="checked";
}
