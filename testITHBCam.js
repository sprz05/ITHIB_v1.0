function myFunction1() {
  document.getElementById("1Div").style.display = "none";
  document.getElementById("2Div").style.display = "block";
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

function showUnderstandingCheck11(){
  document.getElementById("understandingCheck10").style.display = "none";
  document.getElementById("understandingCheck11").style.display = "block";
}

function showUnderstandingCheck12(){
  document.getElementById("understandingCheck11").style.display = "none";
  document.getElementById("understandingCheck12").style.display = "block";
}

function showUnderstandingCheck13(){
  document.getElementById("understandingCheck12").style.display = "none";
  document.getElementById("understandingCheck13").style.display = "block";
}

function showUnderstandingCheck14(){
  document.getElementById("understandingCheck13").style.display = "none";
  document.getElementById("understandingCheck14").style.display = "block";
}

function showUnderstandingCheck15(){
  document.getElementById("understandingCheck14").style.display = "none";
  document.getElementById("understandingCheck15").style.display = "block";
}

function showUnderstandingCheck16(){
  document.getElementById("understandingCheck15").style.display = "none";
  document.getElementById("understandingCheck16").style.display = "block";
}

function showUnderstandingCheck17(){
  document.getElementById("understandingCheck16").style.display = "none";
  document.getElementById("understandingCheck17").style.display = "block";
}

function showUnderstandingCheck18(){
  document.getElementById("understandingCheck17").style.display = "none";
  document.getElementById("understandingCheck18").style.display = "block";
}

function showUnderstandingCheck19(){
  document.getElementById("understandingCheck18").style.display = "none";
  document.getElementById("understandingCheck19").style.display = "block";
}

function showUnderstandingCheck20(){
  document.getElementById("understandingCheck19").style.display = "none";
  document.getElementById("understandingCheck20").style.display = "block";
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
                document.getElementById("result1Y").innerHTML = document.getElementById('name1').value;
             } else if (understanding1 == 'kinda' ){
               document.getElementById("result1K").innerHTML = document.getElementById('name1').value;
             } else if (understanding1 == 'no' ){
               document.getElementById("result1N").innerHTML = document.getElementById('name1').value;
             } else {
               return;
             }
      }

            function organizeUnderstanding2() {
     var understanding2 = document.querySelector('input[name = "understanding2"]:checked').value;
             if (understanding2 == 'yes' ){
                document.getElementById("result2Y").innerHTML = document.getElementById('name2').value;
             } else if (understanding2 == 'kinda' ){
               document.getElementById("result2K").innerHTML = document.getElementById('name2').value;
             } else if (understanding2 == 'no' ){
               document.getElementById("result2N").innerHTML = document.getElementById('name2').value;
             } else {
               return;
             }
      }



            function organizeUnderstanding3() {
     var understanding3 = document.querySelector('input[name = "understanding3"]:checked').value;
             if (understanding3 == 'yes' ){
                document.getElementById("result3Y").innerHTML = document.getElementById('name3').value;
             } else if (understanding3 == 'kinda' ){
               document.getElementById("result3K").innerHTML = document.getElementById('name3').value;
             } else if (understanding3 == 'no' ){
               document.getElementById("result3N").innerHTML = document.getElementById('name3').value;
             } else {
               return;
             }
      }

      function organizeUnderstanding4() {
var understanding4 = document.querySelector('input[name = "understanding4"]:checked').value;
       if (understanding4 == 'yes' ){
          document.getElementById("result4Y").innerHTML = document.getElementById('name4').value;
       } else if (understanding4 == 'kinda' ){
         document.getElementById("result4K").innerHTML = document.getElementById('name4').value;
       } else if (understanding4 == 'no' ){
         document.getElementById("result4N").innerHTML = document.getElementById('name4').value;
       } else {
         return;
       }
}

function organizeUnderstanding5() {
var understanding5 = document.querySelector('input[name = "understanding5"]:checked').value;
 if (understanding5 == 'yes' ){
    document.getElementById("result5Y").innerHTML = document.getElementById('name5').value;
 } else if (understanding5 == 'kinda' ){
   document.getElementById("result5K").innerHTML = document.getElementById('name5').value;
 } else if (understanding5 == 'no' ){
   document.getElementById("result5N").innerHTML = document.getElementById('name5').value;
 } else {
   return;
 }
}

