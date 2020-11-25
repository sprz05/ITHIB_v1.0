 function checkH(){
  var numHAI = document.getElementById('numHAI');
   if (numHAI.value == 1){
         checkH1();
    } else if (numHAI.value == 2){
        checkH2();
    } else if (numHAI.value == 3){
        checkH3();
    } else if (numHAI.value == 4){
        checkH4();
    }  else if (numHAI.value == 5){
       checkH5();
    } else if (numHAI.value == 6){
        checkH6();
    } else if (numHAI.value == 7){
        checkH7();
    } else if (numHAI.value == 8){
        checkH8();
    } else if (numHAI.value == 9){
        checkH9();
    } else if (numHAI.value == 10){
        checkH10();
    }else{
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


function checkH1(){
if (document.getElementById("toDo21").checked  == "true") {
    n++;
    nCheck();
}

function checkH2(){
if (document.getElementById("toDo21").checked 
      && document.getElementById("toDo22").checked == "true") {
    n++;
    nCheck();
}

function checkH3(){
if (document.getElementById("toDo21").checked 
      && document.getElementById("toDo22").checked 
      && document.getElementById("toDo23").checked  == "true") {
    n++;
    nCheck();
}

function checkH4(){
if (document.getElementById("toDo21").checked 
      && document.getElementById("toDo22").checked 
      && document.getElementById("toDo23").checked 
      && document.getElementById("toDo24").checked == "true") {
    n++;
    nCheck();
}

function checkH5(){
if (document.getElementById("toDo21").checked 
      && document.getElementById("toDo22").checked 
      && document.getElementById("toDo23").checked 
      && document.getElementById("toDo24").checked 
      && document.getElementById("toDo25").checked  == "true") {
    n++;
    nCheck();
}

function checkH6(){
if (document.getElementById("toDo21").checked 
      && document.getElementById("toDo22").checked 
      && document.getElementById("toDo23").checked 
      && document.getElementById("toDo24").checked 
      && document.getElementById("toDo25").checked 
      && document.getElementById("toDo26").checked == "true") {
    n++;
    nCheck();
}


function checkH7(){
if (document.getElementById("toDo21").checked 
      && document.getElementById("toDo22").checked 
      && document.getElementById("toDo23").checked 
      && document.getElementById("toDo24").checked 
      && document.getElementById("toDo25").checked 
      && document.getElementById("toDo26").checked
      && document.getElementById("toDo27").checked == "true") {
    n++;
    nCheck();
}


function checkH8(){
if (document.getElementById("toDo21").checked 
      && document.getElementById("toDo22").checked 
      && document.getElementById("toDo23").checked 
      && document.getElementById("toDo24").checked 
      && document.getElementById("toDo25").checked 
      && document.getElementById("toDo26").checked
      && document.getElementById("toDo27").checked
      && document.getElementById("toDo28").checked == "true") {
    n++;
    nCheck();
}

function checkH9(){
if (document.getElementById("toDo21").checked 
      && document.getElementById("toDo22").checked 
      && document.getElementById("toDo23").checked 
      && document.getElementById("toDo24").checked 
      && document.getElementById("toDo25").checked 
      && document.getElementById("toDo26").checked
      && document.getElementById("toDo27").checked
      && document.getElementById("toDo28").checked
      && document.getElementById("toDo29").checked == "true") {
    n++;
    nCheck();
}

function checkH10(){
if (document.getElementById("toDo21").checked 
      && document.getElementById("toDo22").checked 
      && document.getElementById("toDo23").checked 
      && document.getElementById("toDo24").checked 
      && document.getElementById("toDo25").checked 
      && document.getElementById("toDo26").checked
      && document.getElementById("toDo27").checked
      && document.getElementById("toDo28").checked
      && document.getElementById("toDo29").checked
      && document.getElementById("toDo30").checked == "true") {
    n++;
    nCheck();
}
}