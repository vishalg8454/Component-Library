const card = document.getElementById("card-dismiss");
const dismissButton = document.querySelector(".card-dismiss-icon");

dismissButton.addEventListener("click", () => {
  console.log("clicked");
  card.style.display = "none";
});
