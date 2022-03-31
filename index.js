const card = document.getElementById("card-dismiss");
const dismissButton = document.querySelector(".card-dismiss-icon");

dismissButton.addEventListener("click", () => {
  card.style.display = "none";
});
