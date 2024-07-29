const body = document.querySelector("body");
const toggleTheme = document.querySelector("#themeToggle");

toggleTheme.addEventListener("click", () => {
  const theme = body.getAttribute("data-bs-theme");
  body.setAttribute("data-bs-theme", theme === "dark" ? "light" : "dark");
});
