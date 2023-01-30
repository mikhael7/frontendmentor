const shareButton = document.getElementById("share-button");
const cardFooter = document.querySelector(".card-footer");

console.log(shareButton, cardFooter);

shareButton.onclick = function () {
  cardFooter.classList.add("hidden");
};
