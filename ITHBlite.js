 
var alert1stEnd;
var alert2ndEnd;

var iOne = 0;
var iTwo = 0;

var firstIntDiv = document.getElementById("firstIntDiv");
var secondIntDiv = document.getElementById("secondIntDiv");

var x;
var x2 

var y;
var y2;





function start1st(){
  document.getElementById("endAll").style.display = "block"; 
  document.getElementById("form").style.display = "none";

 x = document.querySelector('input[name=everyXMin]:checked').value * 60000;
 x2 = x/60000;
 
 if (x2 == 0.1){
  showHW10Timer(); start10();
 } else if (x2 == 15){
  showHW15Timer(); start15();
 } else if (x2 == 20){
  showHW20Timer(); start20();
 } else if (x2 == 25) {
  showHW25Timer(); start25();
 } else if (x2 ==  30){ 
  showHW30Timer(); start30()
} else if (x2 == 35){
  showHW35Timer(); start35();
} else if (x2 == 40){
  showHW40Timer(); start40();
} 

 console.log("Homework Time started");
 alert1stEnd = setTimeout(alertEnd1st, x);
}


function alertEnd1st(){

  x2 = x/60000;


  HideHWTimer(); 

  document.getElementById("wrkOnHW").style.display = "block";
    document.getElementById("timerDoneDiv").style.display = "block";
}


function end1st() {
  console.log("1st interval ended");
  document.getElementById("wrkOnHW").style.display = "none";

  if (x2 == 0.1){
  HideHWTimer(); resetTimer();
 } else if (x2 == 15){
  HideHWTimer(); resetTimer();
 } else if (x2 == 20){
  HideHWTimer(); resetTimer();
 } else if (x2 == 25) {
  HideHWTimer(); resetTimer();
 } else if (x2 ==  30){ 
  HideHWTimer(); resetTimer();
} else if (x2 == 35){
  HideHWTimer(); resetTimer();
} else if (x2 == 40){
  HideHWTimer(); resetTimer();
} 
  
  start2nd();
  iOne++;
}

//2nd interval start & stop//


function concentrationCheck(){
  if (iOne == 1){
     $('#btnTrigger').click();
   }
}

function start2nd(){
   y = document.querySelector('input[name=everyYMin]:checked').value * 60000;
   y2 = y/60000;


   if (y2 == 1){
   show5BreakTimer(); start5Timer1(); showBrainBreakDiv();
 } else if (y2 == 10){
   show10BreakTimer(); start10Break1(); showBrainBreakDiv();
 } else if (y2 == 15){
  show15BreakTimer(); start15Break1(); showBrainBreakDiv();
 } else if (y2 == 20) {
  show20BreakTimer(); start20Break1(); showBrainBreakDiv();
 } else if (y2 ==  25){ 
  show25BreakTimer(); start25Break1(); showBrainBreakDiv();
} else if (y2 == 30){
  show30BreakTimer(); start30Break1(); showBrainBreakDiv();
} 

  console.log("2nd Interval started");
  alert2ndEnd = setTimeout(alertEnd2nd, y);
}



function alertEnd2nd(){
  document.getElementById("breakTime").style.display = "block";
  document.getElementById("timerDoneDiv").style.display = "block";

    y2 = y/60000;

   hideBreakTimer(); 
}

function end2nd() {
  console.log("break time ended");
  resetTimer();

    document.getElementById("breakTime").style.display = "none";

    if (y2 == 1){
   hideBreakTimer(); resetTimer();
 } else if (y2 == 10){
   hideBreakTimer(); resetTimer();
 } else if (y2 == 15){
  hideBreakTimer(); resetTimer();
 } else if (y2 == 20) {
  hideBreakTimer(); resetTimer();
 } else if (y2 ==  25){ 
  hideBreakTimer(); resetTimer();
} else if (y2 == 30){
  hideBreakTimer(); resetTimer();
} 

  
  start1st();
  iTwo++;
}

