# Unit 06 Server-Side APIs Homework: Weather Dashboard

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. In this homework assignment, your challenge is to build a weather dashboard using the OpenWeather API.

## Instructions

Build a weather dashboard application with search functionality to find current weather conditions and the future weather outlook for multiple cities. Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
As a traveler
I want to see the weather outlook for multiple cities
so that I can plan a trip accordingly
```
How do you deliver this? Here are some guidelines:

* Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions.

* Use AJAX to hook into the API to retrieve data in JSON format.

* Your app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

* Display the following under current weather conditions:

  * City

  * Date

  * Icon image (visual representation of weather conditions)

  * Temperature

  * Humidity

  * Wind speed

  * UV index

* Include a search history so that users can access their past search terms. Clicking on the city name should perform a new search that returns current and future conditions for that city. 

* Include a 5-Day Forecast below the current weather conditions. Each day for the 5-Day Forecast should display the following:

  * Date

  * Icon image (visual representation of weather conditions)

  * Temperature

  * Humidity

![weather dashboard](./Assets/06-Server-Side-APIs-homework-demo.png)

### Hints

* Create multiple functions within your application to handle the different parts of the dashboard:

  * Current conditions
  
  * 5-Day Forecast
  
  * Search history

  * UV index

* You will need to make more than one AJAX call.

* You will need to hardcode some of the parameters in the API's URL. User input will determine some of the other parameters.

* Use `localStorage` to store any persistent data.

## Minimum Requirements

* User can search for weather reports by city using the openweathermap API.

* After searching for a city, the following information is displayed:

  *  Current temperature

  *  Current humidity

  *  Windspeed

  *  Uv index

  *  5 day forecast

* Application uses icons to represent weather conditions.

* Application stores previously searched for cities in localstorage and displays them to the user.

* Application loads last searched city forecast on page load.

## Bonus

* Use the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to add the user's current location to the initial landing page.

// click submit function 
// Input.prepend(currentCity)
// currentCity 


// list-group moveToInput function


// (function() {     
//     $(document).ready(function(){          
//     //Weather API
//     https://apidev.accuweather.com/developers/weatherIcons
//         $.get( "http://apidev.accuweather.com/currentconditions/v1/349818.json?language=en&apikey=your-api-key", function( data ) {
//             var iconUrl = "/wp-content/themes/theme-folder/assets/images/weather-icons/" + data[0]['WeatherIcon'] + "-s.png";              
//             $( '.header-right__weather-icon').html('<img src="' + iconUrl + '" />' );
//             $( '.header-right__weather-sit').text( data[0]['WeatherText'] );
//             $( '.header-right__weather-temp').text( data[0]['Temperature']['Imperial']['Value'] + ' ' + data[0]['Temperature']['Imperial']['Unit'] );
//         })
//     })
// })

// function getWeather() {     
//     $(document).ready(function(){  
//         function weather() {
//             var location = document.getElementById("location");
//             var apiKey = ",ca&appid=999176920710ee7337e355f3640da48f";
//             var url = "api.openweathermap.org/data/2.5/forecast?q=";
    
//             navigator.geolocation.getCurrentPosition(success, error);
    
//             function success(position) {
//                 latitude = position.coords.latitude;
//                 longitude = position.coords.longitude;
    
//                 location.innerHTML =
//                 "Latitude is " + latitude + "° Longitude is " + longitude + "°";
    
//                 $.getJSON(
//                 url + city + apiKey,
//                 function(data) {
//                     $("#temp").html(data.currently.temperature + "° F");
//                     $("#minutely").html(data.minutely.summary);
//                 }
//                 );
//             }
    
//             function error() {
//                 location.innerHTML = "Unable to retrieve your location";
//             }
    
//             location.innerHTML = "Locating...";
//             }
    
//             weather();

//             var skycons = new Skycons(
//                 "color": "blue"
//             );

//             var outJson = {
//                 "latitude": 43.642567,
//                 "longitude": -79.387054,
//                 "timezone": "America/Toronto",
//                 "currently": {
//                     "summary": "Partly Cloudy",
//                     "icon": "partly-cloudy-day",
//                     "precipIntensity": 0,
//                     "precipProbability": 0,
//                     "temperature": -9.58,                       
//                     "humidity": 0.82,
//                     "windSpeed": 14.97,
//                     "uvIndex": 1,
//                 },
                
//                 "offset": -5,
//             }
              
//             skycons.add("wIcon", outJson.currently.icon);
//             $("#wSummary").text(outJson.currently.summary);
//             $("#geoLoc").text(outJson.latitude + "," + outJson.longitude);
//             $("#wTemp").html(String(outJson.currently.temperature));
//         }
//     });
// }