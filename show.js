/*
The following declarations are done by using the
HTMLFormControlsCollection API
*/
// Exists on both pages
var form = document.forms[0];
// NodeList of all of the form controls
var ui = form.elements;
// <input> on index.html

var numEAI = ui.numEAI;
var numMAI = ui.numMAI;
var numHAI = ui.numMAI;

// Exists on both pages

var numEAIOut = ui.numEAIOut;
var numMAIOut = ui.numMAIOut;
var numHAIOut = ui.numHAIOut;

// Button on page1.html
var btn = ui.btn;

// Register the 'submit' event on the <form>
form.addEventListener('submit', saveData);

// Register the 'click' event on the button on page1.html
btn.addEventListener('click', getData);

// Callback called on submit on index.html
function saveData(e) {

  /*
  Prevent the <form> from sending data to server and
  resetting itself
  */
  e.preventDefault();

  // Get the data from <input> on index.html

  var strNumEAI = numEAI.value;
  var strNumMAI = numMAI.value;
  var strNumHAI = numHAI.value;

  // Save data to localStorage

  localStorage.setItem('numEAI', JSON.stringify(strNumEAI));
  localStorage.setItem('numMAI', JSON.stringify(strNumMAI));
  localStorage.setItem('numHAI', JSON.stringify(strNumHAI));

  // Notify user

  numEAIOut.innerHTML = `${strNumEAI}`;
  numMAIOut.innerHTML = `${strNumMAI}`;
  numHAIOut.innerHTML = `${strNumHAI}`;

}





// Callback called when button is clicked on page1.html
function getData(e) {

  // Get data from localStorage

  var numEAIStored = JSON.parse(localStorage.getItem('numEAI'));
  var numMAIStored = JSON.parse(localStorage.getItem('numMAI'));
  var numHAIStored = JSON.parse(localStorage.getItem('numHAI'));

  // Notify user

  numEAIOut.innerHTML = `${numEAIStored}`
  numMAIOut.innerHTML = `${numMAIStored}`
  numHAIOut.innerHTML = `${numHAIStored}`



  function showInputE2(){
    var numEAIStored = JSON.parse(localStorage.getItem('numEAI'));
    if (numEAIStored.value == 0){
       dontShowInput1E();
   } else if (numEAIStored.value == 1){

        onlyShowInput1();
    } else if (numEAIStored.value == 2){

        onlyShowInput2();
    } else if (numEAIStored.value == 3){

        onlyShowInput3();
    } else if (numEAIStored.value == 4){

        onlyShowInput4();
    } else if (numEAIStored.value == 5){

        onlyShowInput5();
    } else if (numEAIStored.value == 6){

          onlyShowInput6();
    } else if (numEAIStored.value == 7){

          onlyShowInput7();
    } else if (numEAIStored.value == 8){

          onlyShowInput8();
    } else if (numEAIStored.value == 9){

          onlyShowInput9();
    } else if (numEAIStored.value == 10){

          onlyShowInput10();
    } else {
      dontShowInput1E();
    }

  }
  /* START: function show input medium*/
  function showInputM2(){
    var numMAIStored = JSON.parse(localStorage.getItem('numMAI'));
   if (numMAIStored.value == 0){
      dontShowInput1M();
   }
   else if (numMAIStored.value == 1){

        onlyShowInput1M();
    } else if (numMAIStored.value == 2){

        onlyShowInput2M();
    } else if (numMAIStored.value == 3){

        onlyShowInput3M();
    } else if (numMAIStored.value == 4){

        onlyShowInput4M();
    } else if (numMAIStored.value == 5){

        onlyShowInput5M();
    } else if (numMAIStored.value == 6){

        onlyShowInput6M();
    } else if (numMAIStored.value == 7){

        onlyShowInput7M();
    }else if (numMAIStored.value == 8){

        onlyShowInput8M();
    } else if (numMAIStored.value == 9){

        onlyShowInput9M();
    } else if (numMAIStored.value == 10){

        onlyShowInput10M();
    }
     else{
      dontShowInput1M();
    }

  }


  /* START: function show input hard*/
  function showInputH2(){
    var numHAIStored = JSON.parse(localStorage.getItem('numHAI'));
   if (numHAIStored.value == 0){
        dontShowInput1H();
   }
    else if (numHAIStored.value == 1){
        onlyShowInput1H();

    } else if (numHAIStored.value == 2){
        onlyShowInput2H();

    } else if (numHAIStored.value == 3){
        onlyShowInput3H();

    } else if (numHAIStored.value == 4){
        onlyShowInput4H();

    }  else if (numHAIStored.value == 5){
        onlyShowInput5H();

    } else if (numHAIStored.value == 6){
        onlyShowInput6H();

    } else if (numHAIStored.value == 7){
        onlyShowInput7H();

    } else if (numHAIStored.value == 8){
        onlyShowInput8H();

    } else if (numHAIStored.value == 9){
        onlyShowInput9H();

    } else if (numHAIStored.value == 10){
        onlyShowInput10H();

    } else{
        dontShowInput1H()
    }
  }

}


