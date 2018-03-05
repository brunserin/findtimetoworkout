function increment1(){
  console.log("test");
  return;
}

var nfItem = document.getElementById("newsFeedListItem1");




window.onclick = function(event) {
  console.log("Test");

    if (event.target == nfItem) {
        nfItem.innerHTML = " 14";
    }
}
