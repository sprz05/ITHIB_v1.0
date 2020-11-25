/* START: function show input medium*/
  function checkM(){
  var numMAI = document.getElementById('numMAI');
    if (numMAI.value == 1){
        checkM1();
    } else if (numMAI.value == 2){
        checkM2();
    } else if (numMAI.value == 3){
        checkM3();
    } else if (numMAI.value == 4){
        checkM4();
    } else if (numMAI.value == 5){
        checkM5();
    } else if (numMAI.value == 6){
        checkM6();
    } else if (numMAI.value == 7){
        checkM7();
    }else if (numMAI.value == 8){
        checkM8();
    } else if (numMAI.value == 9){
        checkM9();
    } else if (numMAI.value == 10){
        checkM10();
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


function checkM1(){
if (document.getElementById("toDo11").checked  == "true") {
    n++;
    nCheck();
}             
}

function checkM2(){
if (document.getElementById("toDo11").checked 
      && document.getElementById("toDo12").checked == "true") {
    n++;
    nCheck();
}             
}

function checkM3(){
if (document.getElementById("toDo11").checked 
      && document.getElementById("toDo12").checked 
      && document.getElementById("toDo13").checked  == "true") {
    n++;
    nCheck();
} 
}


function checkM4(){
if (document.getElementById("toDo11").checked 
      && document.getElementById("toDo12").checked 
      && document.getElementById("toDo13").checked 
      && document.getElementById("toDo14").checked == "true") {
    n++;
    nCheck();
}


function checkM5(){
if (document.getElementById("toDo11").checked 
      && document.getElementById("toDo12").checked 
      && document.getElementById("toDo13").checked 
      && document.getElementById("toDo14").checked 
      && document.getElementById("toDo15").checked  == "true") {
    n++;
    nCheck();
}


function checkM6(){
if (document.getElementById("toDo11").checked 
      && document.getElementById("toDo12").checked 
      && document.getElementById("toDo13").checked 
      && document.getElementById("toDo14").checked 
      && document.getElementById("toDo15").checked 
      && document.getElementById("toDo16").checked == "true") {
    n++;
    nCheck();
}

function checkM7(){
if (document.getElementById("toDo11").checked 
      && document.getElementById("toDo12").checked 
      && document.getElementById("toDo13").checked 
      && document.getElementById("toDo14").checked 
      && document.getElementById("toDo15").checked 
      && document.getElementById("toDo16").checked
      && document.getElementById("toDo17").checked == "true") {
    n++;
    nCheck();
}


function checkM8(){
if (document.getElementById("toDo11").checked 
      && document.getElementById("toDo12").checked 
      && document.getElementById("toDo13").checked 
      && document.getElementById("toDo14").checked 
      && document.getElementById("toDo15").checked 
      && document.getElementById("toDo16").checked
      && document.getElementById("toDo17").checked
      && document.getElementById("toDo18").checked == "true") {
    n++;
    nCheck();
}

function checkM9(){
if (document.getElementById("toDo11").checked 
      && document.getElementById("toDo12").checked 
      && document.getElementById("toDo13").checked 
      && document.getElementById("toDo14").checked 
      && document.getElementById("toDo15").checked 
      && document.getElementById("toDo16").checked
      && document.getElementById("toDo17").checked
      && document.getElementById("toDo18").checked
      && document.getElementById("toDo19").checked == "true") {
    n++;
    nCheck();
}

function checkM10(){
if (document.getElementById("toDo11").checked 
      && document.getElementById("toDo12").checked 
      && document.getElementById("toDo13").checked 
      && document.getElementById("toDo14").checked 
      && document.getElementById("toDo15").checked 
      && document.getElementById("toDo16").checked
      && document.getElementById("toDo17").checked
      && document.getElementById("toDo18").checked
      && document.getElementById("toDo19").checked
      && document.getElementById("toDo20").checked == "true") {
    n++;
    nCheck();
}