/* START of show input functions */
function dontShowInput1M(){
  document.getElementById("medium-block").style.display = "none";
}

function onlyShowInput1(){
    document.getElementById("data").style.display = "block";
    document.getElementById("data2").style.display = "none";
    document.getElementById("toDo2").style.display = "none";

    document.getElementById("data3").style.display = "none";
    document.getElementById("toDo3").style.display = "none";

    document.getElementById("data4").style.display = "none";
    document.getElementById("toDo4").style.display = "none";

    document.getElementById("data5").style.display = "none";
    document.getElementById("toDo5").style.display = "none";

    document.getElementById("data6").style.display = "none";
    document.getElementById("toDo6").style.display = "none";

    document.getElementById("data7").style.display = "none";
    document.getElementById("toDo7").style.display = "none";

    document.getElementById("data8").style.display = "none";
    document.getElementById("toDo8").style.display = "none";

    document.getElementById("data9").style.display = "none";
    document.getElementById("toDo9").style.display = "none";

    document.getElementById("data10").style.display = "none";
    document.getElementById("toDo10").style.display = "none";
    }
function onlyShowInput2(){
    document.getElementById("data").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data3").style.display = "none";
    document.getElementById("toDo3").style.display = "none";

    document.getElementById("data4").style.display = "none";
    document.getElementById("toDo4").style.display = "none";

    document.getElementById("data5").style.display = "none";
    document.getElementById("toDo5").style.display = "none";

    document.getElementById("data6").style.display = "none";
    document.getElementById("toDo6").style.display = "none";

    document.getElementById("data7").style.display = "none";
    document.getElementById("toDo7").style.display = "none";

    document.getElementById("data8").style.display = "none";
    document.getElementById("toDo8").style.display = "none";

    document.getElementById("data9").style.display = "none";
    document.getElementById("toDo9").style.display = "none";

    document.getElementById("data10").style.display = "none";
    document.getElementById("toDo10").style.display = "none";
    }
    function onlyShowInput3(){
    document.getElementById("data").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data3").style.display = "block";

    document.getElementById("data4").style.display = "none";
    document.getElementById("toDo4").style.display = "none";
    document.getElementById("data5").style.display = "none";
    document.getElementById("toDo5").style.display = "none";
    document.getElementById("data6").style.display = "none";
    document.getElementById("toDo6").style.display = "none";
    document.getElementById("data7").style.display = "none";
    document.getElementById("toDo7").style.display = "none";
    document.getElementById("data8").style.display = "none";
    document.getElementById("toDo8").style.display = "none";
    document.getElementById("data9").style.display = "none";
    document.getElementById("toDo9").style.display = "none";
    document.getElementById("data10").style.display = "none";
    document.getElementById("toDo10").style.display = "none";
    }
    function onlyShowInput4(){
    document.getElementById("data").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data3").style.display = "block";
    document.getElementById("data4").style.display = "block";
    document.getElementById("data5").style.display = "none";
    document.getElementById("toDo5").style.display = "none";

    document.getElementById("data6").style.display = "none";
    document.getElementById("toDo6").style.display = "none";

    document.getElementById("data7").style.display = "none";
    document.getElementById("toDo7").style.display = "none";

    document.getElementById("data8").style.display = "none";
    document.getElementById("toDo8").style.display = "none";

    document.getElementById("data9").style.display = "none";
    document.getElementById("toDo9").style.display = "none";

    document.getElementById("data10").style.display = "none";
    document.getElementById("toDo10").style.display = "none";
    }
    function onlyShowInput5(){
    document.getElementById("data").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data3").style.display = "block";
    document.getElementById("data4").style.display = "block";
    document.getElementById("data5").style.display = "block";

    document.getElementById("data6").style.display = "none";
    document.getElementById("toDo6").style.display = "none";

    document.getElementById("data7").style.display = "none";
    document.getElementById("toDo7").style.display = "none";

    document.getElementById("data8").style.display = "none";
    document.getElementById("toDo8").style.display = "none";

    document.getElementById("data9").style.display = "none";
    document.getElementById("toDo9").style.display = "none";

    document.getElementById("data10").style.display = "none";
    document.getElementById("toDo10").style.display = "none";
    }

    function onlyShowInput6(){
    document.getElementById("data").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data3").style.display = "block";
    document.getElementById("data4").style.display = "block";
    document.getElementById("data5").style.display = "block";
    document.getElementById("data6").style.display = "block";

    document.getElementById("data7").style.display = "none";
    document.getElementById("toDo7").style.display = "none";

    document.getElementById("data8").style.display = "none";
    document.getElementById("toDo8").style.display = "none";

    document.getElementById("data9").style.display = "none";
    document.getElementById("toDo9").style.display = "none";

    document.getElementById("data10").style.display = "none";
    document.getElementById("toDo10").style.display = "none";
    }
    function onlyShowInput7(){
    document.getElementById("data").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data3").style.display = "block";
    document.getElementById("data4").style.display = "block";
    document.getElementById("data5").style.display = "block";
    document.getElementById("data6").style.display = "block";
    document.getElementById("data7").style.display = "block";

    document.getElementById("data8").style.display = "none";
    document.getElementById("toDo8").style.display = "none";

    document.getElementById("data9").style.display = "none";
    document.getElementById("toDo9").style.display = "none";

    document.getElementById("data10").style.display = "none";
    document.getElementById("toDo10").style.display = "none";
    }

    function onlyShowInput8(){
    document.getElementById("data").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data3").style.display = "block";
    document.getElementById("data4").style.display = "block";
    document.getElementById("data5").style.display = "block";
    document.getElementById("data6").style.display = "block";
    document.getElementById("data7").style.display = "block";
    document.getElementById("data8").style.display = "block";

    document.getElementById("data9").style.display = "none";
    document.getElementById("toDo9").style.display = "none";

    document.getElementById("data10").style.display = "none";
    document.getElementById("toDo10").style.display = "none";
    }

    function onlyShowInput9(){
    document.getElementById("data").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data3").style.display = "block";
    document.getElementById("data4").style.display = "block";
    document.getElementById("data5").style.display = "block";
    document.getElementById("data6").style.display = "block";
    document.getElementById("data7").style.display = "block";
    document.getElementById("data8").style.display = "block";
    document.getElementById("data9").style.display = "block";

    document.getElementById("data10").style.display = "none";
    document.getElementById("toDo10").style.display = "none";
    }

    function onlyShowInput10(){
    document.getElementById("data").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data3").style.display = "block";
    document.getElementById("data4").style.display = "block";
    document.getElementById("data5").style.display = "block";
    document.getElementById("data6").style.display = "block";
    document.getElementById("data7").style.display = "block";
    document.getElementById("data8").style.display = "block";
    document.getElementById("data9").style.display = "block";
    document.getElementById("data10").style.display = "block";
    }

