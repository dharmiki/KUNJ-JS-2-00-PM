const toggleBtn = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const welcome = document.getElementById("welcome-message");


let theme = localStorage.getItem("theme") || "light";
applyTheme(theme);


toggleBtn.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  localStorage.setItem("theme", theme);
  applyTheme(theme);
});

function applyTheme(theme) {
  
  document.body.style.transition = "none"; 

  document.body.style.opacity = 0;

  setTimeout(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#ffffff";
      icon.textContent = "🌙";
      welcome.textContent = "Welcome to the Dark Side!";
    } else {
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#000000";
      icon.textContent = "🌞";
      welcome.textContent = "Welcome to the Light Side!";
    }
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = 1;
  }, 500); 
}
