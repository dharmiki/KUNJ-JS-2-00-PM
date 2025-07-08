let generatedOTP = "";

// Signup handler
function signup() {
  const name = document.getElementById("signup-name").value.trim();
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value.trim();

  if (!name || !username || !password) {
    alert("Please fill all fields");
    return;
  }

  if (localStorage.getItem(username)) {
    alert("Username already exists. Please login.");
    return;
  }

  // Save user as object
  const userData = {
    name: name,
    password: password
  };
  localStorage.setItem(username, JSON.stringify(userData));

  alert("Signup successful!");

  document.getElementById("signup").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}

// Login handler
function login() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value.trim();

  const userDataString = localStorage.getItem(username);

  if (!userDataString) {
    alert("User not found. Please signup.");
    return;
  }

  const userData = JSON.parse(userDataString);

  if (userData.password === password) {
    sessionStorage.setItem("loggedInUser", username);
    showDashboard(userData.name);
  } else {
    alert("Invalid password");
  }
}

// Show dashboard and generate OTP
function showDashboard(name) {
  document.getElementById("login").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  // Greet with name
  document.querySelector("#dashboard h2").innerHTML = `Welcome, ${name} 🎉`;

  // Generate and display OTP
  generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
  document.getElementById("otp-display").textContent = generatedOTP;
}

// Verify OTP
function verifyOTP() {
  const entered = document.getElementById("otp-input").value.trim();
  const status = document.getElementById("otp-status");

  if (entered === generatedOTP) {
    status.textContent = "✅ OTP verified successfully!";
    status.style.color = "green";
  } else {
    status.textContent = "❌ Invalid OTP. Try again.";
    status.style.color = "red";
  }
}

// Logout
function logout() {
  sessionStorage.removeItem("loggedInUser");
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}
