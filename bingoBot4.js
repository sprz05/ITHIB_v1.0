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
}

document.getElementById("2A").onclick = function(){
	document.getElementById("2A").style.backgroundColor  = 'green';
  document.getElementById("2A").style.color  = 'green';
  check2();
  check4();
}

document.getElementById("3A").onclick = function(){
	document.getElementById("3A").style.backgroundColor  = 'green';
  document.getElementById("3A").style.color  = 'green';
  check3();
  check4();
  check6();
}

document.getElementById("4A").onclick = function(){
	document.getElementById("4A").style.backgroundColor  = 'green';
  document.getElementById("4A").style.color  = 'green';
  check1();
  check5B();
}

document.getElementById("5A").onclick = function(){
	document.getElementById("5A").style.backgroundColor  = 'green';
  document.getElementById("5A").style.color  = 'green';
  check2();
  check5B();
  check6();
  check7();
}

document.getElementById("6A").onclick = function(){
	document.getElementById("6A").style.backgroundColor  = 'green';
  document.getElementById("6A").style.color  = 'green';
  check3();
  check5B();
}

document.getElementById("7A").onclick = function(){
	document.getElementById("7A").style.backgroundColor  = 'green';
  document.getElementById("7A").style.color  = 'green';
  check1();
  check5();
  check6();
}

document.getElementById("8A").onclick = function(){
	document.getElementById("8A").style.backgroundColor  = 'green';
  document.getElementById("8A").style.color  = 'green';
  check2();
  check5();
}

document.getElementById("9A").onclick = function(){
	document.getElementById("9A").style.backgroundColor  = 'green';
  document.getElementById("9A").style.color  = 'green';
  check3();
  check5();
  check7();
}


function check1(){
	if (document.getElementById("1A").style.backgroundColor  == 'green' && document.getElementById("4A").style.backgroundColor  == 'green' && document.getElementById("7A").style.backgroundColor  == 'green') {
    alert('bingo!');
  }
}


function check2(){
	if (document.getElementById("2A").style.backgroundColor  == 'green' && document.getElementById("5A").style.backgroundColor  == 'green' && document.getElementById("8A").style.backgroundColor  == 'green') {
    alert('bingo!');
  }
}

function check3(){
	if (document.getElementById("3A").style.backgroundColor  == 'green' && document.getElementById("6A").style.backgroundColor  == 'green' && document.getElementById("9A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
  }
}

function check4(){
	if (document.getElementById("1A").style.backgroundColor  == 'green' && document.getElementById("2A").style.backgroundColor  == 'green' && document.getElementById("3A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
  }
}

function check5B(){
	if (document.getElementById("4A").style.backgroundColor  == 'green' && document.getElementById("5A").style.backgroundColor  == 'green' && document.getElementById("6A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
  }
}

function check5(){
	if (document.getElementById("7A").style.backgroundColor  == 'green' && document.getElementById("8A").style.backgroundColor  == 'green' && document.getElementById("9A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
  }
}

function check6(){
	if (document.getElementById("3A").style.backgroundColor  == 'green' && document.getElementById("5A").style.backgroundColor  == 'green' && document.getElementById("7A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
  }
}


function check7(){
	if (document.getElementById("1A").style.backgroundColor  == 'green' && document.getElementById("5A").style.backgroundColor  == 'green' && document.getElementById("9A").style.backgroundColor  == 'green' ) {
    alert('bingo!');
  }
}
