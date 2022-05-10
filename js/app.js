const API_KEY = `430796e12329dcb3935f86afda9edddb`;

const tempButton = () => {
  //   console.log("click");
  const cityName = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data));
};

const setInnerText = (id, text) => {
  document.getElementById(id).innerText = text;
};
const display = (tempp) => {
  setInnerText("city", tempp.name);
  setInnerText("temp", tempp.main.temp);
  setInnerText("hows", tempp.weather[0].main);
  const iconUrl = ` http://openweathermap.org/img/wn/${tempp.weather[0].icon}@2x.png`;
  console.log(iconUrl);
  const imageIcon = document.getElementById("image-icon");
  imageIcon.setAttribute("src", iconUrl);
};
