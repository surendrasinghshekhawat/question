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

 let count = 0;

    function printQuestion(obj) {
      const questionPara = document.getElementById("question");
      const options = document.querySelectorAll(".option");

      questionPara.innerText = obj.question;
      options.forEach((option, index) => {
        option.innerText = obj.options[index];
      });
    }

    function showNextQuestion() {
      if (count >= data.length) {
        clearInterval(intervalId);
        return;
      }
      printQuestion(data[count]);
      count++;
    }

    const questionPara = document.getElementById("question");
    showNextQuestion();
    const intervalId = setInterval(showNextQuestion, 4000);