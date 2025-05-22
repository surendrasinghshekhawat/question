const data = [
  {
    question: "What is the capital of India?",
    answer: "New Delhi",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
  },
  {
    question: "What is the capital of Nepal?",
    answer: "Kathmandu",
    options: ["Kathmandu", "Pokhara", "Lalitpur", "Bharatpur"],
  },
  {
    question: "What is the capital of Pakistan?",
    answer: "Islamabad",
    options: ["Karachi", "Rawalpindi", "Islamabad", "Multan"],
  },
];
setInterval(() => {
const questionElem = document.getElementById("question");
const optionsElems = document.querySelectorAll(".option");
const answerElem = document.getElementById("answer");

function displayQuestion() {
  const randomIndex = Math.floor(Math.random() * data.length);
  const currentQuestion = data[randomIndex];

  questionElem.textContent = currentQuestion.question;

  optionsElems.forEach((optionElem, index) => {

    optionElem.textContent = currentQuestion.options[index];
  });
  
  answerElem.textContent = "Answer: " + currentQuestion.answer;

}
displayQuestion();

}, 2000);

