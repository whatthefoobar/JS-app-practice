const key = "Ail4hAMqAG9GCQGDZTLuAnViG3994BAr" ;

//get weather info
const getWeather = async (locationKey) => { //locationKey is the city key we get when we get our city object , can name it however tho
    const base ="http://dataservice.accuweather.com/currentconditions/v1/";
    const query =`${locationKey}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};


//get city info
const getCity = async (city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];// the closest match

};

// getCity("manchester").then(data => {
//   return getWeather(data.Key)
//  }).then(data => {
//      console.log(data);
//  })
//  .catch (err => console.log(err)) //used for testing

