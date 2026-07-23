const apiKey = "TU_API_KEY";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Santo%20Domingo,DO&units=imperial&appid=${apiKey}`;

async function getWeather() {
  const response = await fetch(url);
  const data = await response.json();

  document.getElementById("temperature").textContent = `${data.list[0].main.temp} °F`;
  document.getElementById("description").textContent = data.list[0].weather[0].description;

  const forecastDiv = document.getElementById("forecast");
  for (let i = 8; i <= 24; i += 8) {
    const day = data.list[i];
    forecastDiv.innerHTML += `<p>${day.dt_txt.split(" ")[0]}: ${day.main.temp} °F</p>`;
  }
}
getWeather();
