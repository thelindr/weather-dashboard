

  fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=3f970a4e003072256be9d7f311a69b04").then((response) => {
  return response.json()
}).then((json) => {
  document.getElementById("city").innerHTML = (json.name)
  document.getElementById("temperature").innerHTML = (json.main.temp)
  document.getElementById("visibility").innerHTML = (json.weather[0].description)
})
