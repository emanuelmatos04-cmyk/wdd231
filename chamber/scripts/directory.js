async function loadMembers() {
  const response = await fetch('data/members.json');
  const members = await response.json();

  const container = document.getElementById('membersContainer');
  container.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership Level: ${member.membership}</p>
    `;

    container.appendChild(card);
  });
}

// Toggle between grid and list view
document.getElementById('gridBtn').addEventListener('click', () => {
  document.getElementById('membersContainer').classList.add('grid');
  document.getElementById('membersContainer').classList.remove('list');
});

document.getElementById('listBtn').addEventListener('click', () => {
  document.getElementById('membersContainer').classList.add('list');
  document.getElementById('membersContainer').classList.remove('grid');
});

loadMembers();
