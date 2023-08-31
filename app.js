function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("input[type='search']");
  let h3 = document.querySelector("h3");
  h3.innerHTML = searchInput.value;
  let cityName = searchInput.value;
  let apiKey = "9ee44dd39b241c853f96295c78bd71cb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#now");
  temp.innerHTML = `${temperature}°`;
}

let form = document.querySelector("form");
form.addEventListener("submit", search);
function displayCurrentDay() {
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var currentDate = new Date();
  var currentDay = currentDate.getDay();

  var dayOfWeekElement = document.getElementById("dayOfWeek");
  dayOfWeekElement.textContent = daysOfWeek[currentDay];
}

var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", displayCurrentDay);
