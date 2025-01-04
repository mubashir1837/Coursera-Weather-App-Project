document.getElementById('citySelected').addEventListener('change', function () {
    const city = JSON.parse(this.value); 
    const apiKey = 'a48267b0eeb39d0d52b4128653ccf945'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${apiKey}`;

    // Fetch weather data from API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Display weather results
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Weather: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Could not fetch weather data. Please try again.');
      });
  });