



window.onload = function (){
	var start = document.getElementById("start");
	var giveup = document.getElementById("giveup");
	var save = document.getElementById("save");
	start.onclick = showForm;
	
}

function showForm (){
	var form = document.getElementById("record-now");
	var start = document.getElementById("start");
	form.style.display  = "block";
	start.style.display  = "none";
}

