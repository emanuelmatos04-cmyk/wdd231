// Display current date
document.querySelectorAll("#date").forEach(el => {
  el.textContent = "Date: " + new Date().toLocaleDateString();
});

// Responsive nav toggle
const menuBtn = document.getElementById("menu");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("show");
  });
}

// Fetch events
async function loadEvents() {
  try {
    const response = await fetch("events.json");
    if (!response.ok) throw new Error("Network error");
    const events = await response.json();

    const container = document.getElementById("events-container");
    events.forEach(event => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
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

//