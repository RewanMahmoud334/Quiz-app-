const countSpan = document.querySelector(".count span")
const bulletsSpan = document.querySelector(".bullets .spans")
const quizArea = document.querySelector(".quiz-area")
const header = document.querySelector(".header")
const answerArea = document.querySelector(".answers-area")
const submitBtn = document.querySelector(".submit-button")
const scoreSpan = document.querySelector(".score span")



const Question = [
  {
    "title": "Why We Use &lt;br&gt; Element",
    "answer_1": "To Make Text Bold",
    "answer_2": "To Make Text Italic",
    "answer_3": "To Add Breakline",
    "answer_4": "To Create Horizontal Line",
    "right_answer": "To Add Breakline"
  },
  {
    "title": "Is &lt;img&gt; Element Has Attribute href",
    "answer_1": "Yes",
    "answer_2": "No Its For Anchor Tag &lt;a&gt;",
    "answer_3": "All Elements Has This Attribute",
    "answer_4": "Answer 1 And 3 Is Right",
    "right_answer": "No Its For Anchor Tag&lt;a&gt;"
  },
  {
    "title": "How Can We Make Element Text Bold",
    "answer_1": "Putting It Inside &lt;b&gt;Tag",
    "answer_2": "Putting It Inside &lt;strong&gt; Tag",
    "answer_3": "Customizing It With Font-Weight Property In CSS",
    "answer_4": "All Answers Is Right",
    "right_answer": "All Answers Is Right"
  },
  {
    "title": "What Is The Right Hierarchy For Creating Part Of Page",
    "answer_1": " &lt;h2&gt; Then &lt;p&gt; Then &lt;h1&gt; Then &lt;p&gt; Then &lt;h3&gt; Then &lt;p&gt; Then &lt;img&gt;",
    "answer_2": "&lt;h1&gt; Then &lt;p&gt; Then &lt;h3&gt; Then &lt;p&gt; Then &lt;h2&gt; Then &lt;p&gt; Then &lt;img&gt;",
    "answer_3": "&lt;h2&gt; Then &lt;p&gt; Then &lt;h3&gt; Then &lt;p&gt; Then &lt;h1&gt; Then &lt;p&gt; Then &lt;img&gt;",
    "answer_4": "All Solutions Is Wrong",
    "right_answer": "All Solutions Is Wrong"
  },
  {
    "title": "How Can We Include External Page Inside Our HTML Page",
    "answer_1": "By Using Include in HTML",
    "answer_2": "By Using Load In HTML",
    "answer_3": "By Using iFrame Tag",
    "answer_4": "All Solutions Is Wrong",
    "right_answer": "By Using iFrame Tag"
  },
  {
    "title": "What Is The Tag That Not Exists in HTML",
    "answer_1": "&lt;object&gt;",
    "answer_2": "&lt;basefont&gt;",
    "answer_3": "&lt;abbr&gt;",
    "answer_4": "All Tags Is Exists in HTML",
    "right_answer": "All Tags Is Exists in HTML"
  },
  {
    "title": "How We Specify Document Type Of HTML5 Page",
    "answer_1": "&lt;DOCTYPE html&gt;",
    "answer_2": "&lt;DOCTYPE html5&gt;",
    "answer_3": "&lt;!DOCTYPE html5&gt;",
    "answer_4": "&lt;!DOCTYPE html&gt;",
    "right_answer": "&lt;!DOCTYPE html&gt;"
  },
  {
    "title": "What Is The Element Thats Not Exists in HTML5 Semantics",
    "answer_1": "&lt;article&gt;",
    "answer_2": "&lt;section&gt;",
    "answer_3": "&lt;blockquote&gt;",
    "answer_4": "&lt;aside&gt;",
    "right_answer": "&lt;blockquote&gt;"
  },
  {
    "title": "In HTML Can We Use This Way To Add Attributes",
    "answer_1": "&lt;div class='class-name'&gt;",
    "answer_2": "&lt;div class=class-name&gt;",
    "answer_3": "&lt;div class=\"class-name\"&gt;",
    "answer_4": "All Is Right",
    "right_answer": "All Is Right"
  }
]