function endAll(){
  var iOneX =  iOne * x2;
  var iTwoY = iTwo * y2;
  document.getElementById("totalHWMin").innerHTML = iOneX/60000;
  document.getElementById("totalBreaksMin").innerHTML = iTwo;

  document.getElementById("timers").style.display = "none";

  document.getElementById("endHW").style.display = "block";
}



  function start10() {
      var tenMinutes = 60 * 0.1,
          display10 = document.querySelector('#time10');
      startTimer(tenMinutes, display10);

  };


  function start15() {
      var fifteenMinutes = 60 * 15,
          display15 = document.querySelector('#time15');
      startTimer(fifteenMinutes, display15);
  };

  function start20() {
      var twentyMinutes = 60 * 20,
          display20 = document.querySelector('#time20');
      startTimer(twentyMinutes, display20);
  };

  function start25() {
      var twentyfiveMinutes = 60 * 25,
          display25 = document.querySelector('#time25');
      startTimer(twentyfiveMinutes, display25);
  };

  function start30() {
      var thirtyMinutes = 60 * 30,
          display30 = document.querySelector('#time30');
      startTimer(thirtyMinutes, display30);
  };

  function start35() {
      var thirtyMinutes = 60 * 35,
          display30 = document.querySelector('#time35');
      startTimer(thirtyMinutes, display30);
  };

  function start40() {
      var thirtyMinutes = 60 * 40,
          display30 = document.querySelector('#time40');
      startTimer(thirtyMinutes, display30);
  };




  /*break timers for next assignment*/

  function start5Timer1() {
      var fiveMinutesB2 = 60 * 1,
          display5B2 = document.querySelector('#time5Break1');
      startTimer(fiveMinutesB2, display5B2);

  };


    function start10Break1() {
        var tenMinutesB2 = 60 * 10,
            display10B2 = document.querySelector('#time10Break1');
        startTimer(tenMinutesB2, display10B2);

    };

    function start15Break1() {
        var fifteenMinutes = 60 * 15,
            display15 = document.querySelector('#time15Break1');
        startTimer(fifteenMinutes, display15);

    };

    function start20Break1() {
        var fifteenMinutes = 60 * 20,
            display20 = document.querySelector('#time20Break1');
        startTimer(fifteenMinutes, display20);

    };

    function start25Break1() {
        var twentyfiveMinutes = 60 * 25,
            display25 = document.querySelector('#time25Break1');
        startTimer(twentyfiveMinutes, display25);

    };

    function start30Break1() {
        var thirtyMinutes = 60 * 30,
            display30 = document.querySelector('#time30Break1');
        startTimer(thirtyMinutes, display30);

    };










        function showHW10Timer(){
          document.getElementById("HWTimers").style.display = "block";
          document.getElementById("hwTimer10").style.display = "block";
        }
   

      
        function showHW15Timer(){
          document.getElementById("HWTimers").style.display = "block";
          document.getElementById("hwTimer15").style.display = "block";
        }
      

      
        function showHW20Timer(){
          document.getElementById("HWTimers").style.display = "block";
          document.getElementById("hwTimer20").style.display = "block";
        }
      

      
        function showHW25Timer(){
          document.getElementById("HWTimers").style.display = "block";
          document.getElementById("hwTimer25").style.display = "block";
        }
      

      
        function showHW30Timer(){
          document.getElementById("HWTimers").style.display = "block";
          document.getElementById("hwTimer30").style.display = "block";
        }
      

      
        function showHW35Timer(){
          document.getElementById("HWTimers").style.display = "block";
          document.getElementById("hwTimer35").style.display = "block";
        }
      

      
        function showHW40Timer(){
          document.getElementById("HWTimers").style.display = "block";
          document.getElementById("hwTimer40").style.display = "block";
        }


        //break timers show functions 

              function show5BreakTimer(){
        document.getElementById("breakTimeTimers").style.display = "block";
        document.getElementById("timerBreak5").style.display = "block";
      }
      function show10BreakTimer(){
        document.getElementById("breakTimeTimers").style.display = "block";
        document.getElementById("timerBreak10").style.display = "block";
      }
      function show15BreakTimer(){
        document.getElementById("breakTimeTimers").style.display = "block";
        document.getElementById("timerBreak15").style.display = "block";
      }
      function show20BreakTimer(){
        document.getElementById("breakTimeTimers").style.display = "block";
        document.getElementById("timerBreak20").style.display = "block";
      }
      function show25BreakTimer(){
        document.getElementById("breakTimeTimers").style.display = "block";
        document.getElementById("timerBreak25").style.display = "block";
      }
      function show30BreakTimer(){
        document.getElementById("breakTimeTimers").style.display = "block";
        document.getElementById("timerBreak30").style.display = "block";
      }
      

/* brain breaks */


   var standingBrainBreaks = [
  "Run in place for 20 seconds🏃🏃‍♀️",
  "Take 3 deep breaths 🌬️",
  "Do bunny hops for 20 seconds🐰",
  "Get a glass of water🌊",
  "Do 20 jumping jacks🙆‍♂️🙆‍♀️",
  "Go outside and take three deep breaths🌬️🌳",
  "Jump as high as you can, 3 times⛹️‍♀️",
  "Run in place for 10 seconds🏃‍♀️",
  "Do bunny hops for 10 seconds🐰",
  "Do mountain climbers for 10 seconds🧗‍♀️",
  "Jump as high as you can, 5 times⛹️‍♂️",
];
function giveBrainBreak(){
var randomSBB = Math.floor(Math.random() * standingBrainBreaks.length);
document.getElementById("randomSBB").innerHTML = standingBrainBreaks[randomSBB];
}



var sittingBrainBreaks = [
  "Run in place for 20 seconds🏃🏃‍♀️",
  "Take 3 deep breaths 🌬️",
  "Close your eyes for 10 seconds👁‍🗨",
  "Make a wave with your arms🌊",
  "Stretch your hands as far as you can🙌",
  "Twist your body from side to side",
  "Take 5 deep breaths🌬️",
  "Shake your arms and hands out🖐",
  "Close your eyes and think of a place that you'd like to travel to🏖",
  "Close your eyes and think of something that makes you happy😊",
  "Try to spell your name with your arms or hands 🤞👋🖐👈 (That's my name in sign language)",
];
function giveSittingBrainBreak(){
var randomSitBB = Math.floor(Math.random() * sittingBrainBreaks.length);
document.getElementById("randomSitBB").innerHTML = sittingBrainBreaks[randomSitBB];
}
      
function hideBreakTimer(){
  document.getElementById("breakTimeTimers").style.display = "none";
}



function HideHWTimer(){
  document.getElementById("HWTimers").style.display = "none";
}


 function showBrainBreakDiv(){
  document.getElementById("brainBreakDiv").style.display = "block";
}