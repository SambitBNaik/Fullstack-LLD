const searchField =document.querySelector(".searchField");
const searchBtn =document.querySelector(".search");
searchBtn.addEventListener("click",(event) =>{
    event.preventDefault();
    fetchWeather(searchField.value);
});

async function fetchWeather(cityName){
    const apiToken = "29a4726fe2esfss843543458c514023340se240102";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiToken}&q=${cityName}&aqi=no`;

    const response =await fetch(url);
    const parsedJson = await response.json();

    console.log(parsedJson);
}