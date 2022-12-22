const buttonAccordion = document.getElementsByClassName("accordion");

for (let i = 0; i < buttonAccordion.length; i++) {
  buttonAccordion[i].addEventListener("click", () => {
    console.log(buttonAccordion[i].firstElementChild.firstElementChild);
    if (buttonAccordion[i].nextElementSibling.classList.contains("hidden")) {
      buttonAccordion[i].nextElementSibling.classList.remove("hidden");
      buttonAccordion[i].classList.add("text-black", "bold");
      buttonAccordion[i].firstElementChild.firstElementChild.classList.add(
        "flip"
      );
      return;
    }

    buttonAccordion[i].nextElementSibling.classList.add("hidden");
    buttonAccordion[i].classList.remove("text-black", "bold");
    buttonAccordion[i].firstElementChild.firstElementChild.classList.remove(
      "flip"
    );
    return;
  });
}
