function openSidebar() {
   document.getElementById("navContainer").style.display = "flex";
}
function closeSidebar() {
   document.getElementById("navContainer").style.display = "none";
}

window.addEventListener("resize", () => {
   document.getElementById("navContainer").style.display =
      window.innerWidth > 600 ? "flex" : "none";
});

function searchMaterials() {
   const input = document.getElementById("inputSearchFilter");
   const list = document.getElementById("materialList");
   const items = list.getElementsByTagName("li");
   const filter = input.value.toLowerCase();

   for (let i = 0; i < items.length; i++) {
      const txtValue = items[i].textContent || items[i].innerText;
      items[i].style.display = txtValue.toLowerCase().includes(filter)
         ? ""
         : "none";
   }
}

document.addEventListener("click", (e) => {
   const open = e.target.closest("[data-open-modal]");
   const close = e.target.closest("[data-close-modal]");
   if (open) {
      const id = open.getAttribute("data-open-modal");
      document.querySelector(`[data-modal="${id}"]`)?.showModal();
   }
   if (close) {
      const id = close.getAttribute("data-close-modal");
      document.querySelector(`[data-modal="${id}"]`)?.close();
   }
});
