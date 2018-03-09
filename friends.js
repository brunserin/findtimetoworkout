var item1LikeCount = 13;
var item2LikeCount = 5;
var liked1 = false;
var liked2 = false;

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
