const previousButton = document.querySelectorAll(".previous");
const nextButton = document.querySelectorAll(".next");

const personOne = document.querySelector(".person-1");
const personTwo = document.querySelector(".person-2");

previousButton.forEach((button) => {
  button.addEventListener("click", () => {
    personOne.classList.add("active");
    personTwo.classList.remove("active");
  });
});

nextButton.forEach((button) => {
  button.addEventListener("click", () => {
    personTwo.classList.add("active");
    personOne.classList.remove("active");
  });
});
