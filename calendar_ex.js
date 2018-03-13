
var clientId = "76857785670-9dd43a82619mta6ulvd5ssbfab88t6s0.apps.googleusercontent.com";
var apiKey = "AIzaSyDwr_JyFHv3Sv5CxGFgQJvb9iYLyLmGGMI";
var scopes = 'https://www.googleapis.com/auth/calendar';


var workoutForm = document.getElementById('workoutForm');
var bNewWorkout = document.getElementById('new-workout-button');
var bSubmit = document.getElementById('bSubmit');

//set default times to convey to users what content goes in what fields
document.getElementById("inputStartTime").defaultValue = "12:00";
document.getElementById("inputEndTime").defaultValue = "13:00";


/* Function invoked when the client javascript library is loaded */
function handleClientLoad() {
  console.log("Inside handleClientLoad ...");
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,100);
}

/* API function to check whether the app is authorized. */
function checkAuth() {
  console.log("Inside checkAuth ...");
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true},
                      handleAuthResult);
}

/* Invoked by different functions to handle the result of authentication checks.*/
var authData;
function handleAuthResult(authResult) {
    console.log("Inside handleAuthResult ...");
    authData = authResult;
    //var submitButton = document.getElementById('bSubmit');
    if (authResult && !authResult.error) {
          bSubmit.style.visibility = 'visible';
          //load the calendar client library
          gapi.client.load('calendar', 'v3', function(){
            console.log("Calendar library loaded.");
          });
    } else {
          handleAuthClick();
        }
}


/* Event handler that deals with clicking on the Authorize button.*/
function handleAuthClick(event) {
  console.log('entering auth click');
    gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false},
                        handleAuthResult);
    return false;
}

/* End of PART 1 - Authentication Process. */

/* Start of PART 2 - dealing with events from the user interface and
performing API calls. */

function getUserInput(){
    var form = document.forms[0];
    console.log(form);

  var date = form.querySelector("#inputDate").value;
  var startTime = form.querySelector("#inputStartTime").value;
  var endTime = form.querySelector("#inputEndTime").value;
  var eventDesc = form.querySelector("#eventDescription").value;
  var friend = form.querySelector("#addFriend").value;

  // check input values, they should not be empty
  if (date=="" || startTime=="" || endTime=="" || eventDesc==""){
    alert("All your input fields should have a meaningful value.");
    return
  } else {
    alert("Congratulations, you have successfully scheduled a workout.");
    return {'date': date, 'startTime': startTime, 'endTime': endTime,
               'eventTitle': eventDesc, 'attendees': friend}
  }
}


// Make an API call to create an event.  Give feedback to user.
function createEvent(eventData) {
  // First create resource that will be send to server.
    var resource = {
        "summary": eventData.eventTitle,
        "start": {
          "dateTime": new Date(eventData.date + " " + eventData.startTime).toISOString()
        },
        "end": {
          "dateTime": new Date(eventData.date + " " + eventData.endTime).toISOString()
        },
        "attendees": [
              {
                "id": "Anna Kendrick",
                "email": "27andersonra@gmail.com",
                "displayName": "Anna Kendrick"
              }
          ],
        };
    // create the request
    var request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': resource
    });

    // execute the request and do something with response
    request.execute(function(resp) {
      console.log(resp);
      alert("Your event was added to the calendar.");
    });
    location.reload();
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == workoutForm) {
        workoutForm.style.display = "none";
    }
}

bNewWorkout.onclick = function() {
    workoutForm.style.display = "block";
}

bSubmit.onclick = function() {
  workoutForm.style.display = "none";
  console.log("new workout submitted ");
  var userChoices = getUserInput();
  console.log(userChoices);
  if (userChoices)
    createEvent(userChoices);
}
