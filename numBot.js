var count;

function check() {
  var numAssignments = document.getElementById('numAssignments');
    if (numAssignments.value > 19 || numAssignments.value < 1){
      alert("Try doing 1-19 assignments");
  } else {
    showGoal4();
    showNumGoalList();
  }
}


function showNumGoalList(){
  document.getElementById('goalNumForm').style.display = "none";
  document.getElementById('goalList').style.display = "block";
  document.getElementById('okayBtn').style.display="block";
}

function show1Div(){
  document.getElementById('div0').style.display = "none";
  document.getElementById('1Div').style.display = "block";
}


function showGoal4(){
  document.getElementById("goal4Output").innerHTML = document.getElementById('numAssignments').value;
}



function onlyShowGoals(){
  document.getElementById('div0').style.display="none";
  document.getElementById('okayBtn').style.display="none";
  document.getElementById('goalList').style.display="block";
}

function plusOne(){
  var countText = document.getElementById('countText');
  count++;
  countText.innerHTML++;
}

function showCompletedGoalTxt(){
  document.getElementById('completedGoalTxt').style.display="block";
}

function showAlmostThereTxt(){
  document.getElementById('almostThereTxt').style.display="block";
}

function goalNumCheck(){
  var numAssignments = document.getElementById('numAssignments');
  if (count == numAssignments.value){
    showCompletedGoalTxt();
  } else {
    showAlmostThereTxt();
  }
}
