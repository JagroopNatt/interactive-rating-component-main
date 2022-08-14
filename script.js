"use srict";

const firstSection = document.querySelector(".first-section");

const thankSection = document.querySelector(".thanks");

const ratings = document.querySelectorAll(".rating");

const submitBtn = document.querySelector(".submit");

const number = document.querySelector(".number");

submitBtn.addEventListener("click", function () {
  thankSection.classList.remove("hide");
  firstSection.classList.add("hide");
});

ratings.forEach(function (rating) {
  rating.addEventListener("click", function (e) {
    number.innerHTML = rating.innerHTML;
  });
});
