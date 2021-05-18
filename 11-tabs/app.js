const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // if (id) 의 뜻은 'id가 존재한다면 (==true)'로 가정
    // remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide other articles
    const article = document.getElementById(id);
    articles.forEach(function (txt) {
      txt.classList.remove("active");
      article.classList.add("active");
    });
  }
});