function organizeUnderstanding6() {
var understanding6 = document.querySelector('input[name = "understanding6"]:checked').value;
 if (understanding6 == 'yes' ){
    document.getElementById("result6Y").innerHTML = document.getElementById('name6').value;
 } else if (understanding6 == 'kinda' ){
   document.getElementById("result6K").innerHTML = document.getElementById('name6').value;
 } else if (understanding6 == 'no' ){
   document.getElementById("result6N").innerHTML = document.getElementById('name6').value;
 } else {
   return;
 }
}

function organizeUnderstanding7() {
var understanding7 = document.querySelector('input[name = "understanding7"]:checked').value;
 if (understanding7 == 'yes' ){
    document.getElementById("result7Y").innerHTML = document.getElementById('name7').value;
 } else if (understanding7 == 'kinda' ){
   document.getElementById("result7K").innerHTML = document.getElementById('name7').value;
 } else if (understanding7 == 'no' ){
   document.getElementById("result7N").innerHTML = document.getElementById('name7').value;
 } else {
   return;
 }
}

function organizeUnderstanding8() {
var understanding8 = document.querySelector('input[name = "understanding8"]:checked').value;
 if (understanding8 == 'yes' ){
    document.getElementById("result8Y").innerHTML = document.getElementById('name8').value;
 } else if (understanding8 == 'kinda' ){
   document.getElementById("result8K").innerHTML = document.getElementById('name8').value;
 } else if (understanding8 == 'no' ){
   document.getElementById("result8N").innerHTML = document.getElementById('name8').value;
 } else {
   return;
 }
}

function organizeUnderstanding9() {
var understanding9 = document.querySelector('input[name = "understanding9"]:checked').value;
 if (understanding9 == 'yes' ){
    document.getElementById("result9Y").innerHTML = document.getElementById('name9').value;
 } else if (understanding9 == 'kinda' ){
   document.getElementById("result9K").innerHTML = document.getElementById('name9').value;
 } else if (understanding9 == 'no' ){
   document.getElementById("result9N").innerHTML = document.getElementById('name9').value;
 } else {
   return;
 }
}

function organizeUnderstanding10() {
var understanding10 = document.querySelector('input[name = "understanding10"]:checked').value;
 if (understanding10 == 'yes' ){
    document.getElementById("result10Y").innerHTML = document.getElementById('name10').value;
 } else if (understanding10 == 'kinda' ){
   document.getElementById("result10K").innerHTML = document.getElementById('name10').value;
 } else if (understanding10 == 'no' ){
   document.getElementById("result10N").innerHTML = document.getElementById('name10').value;
 } else {
   return;
 }
}

function organizeUnderstanding11() {
var understanding11 = document.querySelector('input[name = "understanding11"]:checked').value;
 if (understanding11 == 'yes' ){
    document.getElementById("result11Y").innerHTML = document.getElementById('name11').value;
 } else if (understanding11 == 'kinda' ){
   document.getElementById("result11K").innerHTML = document.getElementById('name11').value;
 } else if (understanding11 == 'no' ){
   document.getElementById("result11N").innerHTML = document.getElementById('name11').value;
 } else {
   return;
 }
}

function organizeUnderstanding12() {
var understanding12 = document.querySelector('input[name = "understanding12"]:checked').value;
 if (understanding12 == 'yes' ){
    document.getElementById("result12Y").innerHTML = document.getElementById('name12').value;
 } else if (understanding12 == 'kinda' ){
   document.getElementById("result12K").innerHTML = document.getElementById('name12').value;
 } else if (understanding12 == 'no' ){
   document.getElementById("result12N").innerHTML = document.getElementById('name12').value;
 } else {
   return;
 }
}

