// Grab HTML Elements
const btn = document.getElementById("navBtn");
const menu = document.getElementById("mobMenu");
const ham = document.getElementById("ham");

// Add Event Listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("translate-y-[-50rem]");
  if (!menu.classList.contains("h-0")) {
    setTimeout(() => menu.classList.toggle("h-0"), 200);
  } else {
    menu.classList.toggle("h-0");
  }
  ham.classList.toggle("rotate-90");
});
