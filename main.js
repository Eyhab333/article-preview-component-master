const shareIcon = document.querySelector(".share-icon");
const tooltip = document.querySelector(".tooltip")

shareIcon.addEventListener("click", () => {
  tooltip.classList.toggle("show")
})