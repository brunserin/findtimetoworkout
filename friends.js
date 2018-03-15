var item1LikeCount = 13;
var item2LikeCount = 5;

var liked1 = false;
var liked2 = false;
var liked3 = false;

function addOne(){
	if(liked1 == false){
		liked1 = true;
		item1LikeCount++;
		document.getElementById("dCelebrate1").innerHTML = '<img class="celebrate-icon" src="colorCongrats.png"> ' + item1LikeCount;
	} else {
		liked1 = false;
		item1LikeCount--;
		document.getElementById("dCelebrate1").innerHTML = '<img class="celebrate-icon" src="greyCongrats.png"> ' + item1LikeCount;
	}
}

function addTwo(){
	if(liked2 == false){
		liked2 = true;
		item2LikeCount++;
		document.getElementById("dCelebrate2").innerHTML = '<img class="celebrate-icon" src="colorCongrats.png"> ' + item2LikeCount;
	} else {
		liked2 = false;
		item2LikeCount--;
		document.getElementById("dCelebrate2").innerHTML = '<img class="celebrate-icon" src="greyCongrats.png"> ' + item2LikeCount;
	}
}

function addThree(){
	if(liked3 == false){
		liked3 = true;
		document.getElementById("dCelebrate3").innerHTML = '<img class="celebrate-icon" src="colorCongrats.png"> ' + 1;
	} else {
		liked3 = false;
		document.getElementById("dCelebrate3").innerHTML = '<img class="celebrate-icon" src="greyCongrats.png">';
	}
}

function newStatus(){
	if(document.getElementById("exampleTextarea").value != ""){
		document.getElementById("status").innerHTML = "<i class='fas fa-comment'></i> <b>Jane Doe: </b>" + " \"" + document.getElementById("exampleTextarea").value + "\"";
		document.getElementById("newPost").style = "display: normal";
		document.getElementById("exampleTextarea").value = "";
		var myDiv = document.getElementById('newsFeed');
		myDiv.scrollTop = 0;
	}
}

function hideFriend(){
	document.getElementById("annaKendrickLI").style = "display: none";
	document.getElementById("all-friends").style = "height: 344px";
}