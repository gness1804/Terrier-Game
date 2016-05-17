	confirm("Instructions: Fill in the three remaining blanks with the names of the three remaining recognized terrier breeds of Scottish ancestry.\
	Please keep in mind that each line can only take one correct answer (the hint is the first letter). Please include the word 'terrier' in \
	the name. Furthermore, you must hit each 'submit' button before clicking the 'Finalize' button. Also, the nearest exit may be\
	behind you. Finally, beware 'Tail Dock'!");
function VerifyC() {
	var answer = document.getElementById("cand1").value;
	var bettans = answer.toUpperCase();
	if (bettans === "CAIRN TERRIER") {
		document.getElementById("cand1").value = bettans;
		alert("Good job!");
	} else {
		document.getElementById("cand1").value = "";
		alert("Oops, try again! Remember to add 'terrier' to the end of the breed name.");
	} 
};
function VerifyS() {
	var answer2 = document.getElementById("cand2").value;
	var bettans2 = answer2.toUpperCase();
	if (bettans2 === "SKYE TERRIER") {
		document.getElementById("cand2").value = bettans2;
		alert("Good job!");
	} else{
		document.getElementById("cand2").value = "";
		alert("Oops, try again! Remember to add 'terrier' to the end of the breed name.");
	}
};
function VerifyD() {
	var answer3 = document.getElementById("cand3").value;
	var bettans3 = answer3.toUpperCase();
	if (bettans3 === "DANDIE DINMONT TERRIER") {
		document.getElementById("cand3").value = bettans3;
		alert("Good job!");
	} else {
		document.getElementById("cand3").value = "";
		alert("Oops, try again! Remember to add 'terrier' to the end of the breed name.");
	}
};
function Oops() {
	document.getElementById("cand1").value = "";
	document.getElementById("cand2").value = "";
	document.getElementById("cand3").value = "";
	document.getElementById("def1").value = "";
	document.getElementById("def2").value = "";
	alert("Don't dock dogs' tails!");
};
function Finale() {
	var a = document.getElementById("def1").value;
	var b = document.getElementById("def2").value;
	var c = document.getElementById("cand1").value;
	var d = document.getElementById("cand2").value;
	var e = document.getElementById("cand3").value;
	if (a === "Scottish Terrier" && b === "West Highland White Terrier" && c === "CAIRN TERRIER" && d === "SKYE TERRIER" && e === "DANDIE DINMONT TERRIER") {
		alert("Congratulations!! You win!");
		window.location="https://www.youtube.com/watch?v=SmHeP9Sve48";
	} else{
		alert("Try again!"); // SFII "You Lose" sound?//
	}
}