/* START: medium show input functions */
function dontShowInput1M(){
  document.getElementById("medium-block").style.display = "none";
}

function onlyShowInput1M(){
    document.getElementById("data11").style.display = "block";

    document.getElementById("data12").style.display = "none";
    document.getElementById("toDo12").style.display = "none";

    document.getElementById("data13").style.display = "none";
    document.getElementById("toDo13").style.display = "none";

    document.getElementById("data14").style.display = "none";
    document.getElementById("toDo14").style.display = "none";

    document.getElementById("data15").style.display = "none";
    document.getElementById("toDo15").style.display = "none";

    document.getElementById("data16").style.display = "none";
    document.getElementById("toDo16").style.display = "none";


    document.getElementById("data17").style.display = "none";
    document.getElementById("toDo17").style.display = "none";

    document.getElementById("data18").style.display = "none";
    document.getElementById("toDo18").style.display = "none";

    document.getElementById("data19").style.display = "none";
    document.getElementById("toDo19").style.display = "none";

    document.getElementById("data20").style.display = "none";
    document.getElementById("toDo20").style.display = "none";

    }
function onlyShowInput2M(){
    document.getElementById("data11").style.display = "block";
    document.getElementById("data12").style.display = "block";

    document.getElementById("data13").style.display = "none";
    document.getElementById("toDo13").style.display = "none";

    document.getElementById("data14").style.display = "none";
    document.getElementById("toDo14").style.display = "none";

    document.getElementById("data15").style.display = "none";
    document.getElementById("toDo15").style.display = "none";

    document.getElementById("data16").style.display = "none";
    document.getElementById("toDo16").style.display = "none";


    document.getElementById("data17").style.display = "none";
    document.getElementById("toDo17").style.display = "none";

    document.getElementById("data18").style.display = "none";
    document.getElementById("toDo18").style.display = "none";

    document.getElementById("data19").style.display = "none";
    document.getElementById("toDo19").style.display = "none";

    document.getElementById("data20").style.display = "none";
    document.getElementById("toDo20").style.display = "none";
  }
    function onlyShowInput3M(){
    document.getElementById("data11").style.display = "block";
    document.getElementById("data12").style.display = "block";
    document.getElementById("data13").style.display = "block";

    document.getElementById("data14").style.display = "none";
    document.getElementById("toDo14").style.display = "none";

    document.getElementById("data15").style.display = "none";
    document.getElementById("toDo15").style.display = "none";

    document.getElementById("data16").style.display = "none";
    document.getElementById("toDo16").style.display = "none";


    document.getElementById("data17").style.display = "none";
    document.getElementById("toDo17").style.display = "none";

    document.getElementById("data18").style.display = "none";
    document.getElementById("toDo18").style.display = "none";

    document.getElementById("data19").style.display = "none";
    document.getElementById("toDo19").style.display = "none";

    document.getElementById("data20").style.display = "none";
    document.getElementById("toDo20").style.display = "none";
  }
    function onlyShowInput4M(){
    document.getElementById("data11").style.display = "block";
    document.getElementById("data12").style.display = "block";
    document.getElementById("data13").style.display = "block";
    document.getElementById("data14").style.display = "block";
    document.getElementById("data15").style.display = "none";
    document.getElementById("toDo15").style.display = "none";

    document.getElementById("data16").style.display = "none";
    document.getElementById("toDo16").style.display = "none";


    document.getElementById("data17").style.display = "none";
    document.getElementById("toDo17").style.display = "none";

    document.getElementById("data18").style.display = "none";
    document.getElementById("toDo18").style.display = "none";

    document.getElementById("data19").style.display = "none";
    document.getElementById("toDo19").style.display = "none";

    document.getElementById("data20").style.display = "none";
    document.getElementById("toDo20").style.display = "none";
  }
    function onlyShowInput5M(){
    document.getElementById("data11").style.display = "block";
    document.getElementById("data12").style.display = "block";
    document.getElementById("data13").style.display = "block";
    document.getElementById("data14").style.display = "block";
    document.getElementById("data15").style.display = "block";


    document.getElementById("data16").style.display = "none";
    document.getElementById("toDo16").style.display = "none";


    document.getElementById("data17").style.display = "none";
    document.getElementById("toDo17").style.display = "none";

    document.getElementById("data18").style.display = "none";
    document.getElementById("toDo18").style.display = "none";

    document.getElementById("data19").style.display = "none";
    document.getElementById("toDo19").style.display = "none";

    document.getElementById("data20").style.display = "none";
    document.getElementById("toDo20").style.display = "none";
  }

    function onlyShowInput6M(){
    document.getElementById("data11").style.display = "block";
    document.getElementById("data12").style.display = "block";
    document.getElementById("data13").style.display = "block";
    document.getElementById("data14").style.display = "block";
    document.getElementById("data15").style.display = "block";
    document.getElementById("data16").style.display = "block";

    document.getElementById("data17").style.display = "none";
    document.getElementById("toDo17").style.display = "none";

    document.getElementById("data18").style.display = "none";
    document.getElementById("toDo18").style.display = "none";

    document.getElementById("data19").style.display = "none";
    document.getElementById("toDo19").style.display = "none";

    document.getElementById("data20").style.display = "none";
    document.getElementById("toDo20").style.display = "none";
    }
    function onlyShowInput7M(){
    document.getElementById("data11").style.display = "block";
    document.getElementById("data12").style.display = "block";
    document.getElementById("data13").style.display = "block";
    document.getElementById("data14").style.display = "block";
    document.getElementById("data15").style.display = "block";
    document.getElementById("data16").style.display = "block";
    document.getElementById("data17").style.display = "block";

    document.getElementById("data18").style.display = "none";
    document.getElementById("toDo18").style.display = "none";

    document.getElementById("data19").style.display = "none";
    document.getElementById("toDo19").style.display = "none";

    document.getElementById("data20").style.display = "none";
    document.getElementById("toDo20").style.display = "none";
    }

    function onlyShowInput8M(){
    document.getElementById("data11").style.display = "block";
    document.getElementById("data12").style.display = "block";
    document.getElementById("data13").style.display = "block";
    document.getElementById("data14").style.display = "block";
    document.getElementById("data15").style.display = "block";
    document.getElementById("data16").style.display = "block";
    document.getElementById("data17").style.display = "block";
    document.getElementById("data18").style.display = "block";

    document.getElementById("data19").style.display = "none";
    document.getElementById("toDo19").style.display = "none";

    document.getElementById("data20").style.display = "none";
    document.getElementById("toDo20").style.display = "none";
    }

    function onlyShowInput9M(){
    document.getElementById("data11").style.display = "block";
    document.getElementById("data12").style.display = "block";
    document.getElementById("data13").style.display = "block";
    document.getElementById("data14").style.display = "block";
    document.getElementById("data15").style.display = "block";
    document.getElementById("data16").style.display = "block";
    document.getElementById("data17").style.display = "block";
    document.getElementById("data18").style.display = "block";
    document.getElementById("data19").style.display = "block";

    document.getElementById("data20").style.display = "none";
    document.getElementById("toDo20").style.display = "none";
    }

    function onlyShowInput10M(){
    document.getElementById("data11").style.display = "block";
    document.getElementById("data12").style.display = "block";
    document.getElementById("data13").style.display = "block";
    document.getElementById("data14").style.display = "block";
    document.getElementById("data15").style.display = "block";
    document.getElementById("data16").style.display = "block";
    document.getElementById("data17").style.display = "block";
    document.getElementById("data18").style.display = "block";
    document.getElementById("data19").style.display = "block";
    document.getElementById("data20").style.display = "block";
    }


    /* START: hard show input functions */
    function dontShowInput1H(){
      document.getElementById("hard-block").style.display = "none";
    }

    function onlyShowInput1H(){
      document.getElementById("data21").style.display = "block";
      document.getElementById("data22").style.display = "none";
      document.getElementById("toDo22").style.display = "none";

      document.getElementById("data23").style.display = "none";
      document.getElementById("toDo23").style.display = "none";

      document.getElementById("data24").style.display = "none";
      document.getElementById("toDo24").style.display = "none";

      document.getElementById("data25").style.display = "none";
      document.getElementById("toDo25").style.display = "none";

      document.getElementById("data26").style.display = "none";
    document.getElementById("toDo26").style.display = "none";

    document.getElementById("data27").style.display = "none";
    document.getElementById("toDo27").style.display = "none";

    document.getElementById("data28").style.display = "none";
    document.getElementById("toDo28").style.display = "none";

    document.getElementById("data29").style.display = "none";
    document.getElementById("toDo29").style.display = "none";

    document.getElementById("data30").style.display = "none";
    document.getElementById("toDo30").style.display = "none";
        }
    function onlyShowInput2H(){
        document.getElementById("data21").style.display = "block";
        document.getElementById("data22").style.display = "block";

      document.getElementById("data23").style.display = "none";
      document.getElementById("toDo23").style.display = "none";

      document.getElementById("data24").style.display = "none";
      document.getElementById("toDo24").style.display = "none";

      document.getElementById("data25").style.display = "none";
      document.getElementById("toDo25").style.display = "none";

      document.getElementById("data26").style.display = "none";
    document.getElementById("toDo26").style.display = "none";

    document.getElementById("data27").style.display = "none";
    document.getElementById("toDo27").style.display = "none";

    document.getElementById("data28").style.display = "none";
    document.getElementById("toDo28").style.display = "none";

    document.getElementById("data29").style.display = "none";
    document.getElementById("toDo29").style.display = "none";

    document.getElementById("data30").style.display = "none";
    document.getElementById("toDo30").style.display = "none";
         }
        function onlyShowInput3H(){
        document.getElementById("data21").style.display = "block";
        document.getElementById("data22").style.display = "block";
        document.getElementById("data23").style.display = "block";
        document.getElementById("data24").style.display = "none";
        document.getElementById("toDo24").style.display = "none";

        document.getElementById("data25").style.display = "none";
        document.getElementById("toDo25").style.display = "none";

        document.getElementById("data26").style.display = "none";
      document.getElementById("toDo26").style.display = "none";

      document.getElementById("data27").style.display = "none";
      document.getElementById("toDo27").style.display = "none";

      document.getElementById("data28").style.display = "none";
      document.getElementById("toDo28").style.display = "none";

      document.getElementById("data29").style.display = "none";
      document.getElementById("toDo29").style.display = "none";

      document.getElementById("data30").style.display = "none";
      document.getElementById("toDo30").style.display = "none";
           }
        function onlyShowInput4H(){
        document.getElementById("data21").style.display = "block";
        document.getElementById("data22").style.display = "block";
        document.getElementById("data23").style.display = "block";
        document.getElementById("data24").style.display = "block";
        document.getElementById("data25").style.display = "none";
        document.getElementById("toDo25").style.display = "none";
        document.getElementById("data26").style.display = "none";
      document.getElementById("toDo26").style.display = "none";

      document.getElementById("data27").style.display = "none";
      document.getElementById("toDo27").style.display = "none";

      document.getElementById("data28").style.display = "none";
      document.getElementById("toDo28").style.display = "none";

      document.getElementById("data29").style.display = "none";
      document.getElementById("toDo29").style.display = "none";

      document.getElementById("data30").style.display = "none";
      document.getElementById("toDo30").style.display = "none";

           }
        function onlyShowInput5H(){
        document.getElementById("data21").style.display = "block";
        document.getElementById("data22").style.display = "block";
        document.getElementById("data23").style.display = "block";
        document.getElementById("data24").style.display = "block";
        document.getElementById("data25").style.display = "block";
        document.getElementById("data26").style.display = "none";
    document.getElementById("toDo26").style.display = "none";

    document.getElementById("data27").style.display = "none";
    document.getElementById("toDo27").style.display = "none";

    document.getElementById("data28").style.display = "none";
    document.getElementById("toDo28").style.display = "none";

    document.getElementById("data29").style.display = "none";
    document.getElementById("toDo29").style.display = "none";

    document.getElementById("data30").style.display = "none";
    document.getElementById("toDo30").style.display = "none";


        }

        function onlyShowInput6H(){
        document.getElementById("data21").style.display = "block";
        document.getElementById("data22").style.display = "block";
        document.getElementById("data23").style.display = "block";
        document.getElementById("data24").style.display = "block";
        document.getElementById("data25").style.display = "block";
        document.getElementById("data26").style.display = "block";

        document.getElementById("data27").style.display = "none";
        document.getElementById("toDo27").style.display = "none";

        document.getElementById("data28").style.display = "none";
        document.getElementById("toDo28").style.display = "none";

        document.getElementById("data29").style.display = "none";
        document.getElementById("toDo29").style.display = "none";

        document.getElementById("data30").style.display = "none";
        document.getElementById("toDo30").style.display = "none";

        }
        function onlyShowInput7H(){
        document.getElementById("data21").style.display = "block";
        document.getElementById("data22").style.display = "block";
        document.getElementById("data23").style.display = "block";
        document.getElementById("data24").style.display = "block";
        document.getElementById("data25").style.display = "block";
        document.getElementById("data26").style.display = "block";
        document.getElementById("data27").style.display = "block";

        document.getElementById("data28").style.display = "none";
        document.getElementById("toDo28").style.display = "none";

        document.getElementById("data29").style.display = "none";
        document.getElementById("toDo29").style.display = "none";

        document.getElementById("data30").style.display = "none";
        document.getElementById("toDo30").style.display = "none";
  }

        function onlyShowInput8H(){
        document.getElementById("data21").style.display = "block";
        document.getElementById("data22").style.display = "block";
        document.getElementById("data23").style.display = "block";
        document.getElementById("data24").style.display = "block";
        document.getElementById("data25").style.display = "block";
        document.getElementById("data26").style.display = "block";
        document.getElementById("data27").style.display = "block";
        document.getElementById("data28").style.display = "block";

        document.getElementById("data29").style.display = "none";
        document.getElementById("toDo29").style.display = "none";

        document.getElementById("data30").style.display = "none";
        }

        function onlyShowInput9H(){
        document.getElementById("data21").style.display = "block";
        document.getElementById("data22").style.display = "block";
        document.getElementById("data23").style.display = "block";
        document.getElementById("data24").style.display = "block";
        document.getElementById("data25").style.display = "block";
        document.getElementById("data26").style.display = "block";
        document.getElementById("data27").style.display = "block";
        document.getElementById("data28").style.display = "block";
        document.getElementById("data29").style.display = "block";

        document.getElementById("data30").style.display = "none";
        document.getElementById("toDo30").style.display = "none";
        }

        function onlyShowInput10H(){
        document.getElementById("data21").style.display = "block";
        document.getElementById("data22").style.display = "block";
        document.getElementById("data23").style.display = "block";
        document.getElementById("data24").style.display = "block";
        document.getElementById("data25").style.display = "block";
        document.getElementById("data26").style.display = "block";
        document.getElementById("data27").style.display = "block";
        document.getElementById("data28").style.display = "block";
        document.getElementById("data29").style.display = "block";
        document.getElementById("data30").style.display = "block";
        }



/*END of show btns*/


/* START: function show input easy*/



function displayTDL2(){
    document.getElementById("toDoList2").style.display = "block";
}
