async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

function displayMembers(members) {
  const container = document.getElementById("membersContainer");
  container.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card");
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;
    container.appendChild(card);
  });
}

document.getElementById("gridBtn").addEventListener("click", () => {
  document.getElementById("membersContainer").className = "grid";
});
document.getElementById("listBtn").addEventListener("click", () => {
  document.getElementById("membersContainer").className = "list";
});

loadMembers();
