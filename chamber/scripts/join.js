// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // ✅ Hidden timestamp field
  const ts = document.getElementById("timestamp");
  if (ts) ts.value = new Date().toISOString();

  // ✅ Responsive navigation toggle
  const menuButton = document.getElementById("menuButton");
  const menuItems = document.getElementById("menuItems");
  if (menuButton && menuItems) {
    menuButton.addEventListener("click", () => {
      menuItems.classList.toggle("show");
    });
  }

  // ✅ Modal handling (open + close)
  const openModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.showModal();
  };

  const closeModal = (id) => {
    const modal = document.getElementById(id);
    if (modal) modal.close();
  };

  // Open modals when "Learn More" links are clicked
  document.querySelectorAll(".membership-cards a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const modalId = link.getAttribute("href").substring(1);
      openModal(modalId);
    });
  });

  // Close modals when close buttons are clicked
  document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.dataset.modal;
      closeModal(modalId);
    });
  });
});
