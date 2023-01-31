const shareButton = document.getElementById("share-button");
const cardFooter = document.querySelector(".card-footer");
const cardAuthor = document.querySelector(".card-author");
const cardShare = document.querySelector(".card-share");

shareButton.onclick = function () {
  cardFooter.classList.add("bg-primary");
  cardAuthor.classList.add("hidden");
  cardShare.classList.remove("hidden");
  return 0;
};
