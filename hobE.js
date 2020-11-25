function checkE(){
  var numEAI = document.getElementById('numEAI');
    if (numEAI.value == 1){
        checkE1();
    } else if (numEAI.value == 2){
        checkE2();
    } else if (numEAI.value == 3){
        checkE3();
    } else if (numEAI.value == 4){
        checkE4();
    } else if (numEAI.value == 5){
        checkE5();
    } else if (numEAI.value == 6){
          checkE6();
    } else if (numEAI.value == 7){
          checkE7();
    } else if (numEAI.value == 8){
          checkE8();
    } else if (numEAI.value == 9){
          checkE9();
    } else if (numEAI.value == 10){
          checkE10();
    } else {
      addN1();
    }

  }

  function addN1(){
    n++;
    nCheck();         
}

function nCheck(){
      if (n == 3){
            alert ("you did it!");
      }
}


function checkE1(){
if (document.getElementById("toDo1").checked == "true") {
    n++;
    nCheck();
}         
}

function checkE2(){
if (document.getElementById("toDo1").checked && document.getElementById("toDo2").checked == "true") {
    n++;
    nCheck();
}         
}

function checkE3(){
if (document.getElementById("toDo1").checked && document.getElementById("toDo2").checked && document.getElementById("toDo3").checked == "true") {
    n++;
    nCheck();
}         
}

function checkE4(){
if (document.getElementById("toDo1").checked && document.getElementById("toDo2").checked && document.getElementById("toDo3").checked && document.getElementById("toDo4").checked == "true") {
    n++;
    nCheck();
}         
}

function checkE5(){
if (document.getElementById("toDo1").checked && document.getElementById("toDo2").checked && document.getElementById("toDo3").checked && document.getElementById("toDo4").checked && document.getElementById("toDo5").checked == "true") {
    n++;
    nCheck();
}         
}

function checkE6(){
if (document.getElementById("toDo1").checked 
      && document.getElementById("toDo2").checked 
      && document.getElementById("toDo3").checked 
      && document.getElementById("toDo4").checked 
      && document.getElementById("toDo5").checked 
      && document.getElementById("toDo6").checked == "true") {
    n++;
    nCheck();
}         
}

function checkE7(){
if (document.getElementById("toDo1").checked 
      && document.getElementById("toDo2").checked 
      && document.getElementById("toDo3").checked 
      && document.getElementById("toDo4").checked 
      && document.getElementById("toDo5").checked 
      && document.getElementById("toDo6").checked
      && document.getElementById("toDo7").checked == "true") {
    n++;
    nCheck();
}         
}

function checkE8(){
if (document.getElementById("toDo1").checked 
      && document.getElementById("toDo2").checked 
      && document.getElementById("toDo3").checked 
      && document.getElementById("toDo4").checked 
      && document.getElementById("toDo5").checked 
      && document.getElementById("toDo6").checked
      && document.getElementById("toDo7").checked
      && document.getElementById("toDo8").checked == "true") {
    n++;
    nCheck();
}

function checkE9(){
if (document.getElementById("toDo1").checked 
      && document.getElementById("toDo2").checked 
      && document.getElementById("toDo3").checked 
      && document.getElementById("toDo4").checked 
      && document.getElementById("toDo5").checked 
      && document.getElementById("toDo6").checked
      && document.getElementById("toDo7").checked
      && document.getElementById("toDo8").checked
      && document.getElementById("toDo9").checked == "true") {
    n++;
    nCheck();
}             
}

function checkE10(){
if (document.getElementById("toDo1").checked 
      && document.getElementById("toDo2").checked 
      && document.getElementById("toDo3").checked 
      && document.getElementById("toDo4").checked 
      && document.getElementById("toDo5").checked 
      && document.getElementById("toDo6").checked
      && document.getElementById("toDo7").checked
      && document.getElementById("toDo8").checked
      && document.getElementById("toDo9").checked
      && document.getElementById("toDo10").checked == "true") {
    n++;
    nCheck();
}             
}
