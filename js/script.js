const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const btn = document.getElementById("open-modal");
const closeBtn= document.getElementById("btn-close")

function openModal() {
  overlay.style.display = "block";
}
function closeModal() {
  overlay.style.display = "none";
}
btn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);


 
function largeImg(img){
    img.style.transform = "scale(1.5)";
        // Animation effect 
        img.style.transition = "transform 0.25s ease"
}