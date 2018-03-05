

var buttonGC = document.getElementById('GroupChallengeOnProfile');
buttonGC.onclick = function() {
    formProf.style.display = "block";
}

buttonGC.onclick = function() {
alert("Enrolled in max number of group challenges already");
formProf.style.display = "none";
return;
}
window.onclick = function(event) {
    if(event.target == formProf)
        formProf.style.display = "none";
}