function organizeUnderstanding13() {
var understanding13 = document.querySelector('input[name = "understanding13"]:checked').value;
 if (understanding13 == 'yes' ){
    document.getElementById("result13Y").innerHTML = document.getElementById('name13').value;
 } else if (understanding13 == 'kinda' ){
   document.getElementById("result13K").innerHTML = document.getElementById('name13').value;
 } else if (understanding13 == 'no' ){
   document.getElementById("result13N").innerHTML = document.getElementById('name13').value;
 } else {
   return;
 }
}

function organizeUnderstanding14() {
var understanding14 = document.querySelector('input[name = "understanding14"]:checked').value;
 if (understanding14 == 'yes' ){
    document.getElementById("result14Y").innerHTML = document.getElementById('name14').value;
 } else if (understanding14 == 'kinda' ){
   document.getElementById("result14K").innerHTML = document.getElementById('name14').value;
 } else if (understanding14 == 'no' ){
   document.getElementById("result14N").innerHTML = document.getElementById('name14').value;
 } else {
   return;
 }
}

function organizeUnderstanding15() {
var understanding15 = document.querySelector('input[name = "understanding15"]:checked').value;
 if (understanding15 == 'yes' ){
    document.getElementById("result15Y").innerHTML = document.getElementById('name15').value;
 } else if (understanding15 == 'kinda' ){
   document.getElementById("result15K").innerHTML = document.getElementById('name15').value;
 } else if (understanding15 == 'no' ){
   document.getElementById("result15N").innerHTML = document.getElementById('name15').value;
 } else {
   return;
 }
}

function organizeUnderstanding16() {
var understanding16 = document.querySelector('input[name = "understanding16"]:checked').value;
 if (understanding16 == 'yes' ){
    document.getElementById("result16Y").innerHTML = document.getElementById('name16').value;
 } else if (understanding16 == 'kinda' ){
   document.getElementById("result16K").innerHTML = document.getElementById('name16').value;
 } else if (understanding16 == 'no' ){
   document.getElementById("result16N").innerHTML = document.getElementById('name16').value;
 } else {
   return;
 }
}

function organizeUnderstanding17() {
var understanding17 = document.querySelector('input[name = "understanding17"]:checked').value;
 if (understanding17 == 'yes' ){
    document.getElementById("result17Y").innerHTML = document.getElementById('name17').value;
 } else if (understanding17 == 'kinda' ){
   document.getElementById("result17K").innerHTML = document.getElementById('name17').value;
 } else if (understanding17 == 'no' ){
   document.getElementById("result17N").innerHTML = document.getElementById('name17').value;
 } else {
   return;
 }
}

function organizeUnderstanding18() {
var understanding18 = document.querySelector('input[name = "understanding18"]:checked').value;
 if (understanding18 == 'yes' ){
    document.getElementById("result18Y").innerHTML = document.getElementById('name18').value;
 } else if (understanding18 == 'kinda' ){
   document.getElementById("result18K").innerHTML = document.getElementById('name18').value;
 } else if (understanding18 == 'no' ){
   document.getElementById("result18N").innerHTML = document.getElementById('name18').value;
 } else {
   return;
 }
}

function organizeUnderstanding19() {
var understanding19 = document.querySelector('input[name = "understanding19"]:checked').value;
 if (understanding19 == 'yes' ){
    document.getElementById("result19Y").innerHTML = document.getElementById('name19').value;
 } else if (understanding19 == 'kinda' ){
   document.getElementById("result19K").innerHTML = document.getElementById('name19').value;
 } else if (understanding19 == 'no' ){
   document.getElementById("result19N").innerHTML = document.getElementById('name19').value;
 } else {
   return;
 }
}

function organizeUnderstanding20() {
var understanding20 = document.querySelector('input[name = "understanding20"]:checked').value;
 if (understanding20 == 'yes' ){
    document.getElementById("result20Y").innerHTML = document.getElementById('name20').value;
 } else if (understanding20 == 'kinda' ){
   document.getElementById("result20K").innerHTML = document.getElementById('name20').value;
 } else if (understanding20 == 'no' ){
   document.getElementById("result20N").innerHTML = document.getElementById('name20').value;
 } else {
   return;
 }
}
