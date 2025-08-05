  const apiKey = "c0b2f372a6694c2d8e2121630251607"; 

    async function fetchWeather(city) {
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("City not found");
      return await res.json();
    }

    const btn = document.getElementById("btnsearch");
    const loader = document.getElementById("loader");

    btn.addEventListener("click", async () => {
      const city = document.getElementById("input-city").value.trim();
      const errorMsg = document.getElementById("error-msg");

      if (!city) return (errorMsg.innerText = "Please enter a city name.");
      errorMsg.innerText = "";
      loader.style.display = "block";

      try {
        const data = await fetchWeather(city);
        loader.style.display = "none";

        document.getElementById("weather-icon").src = data.current.condition.icon;
        document.getElementById("temp").innerText = `${data.current.temp_c}°C`;
        document.getElementById("condition").innerText = data.current.condition.text;
        document.getElementById("location").innerText = `${data.location.name}, ${data.location.country}`;
        document.getElementById("humidity").innerText = `${data.current.humidity}%`;
        document.getElementById("wind").innerText = `${data.current.wind_kph} km/h`;
        document.getElementById("pressure").innerText = `${data.current.pressure_mb} hPa`;
        document.getElementById("visibility").innerText = `${data.current.vis_km} km`;
      } catch (err) {
        loader.style.display = "none";
        errorMsg.innerText = "City not found or API error.";
      }
    });

    // Default city on load
    window.addEventListener("load", () => {
      document.getElementById("input-city").value = "Rajkot";
      btn.click();
    });

    // Theme toggle
    const themeBtn = document.getElementById("theme-toggle");
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      const icon = themeBtn.querySelector("i");
      if (document.body.classList.contains("light")) {
        icon.classList.replace("fa-moon", "fa-sun");
      } else {
        icon.classList.replace("fa-sun", "fa-moon");
      }
    });

    