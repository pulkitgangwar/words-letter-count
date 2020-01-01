const container = document.querySelector(".container");
const input = container.querySelector(".container__input");
const result = container.querySelector(".container__result");



window.onload = () => {
  display();
  setInterval(display, 10);
};

const letterCount = () => {
  if (input.value === "") {
    return 0;
  }

  return input.value.split(" ").join("").split("").length;
};

const wordCount = () => {
  if (input.value === "") {
    return 0;
  }

  return input.value.split(" ").length;
};

const display = () => {
    // console.log(wordCount());
  result.innerHTML = `Letter Count : <span class="container__result--span">${letterCount()}</span> , Word Count : <span class="container__result--span">${wordCount()}</span>`;
};