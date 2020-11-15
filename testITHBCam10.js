function myFunction1() {
  document.getElementById("1Div").style.display = "none";
  document.getElementById("2Div").style.display = "block";
}


function showPicBtn1() {
  document.getElementById("camBtn").style.display = "none";
  document.getElementById("picBtn1").style.display = "block";
}

function showRetakeBtn1() {
  document.getElementById("picBtn1").style.display = "none";
  document.getElementById("button").style.display = "block";
  document.getElementById("retakeBtn1").style.display = "block";
}

function showPicBtn2() {
  document.getElementById("camBtn2").style.display = "none";
  document.getElementById("picBtn2").style.display = "block";
}

function showRetakeBtn2() {
  document.getElementById("picBtn2").style.display = "none";
  document.getElementById("button0A").style.display = "block";
  document.getElementById("retakeBtn2").style.display = "block";
}

function showPicBtn3() {
  document.getElementById("camBtn3").style.display = "none";
  document.getElementById("picBtn3").style.display = "block";
}

function showRetakeBtn3() {
  document.getElementById("picBtn3").style.display = "none";
  document.getElementById("button0B").style.display = "block";
  document.getElementById("retakeBtn3").style.display = "block";
}

function showPicBtn4() {
  document.getElementById("camBtn4").style.display = "none";
  document.getElementById("picBtn4").style.display = "block";
}

function showRetakeBtn4() {
  document.getElementById("picBtn4").style.display = "none";
  document.getElementById("button0C").style.display = "block";
  document.getElementById("retakeBtn4").style.display = "block";
}

function showPicBtn5() {
  document.getElementById("camBtn5").style.display = "none";
  document.getElementById("picBtn5").style.display = "block";
}

function showRetakeBtn5() {
  document.getElementById("picBtn5").style.display = "none";
  document.getElementById("button0CA").style.display = "block";
  document.getElementById("retakeBtn5").style.display = "block";
}

function showPicBtn6() {
  document.getElementById("camBtn6").style.display = "none";
  document.getElementById("picBtn6").style.display = "block";
}

function showRetakeBtn6() {
  document.getElementById("picBtn6").style.display = "none";
  document.getElementById("button0D").style.display = "block";
  document.getElementById("retakeBtn6").style.display = "block";
}

function showPicBtn7() {
  document.getElementById("camBtn7").style.display = "none";
  document.getElementById("picBtn7").style.display = "block";
}

function showRetakeBtn7() {
  document.getElementById("picBtn7").style.display = "none";
  document.getElementById("button0E").style.display = "block";
  document.getElementById("retakeBtn7").style.display = "block";
}

function showPicBtn8() {
  document.getElementById("camBtn8").style.display = "none";
  document.getElementById("picBtn8").style.display = "block";
}

function showRetakeBtn8() {
  document.getElementById("picBtn8").style.display = "none";
  document.getElementById("button0F").style.display = "block";
  document.getElementById("retakeBtn8").style.display = "block";
}

function showPicBtn9() {
  document.getElementById("camBtn9").style.display = "none";
  document.getElementById("picBtn9").style.display = "block";
}

function showRetakeBtn9() {
  document.getElementById("picBtn9").style.display = "none";
  document.getElementById("button0G").style.display = "block";
  document.getElementById("retakeBtn9").style.display = "block";
}

function showPicBtn10() {
  document.getElementById("camBtn10").style.display = "none";
  document.getElementById("picBtn10").style.display = "block";
}

function showRetakeBtn10() {
  document.getElementById("picBtn10").style.display = "none";
  document.getElementById("button0H").style.display = "block";
  document.getElementById("retakeBtn10").style.display = "block";
}

