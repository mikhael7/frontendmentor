const ratingList = document.getElementById("rating-list");
const ratingNum = document.querySelectorAll(".rating-rounded");
const thankButton = document.getElementById("btn-submit");

const thankContainer = document.getElementById("thank-you-card");
const ratingContainer = document.getElementById("rating-card");

// reference https://github.com/Alekususenpai/interactive-rating-component/blob/master/app.js

for (let val of ratingNum.length) {
  val.addEventListener("click", (item) => {
    for (let val1 of ratingNum.length) {
      val1.classList.contains("isChecked");
      val1.classList.remove("isChecked");
    }
    val.classList.add("isChecked");
  });
}

thankButton.addEventListener("click", () => {
  thankContainer.classList.remove("hidden");
  ratingContainer.classList.add("hidden");
});
