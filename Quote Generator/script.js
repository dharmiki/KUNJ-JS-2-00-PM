  const quoteText = document.querySelector(".quote"),
      authorName = document.querySelector(".author .name"),
      quoteBtn = document.querySelector("button"),
      soundBtn = document.querySelector(".sound"),
      copyBtn = document.querySelector(".copy"),
      twitterBtn = document.querySelector(".twitter");

const apiKey = "8CkB7ipzZ8Xy1c9Lv2Iz/g==VxvfAUvVFZjG3oos";

// Fetch random quote
async function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

    try {
        const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
            headers: { "X-Api-Key": apiKey }
        });

        if (!res.ok) throw new Error("API request failed");

        const result = await res.json();
        const quote = result[0];

        quoteText.innerText = quote.quote; // only text, icon added via CSS
        authorName.innerText = quote.author;
    } catch (err) {
        quoteText.innerText = "Failed to fetch quote.";
        authorName.innerText = "";
        console.error(err);
    } finally {
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    }
}

// Play quote sound
soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

// Copy quote to clipboard
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

// Share quote on Twitter
twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText.innerText + " — " + authorName.innerText)}`;
    window.open(tweetUrl, "_blank");
});

// Load a quote on page load
window.addEventListener("load", randomQuote);
quoteBtn.addEventListener("click", randomQuote);
