const card = document.getElementById("card-dismiss");
const dismissButton = document.querySelector(".card-dismiss-icon");
const toast = document.querySelector(".toast-demo");
const cancelToastButton = document.getElementById("toast-cancel-btn");
const demoToastButton = document.getElementById("toast-demo-btn");

dismissButton.addEventListener("click", () => {
  card.style.display = "none";
});

toast.style.display = "none";

let timerIdForToast;
demoToastButton.addEventListener("click", ()=>{
  console.log("D")
  toast.style.display = "block";
    timerIdForToast = setTimeout(()=>{
      toast.style.display = "none";  
    },2000)
})

cancelToastButton.addEventListener("click",()=>{
  toast.style.display = "none";  
})


