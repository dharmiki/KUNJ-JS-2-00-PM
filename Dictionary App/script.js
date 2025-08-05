 const form = document.querySelector('form');
    const resultDiv = document.querySelector('.result');
    const toggleBtn = document.getElementById('themeToggle');
    const body = document.body;
    const wordInput = document.getElementById('wordInput');
    const historyContainer = document.getElementById('historyContainer');
    let historyList = [];

    // Autofocus
    window.onload = () => wordInput.focus();

    // Theme toggle
    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark');
      toggleBtn.innerHTML = body.classList.contains('dark') ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const word = wordInput.value.trim();
      if (word) {
        getWordInfo(word);
        updateHistory(word);
      }
    });

    // History click
    historyContainer.addEventListener('click', (e) => {
      if (e.target.tagName === 'SPAN') {
        wordInput.value = e.target.textContent;
        getWordInfo(e.target.textContent);
      }
    });

    // Voice
    function speak(word) {
      const utterance = new SpeechSynthesisUtterance(word);
      speechSynthesis.speak(utterance);
    }

    // Dictionary fetch
    async function getWordInfo(word) {
      try {
        resultDiv.innerHTML = "<p>Fetching Data...</p>";
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        const meanings = data[0].meanings[0];
        const def = meanings.definitions[0];

        resultDiv.innerHTML = `
          <h2>
            ${data[0].word}
            <button onclick="speak('${data[0].word}')"><i class="fas fa-volume-up"></i></button>
          </h2>
          <p class="partOfSpeech">${meanings.partOfSpeech}</p>
          <p><strong>Meaning:</strong> ${def.definition || "Not Found!"}</p>
          <p><strong>Example:</strong> ${def.example || "Not Found!"}</p>
          <p><strong>Antonyms:</strong></p>
        `;

        if (!def.antonyms || def.antonyms.length === 0) {
          resultDiv.innerHTML += `<span>Not found!</span>`;
        } else {
          resultDiv.innerHTML += `<ul>`;
          def.antonyms.forEach(a => {
            resultDiv.innerHTML += `<li>${a}</li>`;
          });
          resultDiv.innerHTML += `</ul>`;
        }

        resultDiv.innerHTML += `<div><a href="${data[0].sourceUrls[0]}" target="_blank">Read More</a></div>`;
      } catch (err) {
        resultDiv.innerHTML = `<p>Word not found or API error. Please try another word.</p>`;
      }
    }

    // Update History UI
    function updateHistory(word) {
      if (!historyList.includes(word)) {
        historyList.unshift(word);
        if (historyList.length > 6) historyList.pop();
      }
      renderHistory();
    }

    // Render history
    function renderHistory() {
      historyContainer.innerHTML = `<h3>Recent Searches:</h3>`;
      historyList.forEach(w => {
        historyContainer.innerHTML += `<span>${w}</span>`;
      });
    }