// Set timestamp when form loads
document.addEventListener("DOMContentLoaded", () => {
  const ts = document.getElementById("timestamp");
  ts.value = new Date().toISOString();
});

// Open modals when links are clicked
document.querySelectorAll(".membership-cards a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const modalId = link.getAttribute("href").substring(1);
    document.getElementById(modalId).showModal();
  });
});
