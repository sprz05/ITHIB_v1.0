$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'hover'
    });
});


 function showSavedHOBIframe(){
        document.getElementById("savedHOBList").style.display = "block";
        document.getElementById("makeHobList").style.display = "none";
        document.getElementById("hobShowIframeQ").style.display = "none";
        document.getElementById("goBckHobQ").style.display = "block";
      }

       function showHOBIframe(){
        document.getElementById("savedHOBList").style.display = "none";
        document.getElementById("makeHobList").style.display = "block";
        document.getElementById("hobShowIframeQ").style.display = "none";
        document.getElementById("goBckHobQ").style.display = "block";
      }

      function goBackToHOBQ(){
                document.getElementById("goBckHobQ").style.display = "none";
        document.getElementById("savedHOBList").style.display = "none";
        document.getElementById("makeHobList").style.display = "none";
        document.getElementById("hobShowIframeQ").style.display = "block";
      }



       //Make the DIV element draggagle:
    dragElement(document.getElementById("mydiv"));
    dragElement(document.getElementById("mydiv2"));
    dragElement(document.getElementById("mydiv3"));
    dragElement(document.getElementById("mydiv4"));


    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }




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
      beepCount = 0;             
      document.getElementById("beepAudio").play();
    }
  }, 1000);
}

document.getElementById("beepAudio").src = "http://soundbible.com/grab.php?id=1252&type=mp3";
    document.getElementById("beepAudio").load();

 function resetTimer(){
      clearInterval(timerId);
      document.getElementById("beepAudio").pause();
    }

 function stopTimer() {
      clearInterval(timerId);
      document.getElementById("beepAudio").pause();
    }


    let beepCount = 0;
document.getElementById("beepAudio").addEventListener("ended", () => {
    beepCount++;
    if(beepCount < 100){       
        document.getElementById("beepAudio").play();
    } else {
          alert("times up!");
    }
});


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
      

      
        function showDoneDiv(){
          document.getElementById("doneDiv").style.display = "block";
          document.getElementById("2Div").style.display = "none";
          document.getElementById("hwTimer10").style.display = "none";
          document.getElementById("hwTimer15").style.display = "none";
          document.getElementById("hwTimer20").style.display = "none";
          document.getElementById("hwTimer25").style.display = "none";
          document.getElementById("hwTimer30").style.display = "none";
          document.getElementById("hwTimer35").style.display = "none";
          document.getElementById("hwTimer40").style.display = "none";
        }

      

      
        function showDoneDiv20(){
          document.getElementById("timer20").style.display = "none";
          document.getElementById("doneDiv").style.display = "block";
        }
      

      
        function showDoneDiv30(){
          document.getElementById("timer30").style.display = "none";
          document.getElementById("doneDiv").style.display = "block";
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
      


   function hideNotDoneBtn(){
            document.getElementById("notDone").style.display="none";
          }
          function hideNextAssignmentBtn(){
            document.getElementById("nextAssignment").style.display="none";
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

      function skipDiv1First(){
        document.getElementById("breakTimers").style.display = "none";
        document.getElementById("1Div").style.display = "block";
      }


       function showBreakTimers(){
              document.getElementById("doneDiv").style.display = "none";
              document.getElementById("breakTimers").style.display = "block";
            }

            function showBreakTimersAnotherAssignment(){
              document.getElementById("doneDiv").style.display = "none";
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
  document.getElementById("stopDIV").style.display = "none";
}
//this shows what they worked on:


    function workOn() {
      document.getElementById("result1").innerHTML = document.getElementById('name1').value;
      document.getElementById("result2").innerHTML = document.getElementById('name2').value;
      document.getElementById("result3").innerHTML = document.getElementById('name3').value;
      document.getElementById("result4").innerHTML = document.getElementById('name4').value;
      document.getElementById("result5").innerHTML = document.getElementById('name5').value;
      document.getElementById("result6").innerHTML = document.getElementById('name6').value;
      document.getElementById("result7").innerHTML = document.getElementById('name7').value;
      document.getElementById("result8").innerHTML = document.getElementById('name8').value;
      document.getElementById("result9").innerHTML = document.getElementById('name9').value;
      document.getElementById("result10").innerHTML = document.getElementById('name10').value;
      document.getElementById("result11").innerHTML = document.getElementById('name11').value;
      document.getElementById("result12").innerHTML = document.getElementById('name12').value;
      document.getElementById("result13").innerHTML = document.getElementById('name13').value;
      document.getElementById("result14").innerHTML = document.getElementById('name14').value;
      document.getElementById("result15").innerHTML = document.getElementById('name15').value;
      document.getElementById("result16").innerHTML = document.getElementById('name16').value;
      document.getElementById("result17").innerHTML = document.getElementById('name17').value;
      document.getElementById("result18").innerHTML = document.getElementById('name18').value;
      document.getElementById("result19").innerHTML = document.getElementById('name19').value;
      document.getElementById("result20").innerHTML = document.getElementById('name20').value;
    }





    var timeSpentOnCurrentAssignment;
    var resultOfSpentTimeOnAssignment; 

  	function spentTimeOn(){
  		document.getElementById(resultOfSpentTimeOnAssignment).innerHTML = timeSpentOnCurrentAssignment;
  	}


     function input2Function() {
      document.getElementById("input1").style.display = "none";
      document.getElementById("input2").style.display = "block";
      resultOfSpentTimeOnAssignment = document.getElementById("spentTime1");
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

  

  
    function input12Function() {
      document.getElementById("input11").style.display = "none";
      document.getElementById("input12").style.display = "block";
    }

  

  
    function input13Function() {
      document.getElementById("input12").style.display = "none";
      document.getElementById("input13").style.display = "block";
    }

  

  
    function input14Function() {
      document.getElementById("input13").style.display = "none";
      document.getElementById("input14").style.display = "block";
    }

  

  
    function input15Function() {
      document.getElementById("input14").style.display = "none";
      document.getElementById("input15").style.display = "block";
    }

  

  
    function input16Function() {
      document.getElementById("input15").style.display = "none";
      document.getElementById("input16").style.display = "block";
    }

  

  
    function input17Function() {
      document.getElementById("input16").style.display = "none";
      document.getElementById("input17").style.display = "block";
    }

  

  
    function input18Function() {
      document.getElementById("input17").style.display = "none";
      document.getElementById("input18").style.display = "block";
    }

  

  
    function input19Function() {
      document.getElementById("input18").style.display = "none";
      document.getElementById("input19").style.display = "block";
    }

  

  
    function input20Function() {
      document.getElementById("input19").style.display = "none";
      document.getElementById("input20").style.display = "block";
    }

  

  
    function input21Function() {
      document.getElementById("input20").style.display = "none";
      document.getElementById("stopDIV").style.display = "block";
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

  