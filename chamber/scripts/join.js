// Set timestamp when form loads
document.addEventListener("DOMContentLoaded", () => {
  const ts = document.getElementById("timestamp");
  if (ts) {
    ts.value = new Date().toISOString();
  }
});

// Open modals when "Learn More" links are clicked
document.querySelectorAll(".membership-cards a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const modalId = link.getAttribute("href").substring(1);
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.showModal();
    }
  });
});

// Close modals when close buttons are clicked
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const modalId = btn.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.close();
    }
  });
});
