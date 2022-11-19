const api = {
    key: '57b03edddd891e11682e32c942d79de3', // Chave
    base: "https://api.openweathermap.org/data/2.5/",
    lang: "pt-br",
    units: "metric"
}
const apiCountryURL = "https://countryflagsapi.com/png/";
const apiUnsplash = "https://source.unsplash.com/1600x900/?";
const idtest = document.querySelector("test")
const tempMin = document.querySelector("#Min")
const tempoMax = document.querySelector("#Max")

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");
const cityElement = document.querySelector(".city");
const tempElement = document.querySelector("#temperature");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

const errorMessageContainer = document.querySelector("#error-message");
const loader = document.querySelector("#loader");

const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");


//Funcções

const getWeatherData = async (city) => {  
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
  
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
  
    return data
  };

const showErrorMessage = () => {
    errorMessageContainer.classList.remove("hide");
  };

    const showWeatherData = async (city) => {
        fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)
        .then(response => {
            if(!response.ok){
                throw new Error(`http error: status ${response.status}`)
            }
            return response.json().then((response)=> 
                displayResult(response)
                
            )})
        .catch(error => {
            error
        })
    
    }

function displayResult(weather){
    console.log(weather)
    tempMin.innerText = `${weather.main.temp_min}°`
    tempoMax.innerText = `${weather.main.temp_max}°`
    cityElement.innerText = `${weather.name}`

}   






searchBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    
    const city = cityInput.value
    showWeatherData(city)
  });

cityInput.addEventListener("keyup", (e)=>{
    if(e.code === "Enter"){
        const city = e.target.value

        showWeatherData(city)
    }
})

