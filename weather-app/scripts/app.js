const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");

const updateUI = (data) => {
 const cityDetails = data.cityDetails;
 const weather = data.weather;
 details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    //remove d-none class if present
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none");
    }
};
  

const updateCity = async (city) => {
    const cityDetails = await getCity(city);// we put await to wait for the promise returned by getCity()
    const weather = await getWeather(cityDetails.Key);
    return {
        cityDetails: cityDetails,
        weather:weather
    };

    //when its the same name for key and value we can delete on of them ex.:
    // return { cityDetails, weather };

};

cityForm.addEventListener("submit", e =>{
    //prev default action
    e.preventDefault();
    
    //get city value
    const city = cityForm.city.value.trim(); //we can .name because the form has a name attribure
    cityForm.reset(); //resets the form field

    //update ui with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

});