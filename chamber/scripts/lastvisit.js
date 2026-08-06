const visitMessage = document.getElementById("visitMessage");
const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (lastVisit) {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  visitMessage.textContent = `Welcome back! Your last visit was ${days} day(s) ago.`;
} else {
  visitMessage.textContent = "Welcome! This is your first visit.";
}
localStorage.setItem("lastVisit", now);
