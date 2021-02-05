const questions = [
{
  question: 
  `What is a correct syntax to output "Hello World" in Python?`,
  answers:{
    1: `echo "Hello World"`,
    2: `p("Hello World")`,
    3: `echo("Hello World");`,
    4: `print("Hello World")`,
},
correctAnswer: 4
},

{
  question: 
  `How do you insert COMMENTS in Python code?`,
  answers:{
    1: `/*This is a comment*/`,
    2: `#This is a comment`,
    3: `//This is a comment`,
    4: `""This is a comment`,
  },
  correctAnswer: 2
},

{
  question: 
  `What is the correct file extension for Python files?`,
  answers:{
    1: `.pyt`,
    2: `.pt`,
    3: `.py`,
    4: `.pyth`,
  },
  correctAnswer: 3
},

{
  question: 
  `What is the correct syntax to output the type of a variable or object in Python?`,
  answers:{
    1: `print(typeof(x))`,
    2: `print(typeOf(x))`,
    3: `print(typeof x)`,
    4: `print(type(x))`,
  },
  correctAnswer: 4
},

{
  question: 
  `Which method can be used to return a string in upper case letters?`,
  answers:{
    1: `toUpperCase()`,
    2: `upperCase()`,
    3: `uppercase()`,
    4: `upper()`,
  },
  correctAnswer: 4
},

{
question: 
`Which method can be used to replace parts of a string?`,
answers:{
  1: `repl()`,
  2: `replaceString()`,
  3: `replace()`,
  4: `switch()`,
},
correctAnswer: 3
},

{
  question: 
  `Which operator is used to multiply numbers?`,
  answers:{
    1: `#`,
    2: `x`,
    3: `%`,
    4: `*`,
  },
  correctAnswer: 4
},

{
  question: 
  `Which operator can be used to compare two values?`,
  answers:{
    1: `<>`,
    2: `==`,
    3: `=`,
    4: `><`,
  },
  correctAnswer: 2
},

{
  question: 
  `Which of these collections defines a LIST?`,
  answers:{
    1: `["apple", "banana", "cherry"]`,
    2: `("apple", "banana", "cherry")`,
    3: `{"name": "apple", "color": "green"}`,
    4: `{"apple", "banana", "cherry"}`,
  },
  correctAnswer: 1
},

{
  question: 
  `How do you start writing a while loop in Python?`,
  answers:{
    1: `while x > y {`,
    2: `x > y while {`,
    3: `while (x > y)`,
    4: `while x > y:`,
  },
  correctAnswer: 4
}
] 

var points = 0;

//questions pool

var questionsArray = [0,1,2,3,4,5,6,7,8,9]

//loading questions and answers

function loadQuestion(){
  randomQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
  let ques = document.createElement("span");
  ques.innerHTML = questions[randomQuestion].question;
  document.getElementById("question").appendChild(ques);
  
  for(let i=1; i<5; i++){
    let ans = document.createElement("span");
    ans.innerHTML = questions[randomQuestion].answers[i];
    document.getElementById(i).appendChild(ans);
  }

  //deleting question from pool

  let index = questionsArray.indexOf(randomQuestion)
  questionsArray.splice(index, 1);

}

//removing previous question and answers

function clear(){
  document.getElementById('question').removeChild(document.getElementById('question').childNodes[0]);
  document.getElementById('1').removeChild(document.getElementById('1').childNodes[0]);
  document.getElementById('2').removeChild(document.getElementById('2').childNodes[0]);
  document.getElementById('3').removeChild(document.getElementById('3').childNodes[0]);
  document.getElementById('4').removeChild(document.getElementById('4').childNodes[0]);
}

//displaying score

function score(){
  document.getElementById("question").style.display="none";
  document.getElementById("answers").style.display="none";
  let span = document.createElement("span");
  span.innerHTML = `score: ${points}`;
  document.getElementById("questContainer").appendChild(span);
  document.getElementById('questContainer').classList.add("questContainerScore");

}

window.onload = function() {
  loadQuestion();
};

function submit(id){
  
  let correct=questions[randomQuestion].correctAnswer;
  if(correct == id){
    points+=1;
  }
  if(questionsArray.length!=0){
    clear()
    loadQuestion()
  }
  else{
    score()
  }
}

