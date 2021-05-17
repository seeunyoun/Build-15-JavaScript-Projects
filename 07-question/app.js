// 두 가지 방법이 있는데,
// 나머지 하나는 forEach에 콜백함수 인자를 다르게 적용해서 컨트롤 하는 법 using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

// 하나는 돔트리를 제어해서 컨트롤 하는 법 traversing the dom

// const btns = document.querySelectorAll(".question-btn");

//   btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       const question = e.currentTarget.parentElement.parentElement;
//       question.classList.toggle("show-text");
//     });
//   });
