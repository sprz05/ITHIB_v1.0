

function makeTable(){
document.getElementById("1A").innerHTML = document.getElementById('text1').value;
document.getElementById("2A").innerHTML = document.getElementById('text2').value;
document.getElementById("3A").innerHTML = document.getElementById('text3').value;
document.getElementById("4A").innerHTML = document.getElementById('text4').value;
document.getElementById("5A").innerHTML = document.getElementById('text5').value;
document.getElementById("6A").innerHTML = document.getElementById('text6').value;
document.getElementById("7A").innerHTML = document.getElementById('text7').value;
document.getElementById("8A").innerHTML = document.getElementById('text8').value;
document.getElementById("9A").innerHTML = document.getElementById('text9').value;
}


document.getElementById("1A").onclick = function(){
	document.getElementById("1A").style.backgroundColor  = 'green';
  document.getElementById("1A").style.color  = 'green';
  check1();
  check4();
  check7();
	ultimateCheck();
}

document.getElementById("2A").onclick = function(){
	document.getElementById("2A").style.backgroundColor  = 'green';
  document.getElementById("2A").style.color  = 'green';
  check2();
  check4();
	ultimateCheck();
}

document.getElementById("3A").onclick = function(){
	document.getElementById("3A").style.backgroundColor  = 'green';
  document.getElementById("3A").style.color  = 'green';
  check3();
  check4();
  check6();
	ultimateCheck();
}

document.getElementById("4A").onclick = function(){
	document.getElementById("4A").style.backgroundColor  = 'green';
  document.getElementById("4A").style.color  = 'green';
  check1();
  check5B();
	ultimateCheck();
}

document.getElementById("5A").onclick = function(){
	document.getElementById("5A").style.backgroundColor  = 'green';
  document.getElementById("5A").style.color  = 'green';
  check2();
  check5B();
  check6();
  check7();
	ultimateCheck();
}

document.getElementById("6A").onclick = function(){
	document.getElementById("6A").style.backgroundColor  = 'green';
  document.getElementById("6A").style.color  = 'green';
  check3();
  check5B();
	ultimateCheck();
}

document.getElementById("7A").onclick = function(){
	document.getElementById("7A").style.backgroundColor  = 'green';
  document.getElementById("7A").style.color  = 'green';
  check1();
  check5();
  check6();
	ultimateCheck();
}

document.getElementById("8A").onclick = function(){
	document.getElementById("8A").style.backgroundColor  = 'green';
  document.getElementById("8A").style.color  = 'green';
  check2();
  check5();
  ultimateCheck();
}

document.getElementById("9A").onclick = function(){
	document.getElementById("9A").style.backgroundColor  = 'green';
  document.getElementById("9A").style.color  = 'green';
  check3();
  check5();
  check7();
	ultimateCheck();
}


function check1(){
  var i = 0;
	if (i == 0 && document.getElementById("1A").style.backgroundColor  == 'green' && document.getElementById("4A").style.backgroundColor  == 'green' && document.getElementById("7A").style.backgroundColor  == 'green') {
    alert('bingo!');
    i++;
  }
}


