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
});
