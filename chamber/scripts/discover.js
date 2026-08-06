fetch("data/discover.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("cards");
    data.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <h3>${item.title}</h3>
        <p><strong>Address:</strong> ${item.address}</p>
        <p>${item.description}</p>
        <a href="${item.link}" class="btn">Learn More</a>
      `;
      container.appendChild(card);
    });
  });