let questionNumber = 0;
let score = 0;



// handleBullets()
function createSpan() {
  countSpan.innerHTML = Question.length
  for (let i = 0; i < Question.length; i++) {
    const span = document.createElement("span");
    bulletsSpan.append(span);


    if(i==0){[
      span.classList.add("on")
    ]}
  }
}

createSpan()
function showData() {
  header.innerHTML = "";
  answerArea.innerHTML = "";
  const qestionHeader = document.createElement("h2");
  qestionHeader.innerHTML = Question[questionNumber].title;
  header.appendChild(qestionHeader);
  for (i = 1; i <= 4; i++) {
    const input = document.createElement("input");
    input.type = "radio";
    input.id = `answer_${i}`;
    input.name = "question";
    const label = document.createElement("label");
    label.htmlFor = `answer_${i}`;
    label.innerHTML = Question[questionNumber][`answer_${i}`];
    const answer = document.createElement("div");
    answer.classList.add("answer");
    input.dataset.answerQuestion = Question[questionNumber][`answer_${i}`];
    answer.appendChild(input);
    answer.appendChild(label);
    answerArea.appendChild(answer);

  }

}

showData()

submitBtn.addEventListener("click", function () {
  const rightAnswer = Question[questionNumber].right_answer;
  checkAnswer(rightAnswer)
  handleBullets()
  countDown()
  
  console.log(rightAnswer)
  setTimeout(() => {
    questionNumber++;
    if (questionNumber < Question.length) {
      showData()
    }
    else {
      quizArea.innerHTML = `<h2>Quiz Finished</h2>
      <h3>Score:${score}</h3>
      `;
    }
  }, 1000);
})

function checkAnswer(rAnswer) {
  const AnswerInput = document.getElementsByName("question");
  let currentAnswer;
  let answerContainer;
  let selectedInput;
  let selectedLabel;
      let rightInput;
  let rightLabel;
  for(let i = 0; i < AnswerInput.length; i++){
if(AnswerInput[i].dataset.answerQuestion==rAnswer){
  rightInput=AnswerInput[i]
  rightLabel=document.querySelector(`label[for=${rightInput.id}]`)
}
  }


  if(rightInput && rightLabel){
    rightInput.style.accentColor = "green";
      rightLabel.style.color = "green";
  }

  if(!selectedInput){

      if (rightInput && rightLabel) {
      rightInput.style.accentColor = "green";
      rightLabel.style.color = "green";
    }
    return;

  }
  for (let i = 0; i < AnswerInput.length; i++) {
    if (AnswerInput[i].checked) {
      currentAnswer = AnswerInput[i].dataset.answerQuestion;
      answerContainer = AnswerInput[i].closest(".answer");
      selectedInput=AnswerInput[i];
      selectedLabel=document.querySelector(`label[for=${selectedInput.id}]`)
      break;

    }

  }


  if (currentAnswer === rAnswer) {
    score++;
    scoreSpan.innerHTML = score;
    selectedInput.style.accentColor="green"
    selectedLabel.style.color="green"
  
  }

  else{
    selectedInput.style.accentColor="red"
    selectedLabel.style.color="red"
    
  }


}


function handleBullets(){
const spans=document.querySelectorAll(".spans span");
const arrayOfSpan=Array.from(spans);
arrayOfSpan.forEach((span,index)=>{
  if(questionNumber==index){
      span.classList.add("on")
  }
})
}



const Timer=document.querySelector(".timer");
let time;
let questionTime=15;

function countDown(){
  let timeLeft=questionTime;
  Timer.innerHTML=timeLeft;

  time=setInterval(() => {
      timeLeft--;
      Timer.innerHTML=timeLeft;

      if(timeLeft<=5){
        Timer.style.color="red";
      }

      if(timeLeft<=0){
clearInterval(time)
checkAnswer()
submitBtn.click();
      }
  }, 1000);
}
countDown()