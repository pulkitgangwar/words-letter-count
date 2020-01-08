const container = document.querySelector(".container");
const input = container.querySelector(".container__input");
const result = container.querySelector(".container__result");

const letterCount = () => {
  if (input.value === "") {
    return 0;
  }

  return input.value
    .split(" ")
    .join("")
    .split("").length;
};

const wordCount = () => {
  if (input.value === "") {
    return 0;
  } else if (input.value.trim().split(" ")[0] == "") {
    return 0;
  }

  return input.value.trim().split(" ").length;
};

const display = () => {
  // console.log(wordCount());
  result.innerHTML = `Letter Count : <span class="container__result--span">${letterCount()}</span> , Word Count : <span class="container__result--span">${wordCount()}</span>`;
};

display();

input.addEventListener("keyup", function() {
  display();
});