let timerId;
function startTimer(duration, display) {
var timer = duration,
  minutes, seconds;
timerId = setInterval(function() {

  if (--timer < 0) {
    timer = duration;
  }

  minutes = parseInt(timer / 60, 10);
  seconds = parseInt(timer % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = minutes + ":" + seconds;

  if (timer == 0){
    stopTimer();
  }
}, 1000);
}

function resetTimer() {
    clearInterval(timerId);
  }

function stopTimer() {
    clearInterval(timerId);
  }



function start10() {
    var tenMinutes = 60 * 10,
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


/*break timers for continuing to work on the same assignment*/

function startContinue5Timer() {
  var fiveMinutes = 60 * 5,
      display5 = document.querySelector('#timeContinue5Break');
  startTimer(fiveMinutes, display5);

};


function startContinue10Break() {
    var tenMinutes = 60 * 10,
        display10 = document.querySelector('#timeContinue10Break');
    startTimer(tenMinutes, display10);

};

function startContinue15Break() {
    var fifteenMinutes = 60 * 15,
        display15 = document.querySelector('#timeContinue15Break');
    startTimer(fifteenMinutes, display15);

};

function startContinue20Break() {
    var fifteenMinutes = 60 * 20,
        display20 = document.querySelector('#timeContinue20Break');
    startTimer(fifteenMinutes, display20);

};

function startContinue25Break() {
    var twentyfiveMinutes = 60 * 25,
        display25 = document.querySelector('#timeContinue25Break');
    startTimer(twentyfiveMinutes, display25);

};

function startContinue30Break() {
    var thirtyMinutes = 60 * 30,
        display30 = document.querySelector('#timeContinue30Break');
    startTimer(thirtyMinutes, display30);

};


/*break timers for next assignment*/

function start5Timer1() {
    var fiveMinutesB2 = 60 * 5,
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



function hideNextBtn(){
document.getElementById("nextBtn").style.display = "none";
}




function showNextDoneDivButtons(){
  document.getElementById("nextBtnShowsDoneDiv").style.display="block";
  document.getElementById("nextBtn").style.display="none";
}
function showNextUnderstandingDivButtons(){
  document.getElementById("nextBtn").style.display="block";
  document.getElementById("nextBtnShowsDoneDiv").style.display="none";
}

function showDoneDiv(){
  document.getElementById("hwTimer10").style.display="none";
  document.getElementById("hwTimer15").style.display="none";
  document.getElementById("hwTimer20").style.display="none";
  document.getElementById("hwTimer25").style.display="none";
  document.getElementById("hwTimer30").style.display="none";
  document.getElementById("hwTimer35").style.display="none";
  document.getElementById("hwTimer40").style.display="none";
  document.getElementById("doneDiv").style.display="block";
}


function showHWBlockTxt(){
document.getElementById("continueToWorkOnAssignmentTxt").style.display = "none";
document.getElementById("workOnNextAssignmentTxt").style.display = "none";
document.getElementById("homeworkTime").style.display = "none";
document.getElementById("homeworkBlock").style.display = "block";
}

function showNextContent(){
  document.getElementById("homeworkBlock").style.display="none";
  document.getElementById("workOnNextAssignmentTxt").style.display="none";
  document.getElementById("continueToWorkOnAssignmentTxt").style.display="none";
  document.getElementById("adjustTime").style.display="none";
  document.getElementById("nextText").style.display="block";
  document.getElementById("nextBtn").style.display="block";
  document.getElementById("homeworkTime").style.display="block";
}

function showNextBtn(){
	document.getElementById("nextBtn").style.display="block";
}









        function showHW10Timer(){
          document.getElementById("2Div").style.display = "none";
          document.getElementById("hwTimer10").style.display = "block";
        }



        function showHW15Timer(){
          document.getElementById("2Div").style.display = "none";
          document.getElementById("hwTimer15").style.display = "block";
        }



        function showHW20Timer(){
          document.getElementById("2Div").style.display = "none";
          document.getElementById("hwTimer20").style.display = "block";
        }



        function showHW25Timer(){
          document.getElementById("2Div").style.display = "none";
          document.getElementById("hwTimer25").style.display = "block";
        }



        function showHW30Timer(){
          document.getElementById("2Div").style.display = "none";
          document.getElementById("hwTimer30").style.display = "block";
        }



        function showHW35Timer(){
          document.getElementById("2Div").style.display = "none";
          document.getElementById("hwTimer35").style.display = "block";
        }



        function showHW40Timer(){
          document.getElementById("2Div").style.display = "none";
          document.getElementById("hwTimer40").style.display = "block";
        }



        function showUnderstandingDiv(){
          document.getElementById("understandingCheckDiv").style.display = "block";
          document.getElementById("2Div").style.display = "none";
          document.getElementById("doneDiv").style.display = "none";
          document.getElementById("hwTimer10").style.display = "none";
          document.getElementById("hwTimer15").style.display = "none";
          document.getElementById("hwTimer20").style.display = "none";
          document.getElementById("hwTimer25").style.display = "none";
          document.getElementById("hwTimer30").style.display = "none";
          document.getElementById("hwTimer35").style.display = "none";
          document.getElementById("hwTimer40").style.display = "none";
        }




        function showUnderstandingDiv20(){
          document.getElementById("timer20").style.display = "none";
          document.getElementById("understandingCheckDiv").style.display = "block";
        }

        function showUnderstandingDiv30(){
          document.getElementById("timer30").style.display = "none";
          document.getElementById("understandingCheckDiv").style.display = "block";
        }

        function showDiv1(){
          document.getElementById("timerBreak5").style.display = "none";
          document.getElementById("timerBreak10").style.display = "none";
          document.getElementById("timerBreak15").style.display = "none";
          document.getElementById("timerBreak20").style.display = "none";
          document.getElementById("timerBreak25").style.display = "none";
          document.getElementById("timerBreak30").style.display = "none";
          document.getElementById("1Div").style.display = "block";
        }

        function showBrainBreakDiv(){
          document.getElementById("brainBreakDiv").style.display = "block";
        }

        function hideBrainBreakDiv(){
          document.getElementById("brainBreakDiv").style.display = "none";
        }

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
  "Run in place in your seat for 20 seconds🏃🏃‍♀️",
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



function showContinue5Timer(){
  document.getElementById("breakTimers").style.display = "none";
  document.getElementById("showContinue5Timer").style.display = "block";
}
function showContinue10Timer(){
  document.getElementById("breakTimers").style.display = "none";
  document.getElementById("showContinue10Timer").style.display = "block";
}
function showContinue15Timer(){
  document.getElementById("breakTimers").style.display = "none";
  document.getElementById("showContinue15Timer").style.display = "block";
}
function showContinue20Timer(){
  document.getElementById("breakTimers").style.display = "none";
  document.getElementById("showContinue20Timer").style.display = "block";
}
function showContinue25Timer(){
  document.getElementById("breakTimers").style.display = "none";
  document.getElementById("showContinue25Timer").style.display = "block";
}
function showContinue30Timer(){
  document.getElementById("breakTimers").style.display = "none";
  document.getElementById("showContinue30Timer").style.display = "block";
}


function showDiv2(){
  document.getElementById("breakTimers").style.display = "none";
  document.getElementById("showContinue5Timer").style.display = "none";
  document.getElementById("showContinue10Timer").style.display = "none";
  document.getElementById("showContinue15Timer").style.display = "none";
  document.getElementById("showContinue20Timer").style.display = "none";
  document.getElementById("showContinue25Timer").style.display = "none";
  document.getElementById("showContinue30Timer").style.display = "none";
  document.getElementById("2Div").style.display = "block";
}





function showBreakTimers(){
  document.getElementById("doneDiv").style.display = "none";
  document.getElementById("breakTimers").style.display = "block";
}

function showBreakTimersAnotherAssignment(){
  document.getElementById("understandingCheckDiv").style.display="none"
  document.getElementById("breakTimers2").style.display = "block";
  document.getElementById("adjustTime").style.display = "block";
}

function showWorkOn10(){
  document.getElementById("doneDiv").style.display = "none";
  document.getElementById("workDiv").style.display = "block";
}


function showWorkOnNextAssignmentTxt(){
  document.getElementById("workOnNextAssignmentTxt").style.display = "block";
  document.getElementById("continueToWorkOnAssignmentTxt").style.display = "none";
  document.getElementById("adjustTime").style.display = "none";
  document.getElementById("homeworkTime").style.display = "none";
  document.getElementById("homeworkBlock").style.display = "none";
}

function showContinueToWorkOnAssignmentTxt(){
  document.getElementById("continueToWorkOnAssignmentTxt").style.display = "block";
  document.getElementById("workOnNextAssignmentTxt").style.display = "none";
  document.getElementById("homeworkBlock").style.display = "none";
  document.getElementById("homeworkTime").style.display = "none";
}

function showCam(){
  document.getElementById("my_camera").style.display = "block";
}

function hideCam(){
  document.getElementById("my_camera").style.display = "none";
}

function showUnderstandingCheck2(){
  document.getElementById("understandingCheck1").style.display = "none";
  document.getElementById("understandingCheck2").style.display = "block";
}

function showUnderstandingCheck3(){
  document.getElementById("understandingCheck2").style.display = "none";
  document.getElementById("understandingCheck3").style.display = "block";
}

function showUnderstandingCheck4(){
  document.getElementById("understandingCheck3").style.display = "none";
  document.getElementById("understandingCheck4").style.display = "block";
}

function showUnderstandingCheck5(){
  document.getElementById("understandingCheck4").style.display = "none";
  document.getElementById("understandingCheck5").style.display = "block";
}

function showUnderstandingCheck6(){
  document.getElementById("understandingCheck5").style.display = "none";
  document.getElementById("understandingCheck6").style.display = "block";
}

function showUnderstandingCheck7(){
  document.getElementById("understandingCheck6").style.display = "none";
  document.getElementById("understandingCheck7").style.display = "block";
}

function showUnderstandingCheck8(){
  document.getElementById("understandingCheck7").style.display = "none";
  document.getElementById("understandingCheck8").style.display = "block";
}

function showUnderstandingCheck9(){
  document.getElementById("understandingCheck8").style.display = "none";
  document.getElementById("understandingCheck9").style.display = "block";
}

function showUnderstandingCheck10(){
  document.getElementById("understandingCheck9").style.display = "none";
  document.getElementById("understandingCheck10").style.display = "block";
}

function showDoneDivAfterOrganizing(){
  document.getElementById("understandingCheckDiv").style.display = "none";
  document.getElementById("doneDiv").style.display = "block";
}




function show5BreakTimer(){
  document.getElementById("breakTimers2").style.display = "none";
  document.getElementById("timerBreak5").style.display = "block";
}
function show10BreakTimer(){
  document.getElementById("breakTimers2").style.display = "none";
  document.getElementById("timerBreak10").style.display = "block";
}
function show15BreakTimer(){
  document.getElementById("breakTimers2").style.display = "none";
  document.getElementById("timerBreak15").style.display = "block";
}
function show20BreakTimer(){
  document.getElementById("breakTimers2").style.display = "none";
  document.getElementById("timerBreak20").style.display = "block";
}
function show25BreakTimer(){
  document.getElementById("breakTimers2").style.display = "none";
  document.getElementById("timerBreak25").style.display = "block";
}
function show30BreakTimer(){
  document.getElementById("breakTimers2").style.display = "none";
  document.getElementById("timerBreak30").style.display = "block";
}
function showNextAssignmentBtn(){
  document.getElementById("standInButton").style.display = "none";
  document.getElementById("nextAssignment").style.display = "block";
}
function skip2Div1(){
  document.getElementById("breakTimers2").style.display = "none";
  document.getElementById("1Div").style.display = "block";
}



function hideStop(){
  document.getElementById("stop").style.display = "none";
}
//this shows the next input boxes:
  function showUnderStandingCheck2(){
    document.getElementById("understandingCheck1").style.display = "none";
    document.getElementById("underStandingCheck2").style.display = "block";
}

function showUnderStandingCheck3(){
  document.getElementById("understandingCheck2").style.display = "none";
  document.getElementById("underStandingCheck3").style.display = "block";
}

    function input2Function(){
      document.getElementById("input1").style.display = "none";
      document.getElementById("input2").style.display = "block";
    }




    function input3Function() {
      document.getElementById("input2").style.display = "none";
      document.getElementById("input3").style.display = "block";
    }




    function input4Function() {
      document.getElementById("input3").style.display = "none";
      document.getElementById("input4").style.display = "block";
    }




    function input5Function() {
      document.getElementById("input4").style.display = "none";
      document.getElementById("input5").style.display = "block";
    }




    function input6Function() {
      document.getElementById("input5").style.display = "none";
      document.getElementById("input6").style.display = "block";
    }




    function input7Function() {
      document.getElementById("input6").style.display = "none";
      document.getElementById("input7").style.display = "block";
    }




    function input8Function() {
      document.getElementById("input7").style.display = "none";
      document.getElementById("input8").style.display = "block";
    }




    function input9Function() {
      document.getElementById("input8").style.display = "none";
      document.getElementById("input9").style.display = "block";
    }




    function input10Function() {
      document.getElementById("input9").style.display = "none";
      document.getElementById("input10").style.display = "block";
    }





    function input11Function() {
      document.getElementById("input10").style.display = "none";
      document.getElementById("input3").style.display = "none";
      document.getElementById("input5").style.display = "none";
      document.getElementById("doneBtn").style.display = "block";
      document.getElementById("input11").style.display = "block";
    }



function showStopDiv() {
  document.getElementById("stop").style.display = "block";
}






    function myFunction2() {
      document.getElementById("2Div").style.display = "none";
      document.getElementById("timer10").style.display = "block";
      document.getElementById("done10").style.display = "block";
    }




    function myFunction3() {
      document.getElementById("2Div").style.display = "none";
      document.getElementById("timer20").style.display = "block";
    }








    function done0Function() {
      document.getElementById("timer10").style.display = "none";
      document.getElementById("doneDiv").style.display = "block";
    }





    function done1Function() {
      document.getElementById("doneDiv").style.display = "none";
      document.getElementById("1Div").style.display = "block";
    }




    function done2Function() {
      document.getElementById("doneDiv").style.display = "none";
      document.getElementById("workDiv").style.display = "block";
    }






    function done3Function() {
      document.getElementById("timer20").style.display = "none";
      document.getElementById("doneDiv").style.display = "block";
    }





    function done4Function() {
      document.getElementById("doneDiv").style.display = "none";
      document.getElementById("1Div").style.display = "block";
    }




    function done5Function() {
      document.getElementById("doneDiv").style.display = "none";
      document.getElementById("workDiv").style.display = "block";
    }





  function organizeUnderstanding1() {
     var understanding1 = document.querySelector('input[name = "understanding1"]:checked').value;
             if (understanding1 == 'yes' ){
               document.getElementById("hardTimeOn").style.display = "block";
                document.getElementById("result1Y").innerHTML = document.getElementById('name1').innerHTML;
             } else if (understanding1 == 'kinda' ){
               document.getElementById("kindaHardTimeOn").style.display = "block";
               document.getElementById("result1K").innerHTML = document.getElementById('name1').innerHTML;
             } else if (understanding1 == 'no' ){
               document.getElementById("noHardTimeOn").style.display = "block";
               document.getElementById("result1N").innerHTML = document.getElementById('name1').innerHTML;
             } else {
               return;
             }
      }

            function organizeUnderstanding2() {
     var understanding2 = document.querySelector('input[name = "understanding2"]:checked').value;
             if (understanding2 == 'yes' ){
               document.getElementById("hardTimeOn").style.display = "block";
                document.getElementById("result2Y").innerHTML = document.getElementById('name2').innerHTML;
             } else if (understanding2 == 'kinda' ){
               document.getElementById("kindaHardTimeOn").style.display = "block";
               document.getElementById("result2K").innerHTML = document.getElementById('name2').innerHTML;
             } else if (understanding2 == 'no' ){
               document.getElementById("noHardTimeOn").style.display = "block";
               document.getElementById("result2N").innerHTML = document.getElementById('name2').innerHTML;
             } else {
               return;
             }
      }



            function organizeUnderstanding3() {
     var understanding3 = document.querySelector('input[name = "understanding3"]:checked').value;
             if (understanding3 == 'yes' ){
                document.getElementById("hardTimeOn").style.display = "block";
                document.getElementById("result3Y").innerHTML = document.getElementById('name3').innerHTML;
             } else if (understanding3 == 'kinda' ){
               document.getElementById("kindaHardTimeOn").style.display = "block";
               document.getElementById("result3K").innerHTML = document.getElementById('name3').innerHTML;
             } else if (understanding3 == 'no' ){
               document.getElementById("noHardTimeOn").style.display = "block";
               document.getElementById("result3N").innerHTML = document.getElementById('name3').innerHTML;
             } else {
               return;
             }
      }

      function organizeUnderstanding4() {
var understanding4 = document.querySelector('input[name = "understanding4"]:checked').value;
       if (understanding4 == 'yes' ){
         document.getElementById("hardTimeOn").style.display = "block";
          document.getElementById("result4Y").innerHTML = document.getElementById('name4').innerHTML;
       } else if (understanding4 == 'kinda' ){
         document.getElementById("kindaHardTimeOn").style.display = "block";
         document.getElementById("result4K").innerHTML = document.getElementById('name4').innerHTML;
       } else if (understanding4 == 'no' ){
         document.getElementById("noHardTimeOn").style.display = "block";
         document.getElementById("result4N").innerHTML = document.getElementById('name4').innerHTML;
       } else {
         return;
       }
}

function organizeUnderstanding5() {
var understanding5 = document.querySelector('input[name = "understanding5"]:checked').value;
 if (understanding5 == 'yes' ){
   document.getElementById("hardTimeOn").style.display = "block";
    document.getElementById("result5Y").innerHTML = document.getElementById('name5').innerHTML;
 } else if (understanding5 == 'kinda' ){
   document.getElementById("kindaHardTimeOn").style.display = "block";
   document.getElementById("result5K").innerHTML = document.getElementById('name5').innerHTML;
 } else if (understanding5 == 'no' ){
   document.getElementById("noHardTimeOn").style.display = "block";
   document.getElementById("result5N").innerHTML = document.getElementById('name5').innerHTML;
 } else {
   return;
 }
}

function organizeUnderstanding6() {
var understanding6 = document.querySelector('input[name = "understanding6"]:checked').value;
 if (understanding6 == 'yes' ){
   document.getElementById("hardTimeOn").style.display = "block";
    document.getElementById("result6Y").innerHTML = document.getElementById('name6').innerHTML;
 } else if (understanding6 == 'kinda' ){
   document.getElementById("kindaHardTimeOn").style.display = "block";
   document.getElementById("result6K").innerHTML = document.getElementById('name6').innerHTML;
 } else if (understanding6 == 'no' ){
   document.getElementById("noHardTimeOn").style.display = "block";
   document.getElementById("result6N").innerHTML = document.getElementById('name6').innerHTML;
 } else {
   return;
 }
}

function organizeUnderstanding7() {
var understanding7 = document.querySelector('input[name = "understanding7"]:checked').value;
 if (understanding7 == 'yes' ){
   document.getElementById("hardTimeOn").style.display = "block";
    document.getElementById("result7Y").innerHTML = document.getElementById('name7').innerHTML;
 } else if (understanding7 == 'kinda' ){
   document.getElementById("kindaHardTimeOn").style.display = "block";
   document.getElementById("result7K").innerHTML = document.getElementById('name7').innerHTML;
 } else if (understanding7 == 'no' ){
   document.getElementById("noHardTimeOn").style.display = "block";
   document.getElementById("result7N").innerHTML = document.getElementById('name7').innerHTML;
 } else {
   return;
 }
}

function organizeUnderstanding8() {
var understanding8 = document.querySelector('input[name = "understanding8"]:checked').value;
 if (understanding8 == 'yes' ){
   document.getElementById("hardTimeOn").style.display = "block";
    document.getElementById("result8Y").innerHTML = document.getElementById('name8').innerHTML;
 } else if (understanding8 == 'kinda' ){
   document.getElementById("kindaHardTimeOn").style.display = "block";
   document.getElementById("result8K").innerHTML = document.getElementById('name8').innerHTML;
 } else if (understanding8 == 'no' ){
   document.getElementById("noHardTimeOn").style.display = "block";
   document.getElementById("result8N").innerHTML = document.getElementById('name8').innerHTML;
 } else {
   return;
 }
}

function organizeUnderstanding9() {
var understanding9 = document.querySelector('input[name = "understanding9"]:checked').value;
 if (understanding9 == 'yes' ){
   document.getElementById("hardTimeOn").style.display = "block";
    document.getElementById("result9Y").innerHTML = document.getElementById('name9').innerHTML;
 } else if (understanding9 == 'kinda' ){
   document.getElementById("kindaHardTimeOn").style.display = "block";
   document.getElementById("result9K").innerHTML = document.getElementById('name9').innerHTML;
 } else if (understanding9 == 'no' ){
   document.getElementById("noHardTimeOn").style.display = "block";
   document.getElementById("result9N").innerHTML = document.getElementById('name9').innerHTML;
 } else {
   return;
 }
}

function organizeUnderstanding10() {
var understanding10 = document.querySelector('input[name = "understanding10"]:checked').value;
 if (understanding10 == 'yes' ){
   document.getElementById("hardTimeOn").style.display = "block";
    document.getElementById("result10Y").innerHTML = document.getElementById('name10').innerHTML;
 } else if (understanding10 == 'kinda' ){
   document.getElementById("kindaHardTimeOn").style.display = "block";
   document.getElementById("result10K").innerHTML = document.getElementById('name10').innerHTML;
 } else if (understanding10 == 'no' ){
   document.getElementById("noHardTimeOn").style.display = "block";
   document.getElementById("result10N").innerHTML = document.getElementById('name10').innerHTML;
 } else {
   return;
 }
}
