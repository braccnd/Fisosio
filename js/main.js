// sidebar toggle
function openSidebar() {
   document.getElementById("navContainer").style.display = "flex";
}
function closeSidebar() {
   document.getElementById("navContainer").style.display = "none";
}

// navbar fix width none after sidebar close click
window.addEventListener("resize", () => {
   document.getElementById("navContainer").style.display =
      window.innerWidth > 600 ? "flex" : "none";
});
