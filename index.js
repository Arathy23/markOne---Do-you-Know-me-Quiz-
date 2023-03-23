var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ");
console.log ("Welcome " + userName + " let's take a quiz on how well you know me ");
console.log ("------------------------------------------------------");


var questionList = [
  {
    question: "Where do I live ? ",
    answer: "Mumbai"
  },
  {
    question: "What is my favourite cuisine ? ",
    answer: "Indian"
  },
  {
    question: "Who is my favourite actor ? ",
    answer: "Shahrukh Khan"
  },
  {
    question: "What is my hobby ? ",
    answer: "Listening Songs"
  },
  {
    question: "Where is my native place ? ",
    answer: "Kerala"
  }
]
var score = 0;

function play(question, answer) {
  var userAns = readlineSync.question(question);

  if (userAns === answer) {
    console.log("You are right");
    score = score + 1;
  }
  else {
    console.log("You are wrong");
    console.log("Right answer is :", answer);
  }

  console.log("Current Score is :", score);
  console.log("------------------------");
}

for (i = 0; i < questionList.length; i++) {

  play(questionList[i].question, questionList[i].answer)
}

console.log("Yay final score is :", score);