window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("stickyy", window.scrollY > 100);
});

const darkToggle = document.getElementById("darkToggle");
const darkMode = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    darkMode.classList.add("dark");
  } else {
    darkMode.classList.remove("dark");
  }
});