function check2(){
  var i = 0;
	if (i == 0 && document.getElementById("2A").style.backgroundColor  == 'green' && document.getElementById("5A").style.backgroundColor  == 'green' && document.getElementById("8A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
    i++;
  } 
}

function check3(){
    var i = 0;
	if (i == 0 &&document.getElementById("3A").style.backgroundColor  == 'green' && document.getElementById("6A").style.backgroundColor  == 'green' && document.getElementById("9A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
    i++;
  } 
}

function check4(){
  var i = 0;
	if (i == 0 && document.getElementById("1A").style.backgroundColor  == 'green' && document.getElementById("2A").style.backgroundColor  == 'green' && document.getElementById("3A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
    i++;
  } 
}

function check5B(){
  var i = 0;
	if (i == 0 && document.getElementById("4A").style.backgroundColor  == 'green' && document.getElementById("5A").style.backgroundColor  == 'green' && document.getElementById("6A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
    i++;
  } 
}

function check5(){
    var i = 0;
	if (i == 0 && document.getElementById("7A").style.backgroundColor  == 'green' && document.getElementById("8A").style.backgroundColor  == 'green' && document.getElementById("9A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
    i++;
  } 
}

function check6(){
    var i = 0;
	if (i == 0 && document.getElementById("3A").style.backgroundColor  == 'green' && document.getElementById("5A").style.backgroundColor  == 'green' && document.getElementById("7A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
    i++;
  } 
}


function check7(){
  var i = 0;
	if (i == 0 && document.getElementById("1A").style.backgroundColor  == 'green' && document.getElementById("5A").style.backgroundColor  == 'green' && document.getElementById("9A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
    i++;
  } 
}

function ultimateCheck(){
    var i = 0;
	if (i == 0 && document.getElementById("1A").style.backgroundColor  == 'green' && document.getElementById("2A").style.backgroundColor  == 'green' && document.getElementById("3A").style.backgroundColor  == 'green' && document.getElementById("4A").style.backgroundColor  == 'green' && document.getElementById("5A").style.backgroundColor  == 'green' && document.getElementById("6A").style.backgroundColor  == 'green' && document.getElementById("7A").style.backgroundColor  == 'green' && document.getElementById("8A").style.backgroundColor  == 'green' && document.getElementById("9A").style.backgroundColor  == 'green' ) {
    document.getElementById("gameBtnDiv").style.display ="block"
		document.getElementById("BINGO").style.display ="none"
  } 
}



function showInputs(){
	var assignments = document.getElementById("inputA").value;
	if (assignments == 1){
		document.getElementById("text1").style.display = "block";
    showMakeBtn();
	} else if (assignments == 2){
		document.getElementById("text1").style.display = "block";
		document.getElementById("text2").style.display = "none";
    document.getElementById("text3").style.display = "none";
    document.getElementById("text4").style.display = "none";
    document.getElementById("text5").style.display = "block";
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "none";
    document.getElementById("text9").style.display = "none";
    showMakeBtn();
	} else if (assignments == 3){
		document.getElementById("text1").style.display = "block";
		document.getElementById("text2").style.display = "none";
		document.getElementById("text3").style.display = "block";
    document.getElementById("text4").style.display = "none";
    document.getElementById("text5").style.display = "none";
    document.getElementById("text6").style.display = "block";
    document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "none";
    document.getElementById("text9").style.display = "none";
    showMakeBtn();
	} else if (assignments == 4){
		document.getElementById("text1").style.display = "block";
		document.getElementById("text2").style.display = "none";
		document.getElementById("text3").style.display = "block";
		document.getElementById("text4").style.display = "none";
    document.getElementById("text5").style.display = "block";
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "block";
    document.getElementById("text8").style.display = "none";
    document.getElementById("text9").style.display = "none";
    showMakeBtn();
	} else if (assignments == 5){
		document.getElementById("text1").style.display = "block";
		document.getElementById("text2").style.display = "none";
		document.getElementById("text3").style.display = "block";
		document.getElementById("text4").style.display = "none";
		document.getElementById("text5").style.display = "block";
    document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "block";
    document.getElementById("text8").style.display = "none";
    document.getElementById("text9").style.display = "block";
    showMakeBtn();
	} else if (assignments == 6){
		document.getElementById("text1").style.display = "block";
		document.getElementById("text2").style.display = "block";
		document.getElementById("text3").style.display = "none";
		document.getElementById("text4").style.display = "block";
		document.getElementById("text5").style.display = "block";
		document.getElementById("text6").style.display = "none";
    document.getElementById("text7").style.display = "block";
    document.getElementById("text8").style.display = "block";
    document.getElementById("text9").style.display = "none";
    showMakeBtn();
	} else if (assignments == 7){
		document.getElementById("text1").style.display = "none";
		document.getElementById("text2").style.display = "block";
		document.getElementById("text3").style.display = "block";
		document.getElementById("text4").style.display = "block";
		document.getElementById("text5").style.display = "block";
		document.getElementById("text6").style.display = "block";
		document.getElementById("text7").style.display = "none";
    document.getElementById("text8").style.display = "block";
    document.getElementById("text9").style.display = "block";
    showMakeBtn();
	} else if (assignments == 8){
		document.getElementById("text1").style.display = "block";
		document.getElementById("text2").style.display = "block";
		document.getElementById("text3").style.display = "none";
		document.getElementById("text4").style.display = "block";
		document.getElementById("text5").style.display = "block";
		document.getElementById("text6").style.display = "block";
		document.getElementById("text7").style.display = "block";
		document.getElementById("text8").style.display = "block";
    document.getElementById("text9").style.display = "block";
    showMakeBtn();
	} else if (assignments == 9){
		document.getElementById("text1").style.display = "block";
		document.getElementById("text2").style.display = "block";
		document.getElementById("text3").style.display = "block";
		document.getElementById("text4").style.display = "block";
		document.getElementById("text5").style.display = "block";
		document.getElementById("text6").style.display = "block";
		document.getElementById("text7").style.display = "block";
		document.getElementById("text8").style.display = "block";
		document.getElementById("text9").style.display = "block";
    showMakeBtn();
	} else {
		alert ('Sorry you can only make a bingo card with 1-9 assignments')
	}
}

function showMakeBtn(){
  document.getElementById("makeCRD").style.display = "block";
  document.getElementById("hint").style.display = "block";
}

function showTable(){
  document.getElementById("bingo").style.display = "block";
  document.getElementById("form").style.display = "none";
}
