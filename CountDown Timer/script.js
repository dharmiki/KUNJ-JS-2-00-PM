let countdown;
let totalSeconds = 0;

function startTimer() {
  const days = +document.getElementById('inputDays').value || 0;
  const hours = +document.getElementById('inputHours').value || 0;
  const minutes = +document.getElementById('inputMinutes').value || 0;
  const seconds = +document.getElementById('inputSeconds').value || 0;

  if (!countdown) {
    totalSeconds = (days * 86400) + (hours * 3600) + (minutes * 60) + seconds;

    if (totalSeconds <= 0) {
      alert("Please set a valid time.");
      return;
    }
  }

  clearInterval(countdown);
  updateDisplay();

  countdown = setInterval(() => {
    totalSeconds--;
    if (totalSeconds <= 0) {
      clearInterval(countdown);
      countdown = null;
      updateDisplay();
      document.getElementById('alarmSound').play();
      alert("Time's up!");
    } else {
      updateDisplay();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(countdown);
  countdown = null;
}

function resetTimer() {
  clearInterval(countdown);
  countdown = null;
  totalSeconds = 0;

  document.getElementById('inputDays').value = '';
  document.getElementById('inputHours').value = '';
  document.getElementById('inputMinutes').value = '';
  document.getElementById('inputSeconds').value = '';

  document.getElementById('daysDisplay').value = '00';
  document.getElementById('hoursDisplay').value = '00';
  document.getElementById('minutesDisplay').value = '00';
  document.getElementById('secondsDisplay').value = '00';
}

function updateDisplay() {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById('daysDisplay').value = (days < 10 ? '0' + days : days);
  document.getElementById('hoursDisplay').value = (hours < 10 ? '0' + hours : hours);
  document.getElementById('minutesDisplay').value = (minutes < 10 ? '0' + minutes : minutes);
  document.getElementById('secondsDisplay').value = (seconds < 10 ? '0' + seconds : seconds);
}

document.getElementById('daysDisplay').value = '00';
document.getElementById('hoursDisplay').value = '00';
document.getElementById('minutesDisplay').value = '00';
document.getElementById('secondsDisplay').value = '00';


const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light', themeToggle.checked);
});
