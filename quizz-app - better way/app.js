const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const resultBox = document.querySelector(".result");

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 25;
    }

  });
  
  //showing the score

  scrollTo(0, 0);
  
  resultBox.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    resultBox.querySelector("span").textContent= `${output}%`;
    if(output=== score){
      clearInterval(timer);
    } else {
      output++;
    }

  }, 10);

});