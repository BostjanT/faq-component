const contents = document.querySelectorAll(".content");

contents.forEach((content) => {
  content.addEventListener("click", () => {
    const answer = document.querySelector("answer");
    content.classList.toggle("active");
    answer.style.maxHeight = answer.scrollHeight + "px";
  });
});
