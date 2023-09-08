const apiKey = '1c8d35d057b3246592968844492fd875';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

async function getWeather(city) {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    document.getElementById('city').textContent = data.name;
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
    document.getElementById('conditions').textContent = data.weather[0].description;
}
window.addEventListener('load', () => {
    const city = prompt('Digite o nome da cidade ✈:');
    if (city) {
        getWeather(city);
    }
});

document.getElementById('refresh-button').addEventListener('click', () => {
const city = prompt('Digite o nome da cidade ✈:');
if (city) {
    getWeather(city);
    }
});