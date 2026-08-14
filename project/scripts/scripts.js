// scripts.js

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Display current date
  document.querySelectorAll("#date").forEach(el => {
    el.textContent = "Date: " + new Date().toLocaleDateString();
  });

  // ✅ Responsive nav toggle (orange button ☰)
  const menuBtn = document.getElementById("menu");
  const navLinks = document.querySelector(".nav-links");
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  // ✅ Load events dynamically (only if container exists)
  async function loadEvents() {
    try {
      const response = await fetch("events.json");
      if (!response.ok) throw new Error("Network error");
      const events = await response.json();

      const container = document.getElementById("events-container");
      if (!container) return; // skip if not on events page

      events.forEach(event => {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
          <img src="${event.image}" alt="${event.name}" loading="lazy">
          <h3>${event.name}</h3>
          <p><strong>Date:</strong> ${event.date}</p>
          <p><strong>Location:</strong> ${event.location}</p>
          <button class="detailsBtn">Details</button>
        `;
        card.querySelector(".detailsBtn").addEventListener("click", () => {
          document.getElementById("modalTitle").textContent = event.name;
          document.getElementById("modalDescription").textContent = event.description;
          document.getElementById("eventModal").showModal();
        });
        container.appendChild(card);
      });
    } catch (err) {
      console.error("Error loading events:", err);
    }
  }

  if (document.getElementById("events-container")) {
    loadEvents();
  }

  // ✅ Modal close button (if modal exists)
  const modal = document.getElementById("eventModal");
  if (modal) {
    const closeBtn = document.getElementById("closeModal");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => modal.close());
    }
  }

  // ✅ Weather API (Santo Domingo)
  async function loadWeather() {
    try {
      const apiKey = "2b0cf47fc7d401487171c99e3dcb7a76"; // Replace with your OpenWeatherMap API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo&appid=${apiKey}&units=metric`
      );
      if (!response.ok) throw new Error("Weather API error");
      const data = await response.json();

      const temp = data.main.temp;
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const icon = data.weather[0].icon;

      const weatherInfo = document.getElementById("weather-info");
      if (weatherInfo) {
        weatherInfo.innerHTML = `
          <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
          ${temp}°C, ${description}, Humidity: ${humidity}%
        `;
      }
    } catch (error) {
      const weatherInfo = document.getElementById("weather-info");
      if (weatherInfo) {
        weatherInfo.textContent = "Unable to load weather data.";
      }
    }
  }

  if (document.getElementById("weather-info")) {
    loadWeather();
  }
});
