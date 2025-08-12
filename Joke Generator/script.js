let jokeEl = document.getElementById("joke");
let jokeIcon = document.getElementById("jokeIcon");

const bgColors = [
    ["#00c6ff", "#0072ff"], // blue
    ["#ff9a9e", "#fad0c4"], // pink
    ["#a1c4fd", "#c2e9fb"], // light blue
    ["#fbc2eb", "#a6c1ee"], // purple-pink
    ["#fddb92", "#d1fdff"], // warm yellow
    ["#84fab0", "#8fd3f4"], // green-blue
    ["#ffecd2", "#fcb69f"], // peach
    ["#ff9a9e", "#fecfef"], // pink pastel
    ["#f6d365", "#fda085"], // orange sunrise
    ["#f093fb", "#f5576c"], // magenta-red
    ["#4facfe", "#00f2fe"], // bright aqua
    ["#43e97b", "#38f9d7"], // green-teal
    ["#fa709a", "#fee140"], // pink-yellow
    ["#30cfd0", "#330867"], // teal to deep purple
    ["#cfd9df", "#e2ebf0"]  // soft grey
];

// Add smooth background transition
document.body.style.transition = "background 1s ease-in-out";

async function getJoke(){
    jokeEl.textContent = "";
    jokeIcon.style.transform = "rotate(0deg)";

    try {
        let getting = await fetch("https://icanhazdadjoke.com/", {
            headers: { accept: "application/json" }
        });
        let res = await getting.json();
        let jk = res.joke;

        // Change icon to laughing emoji
        jokeIcon.src = "https://cdn-icons-png.flaticon.com/512/742/742750.png";
        jokeIcon.style.transform = "rotate(15deg)";
        setTimeout(() => {
            jokeIcon.style.transform = "rotate(-15deg)";
        }, 200);
        setTimeout(() => {
            jokeIcon.style.transform = "rotate(0deg)";
        }, 400);

        // Change background with fade
        let randomGradient = bgColors[Math.floor(Math.random() * bgColors.length)];
        document.body.style.background = `linear-gradient(135deg, ${randomGradient[0]}, ${randomGradient[1]})`;

        // Typewriter effect
        typeWriter(jk, jokeEl);

        // Reset icon after 2 seconds
        setTimeout(() => {
            jokeIcon.src = "https://cdn-icons-png.flaticon.com/512/25/25634.png"; // default smile
        }, 2000);

    } catch {
        typeWriter("Oops! Couldn't fetch a joke. 😅", jokeEl);
    }
}

function typeWriter(text, element) {
    let i = 0;
    const speed = 40;
    element.textContent = "";
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

getJoke();
