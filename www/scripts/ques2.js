function ScoreDown(){
    current = 300;
    nuggets = nuggets - current
    document.getElementById("scoreNuggets").innerHTML = "Score: " + nuggets + "points";
}
function Navigating(pageName){
    window.location= pageName;
}
var nuggets = 0;
var current;

function increaseScore(){
    current = 300;
    nuggets = nuggets + current;
    document.getElementById("scoreNuggets").innerHTML = "Score:" + nuggets;
}
function Incorrect(){
    //grab the element we want to manipulate
    var wrongAnswer = document.getElementById("wrong1");
    wrongAnswer.style.color = "red";
 ScoreDown();
}
function Incorrect2(){
    //grab the element we want to manipulate
    var wrongAnswer = document.getElementById("wrong2");
    wrongAnswer.style.color = "red";
 ScoreDown();
}
function Incorrect3(){
    //grab the element we want to manipulate
    var wrongAnswer = document.getElementById("wrong3");
    wrongAnswer.style.color = "red";
 ScoreDown();
}
function Correct1(){
    //grab the element we want to manipulate
    var rightAnswer = document.getElementById("right1");
    rightAnswer.style.color = "blue";
    increaseScore();
    Navigating("ques3.html");
 // window.setTimeout(Navigation("ques2.html") , 5)
 
}
function Incorrect(){
    //grab the element we want to manipulate
    var wrongAnswer = document.getElementById("wrong1");
    wrongAnswer.style.color = "red";
    ScoreDown();
}

