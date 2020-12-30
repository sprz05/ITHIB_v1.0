function showGoalList(){
  document.getElementById('goalForm').style.display = "none";
  document.getElementById('goalList').style.display = "block";
  document.getElementById('goalAdviceDiv').style.display = "block";
  document.getElementById('newGoalBtn').style.display = "block";
  goal1();
  goal2();
  goal3();
  goal4();
}

function goal1() {
  var goal1 = document.getElementById('goal1');
    if (goal1.checked == true){
      showGoal1();
  } else {
    dontShowGoal1();
  }
}

function goal2() {
  var goal2 = document.getElementById('goal2');
    if (goal2.checked == true){
      showGoal2();
  } else {
    dontShowGoal2();
  }
}

function goal3() {
  var goal3 = document.getElementById('goal3');
    if (goal3.checked == true){
      showGoal3();
  } else {
    dontShowGoal3();
  }
}

function goal4() {
  var goal4 = document.getElementById('goal4');
    if (goal4.checked == true){
      showGoal4();
  } else {
      dontShowGoal4();
  }
}


function check() {
  document.getElementById("goal4").checked = true;
}

function showGoal1(){
  document.getElementById('goal1Ad').style.display="block";
  document.getElementById('goal1Echo').style.display="block"
}

function dontShowGoal1(){
  document.getElementById('goal1Ad').style.display="none";
  document.getElementById('goal1Echo').style.display="none"
}

function showGoal2(){
  document.getElementById('goal2Ad').style.display="block";
  document.getElementById('goal2Echo').style.display="block";
}

function dontShowGoal2(){
  document.getElementById('goal2Ad').style.display="none";
  document.getElementById('goal2Echo').style.display="none"
}

function showGoal3(){
  document.getElementById('goal3Ad').style.display="block";
  document.getElementById('goal3Echo').style.display="block"
}

function dontShowGoal3(){
  document.getElementById('goal3Ad').style.display="none";
  document.getElementById('goal3Echo').style.display="none"
}

function showGoal4(){
  document.getElementById("goal4Output").innerHTML = document.getElementById('goal4Input').value;
  document.getElementById('goal4Echo').style.display="block"
}

function dontShowGoal4(){
  document.getElementById('goal4Echo').style.display="none";
}


function onlyShowGoals(){
  document.getElementById('goalAdviceDiv').style.display="none";
  document.getElementById('goalForm').style.display="none";
  document.getElementById('goalList').style.display="block";
}

function search() {
  var str = document.getElementById('goal4Input').value;

  if (str.includes("project") || str.includes("PROJECT") || str.includes("Project")) {
     document.getElementById("PHOB").style.display = "block";
  } else if (str.includes("Productive") || str.includes("productive") || str.includes("PRODUCTIVE")) {
    document.getElementById("HOB").style.display = "block";
    document.getElementById("ITHB").style.display = "block";
  } else if (str.includes("Week") || str.includes("week") || str.includes("WEEK") || str.includes("Plan") || str.includes("plan")) {
    document.getElementById("WHOB").style.display = "block";
  } else if (str.includes("Test") || str.includes("test") || str.includes("TEST") || str.includes("Study") || str.includes("study")) {
    document.getElementById("ITHBTest").style.display = "block";
  } else if (str == null || str == "" || str == " ") {
    console.log("No other goals >>>")
  } else {
    document.getElementById("SLAB").style.display = "block";
  }

}