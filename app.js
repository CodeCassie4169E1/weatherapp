let apiKey = "9ee44dd39b241c853f96295c78bd71cb";
let city = "Bismark";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&${apiKey}`;

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let h3 = document.querySelector("h3");
  h3.innerHTML = city;
  document.getElementById("now").innerHTML = `${temperature}°`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
