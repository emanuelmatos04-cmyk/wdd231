async function loadSpotlights() {
  try {
    const response = await fetch("data/members.json");
    const data = await response.json();

    // Filter gold/silver members
    const goldSilver = data.members.filter(m =>
      m.membership === "Gold" || m.membership === "Silver"
    );

    // Randomly select 2–3
    const random = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.getElementById("spotlight-container");
    container.innerHTML = "";
    random.forEach(member => {
      container.innerHTML += `
        <div class="spotlight">
          <img src="${member.logo}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.phone}</p>
          <p>${member.address}</p>
          <a href="${member.website}" target="_blank">${member.website}</a>
        </div>`;
    });
  } catch (err) {
    console.error("Spotlight error:", err);
  }
}
loadSpotlights();
