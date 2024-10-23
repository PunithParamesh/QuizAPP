const questionObj = [
  {
    correctAnswer: 'Mars',
    options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    question: "Which planet in our solar system is known as the Red Planet?",
  },
  {
    correctAnswer: 'Au',
    options: ['Go', 'Au', 'Fe', 'Ag'],
    question: "What is the chemical symbol for gold?",
  },
  {
    correctAnswer: '1912',
    options: ['1912', '1905', '1915', '1920'],
    question: "In which year did the Titanic sink?",
  },
  {
    correctAnswer: 'Strawberry',
    options: ['Kiwi', 'Strawberry', 'Raspberry', 'Blueberry'],
    question: "What is the only fruit that has its seeds on the outside?",
  }
];

let currentQuestion = 0;
let score = 0;
let totalscore=questionObj.length;
const nextel=document.getElementById('next');
nextel.addEventListener("click",()=>{
  
  nextquestion();
})
function showquestion()  {
  const { correctAnswer, options, question } = questionObj[currentQuestion];

  const questionEl = document.getElementById("question");
  questionEl.textContent = question;

  const shuffledOptions = shuffle(options);

  const optionsEl = document.getElementById("options");
  optionsEl.textContent = ''; // Clear previous options
  shuffledOptions.forEach((element) => {
    const option = document.createElement("button");
    option.textContent = element;
    optionsEl.appendChild(option);

    option.addEventListener("click", () => {
      if (element === correctAnswer) score++;
      else score = score - 0.25;

      const scoreEl = document.getElementById("score");
      scoreEl.textContent = `Score: ${score}/${totalscore}`;
      nextquestion();
    });
  });
}

function nextquestion() {
  currentQuestion++;
  if (currentQuestion >= questionObj.length) {
    const questionEl = document.getElementById("question");
    questionEl.textContent = "Quiz completed";
    const optionsEl=document.getElementById("options");
    optionsEl.textContent = '';
    nextel.remove();
  } else {
    showquestion();
  }
}

function shuffle(inputs) {
  for (let i = inputs.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [inputs[i], inputs[j]] = [inputs[j], inputs[i]];
  }
  return inputs;
}

window.onload = function() {
  showquestion();
};
