var readlineSync = require('readline-sync');


var UserName = readlineSync.question('what is your name')

console.log("welcome " + UserName + " how well you know chhatrapal ")
var score = 0
const Play = (question,answer) =>{
  var userAnswer = readlineSync.question(question)
  if(userAnswer === answer){
    console.log('right')
    score = score +1;
    console.log(`your score is ${score}`)
    console.log('--------------')
  }else{
     console.log('wrong')
     score = score - 1;
    console.log(`your score is ${score}`)
    console.log('--------------')
  }

  console.log(`your current score is ${score}`)
}


questions = [{
  question:"which is chhatrapal's favouite movie?",
  answer :"dhruva"
},
{
  question:"which is chhatrapal's favouite color?",
  answer :"blue"
},{
  question:"which is chhatrapal's best place to visit?",
  answer :"leh-ladakh"
},{
  question:"what is chhatrapal's new vision?",
  answer :"great software developer"
},{
  question:"chhatrapal's date of birth",
  answer :"18 nov 1997"
},
]

for(var i=0;i<questions.length;i++){
  var ques = questions[i]
  Play(ques.question,ques.answer)
}   