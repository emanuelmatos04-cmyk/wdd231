async function loadSpotlights() {
  const response = await fetch("data/members.json");
  const members = await response.json();

  const goldSilver = members.filter(m => m.membership === "Gold" || m.membership === "Silver");
  const random = goldSilver.sort(() => 0.5 - Math.random()).slice(0,3);

  const container = document.getElementById("spotlight-container");
  random.forEach(m => {
    container.innerHTML += `
      <div class="card">
        <img src="images/${m.logo}" alt="${m.name}">
        <h3>${m.name}</h3>
        <p>${m.phone}</p>
        <p>${m.address}</p>
        <a href="${m.website}" target="_blank">${m.website}</a>
        <p>Nivel: ${m.membership}</p>
      </div>`;
  });
}
loadSpotlights();
