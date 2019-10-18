$("#search").on("click", function(location)  {
    location.preventDefault();
    var location = $("#location").val().trim();
    searchCurrentLocalWeather(location);
    search5dayLocalWeather(location);

    var d = new Date();
    document.getElementById("date").innerHTML = d;

    function searchCurrentLocalWeather(location) {
        var location = $("#location").val().trim();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + ",ca&appid=999176920710ee7337e355f3640da48f";
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {

            console.log(response);
            $("#currentWeatherImg").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
            console.log(response.weather[0].icon);
            $(".currentTemperature").text('Temperature: ' + response.main.temp + ' °K');
            console.log(response.main.temp);
            $(".currentWindspeed").text('Windspeed: ' + response.wind.speed + ' mps');
            console.log(response.wind.speed);
            $(".currentHumidity").text('Humidity: ' + response.main.humidity + '%');
        });
    }

    var day2 = new Date(d.getTime() + (1000 * 60 * 60 * 48));
    var day3 = new Date(d.getTime() + (1000 * 60 * 60 * 72));
    var day4 = new Date(d.getTime() + (1000 * 60 * 60 * 96));
    var day5 = new Date(d.getTime() + (1000 * 60 * 60 * 120));
    $(".day2").text(day2);
    $(".day3").text(day3);
    $(".day4").text(day4);
    $(".day5").text(day5);

    function search5dayLocalWeather(location) {
        debugger;
        var location = $("#location").val().trim();
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast/?q="  + location + ",ca&appid=6be09550488d008cc9128d33cf413b5b";
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            $("#weatherImg1").attr("src", "http://openweathermap.org/img/w/" + response.list[5].weather[0].icon + ".png");
            $(".temperature1").text('Temp: ' + response.list[4].main.temp + ' °K');
            $(".humidity1").text('Humidity: ' + response.list[4].main.humidity + '%');
            $("#weatherImg2").attr("src", "http://openweathermap.org/img/w/" + response.list[13].weather[0].icon + ".png");
            $(".temperature2").text('Temp: ' + response.list[12].main.temp + ' °K');
            $(".humidity2").text('Humidity: ' + response.list[12].main.humidity + '%');
            $("#weatherImg3").attr("src", "http://openweathermap.org/img/w/" + response.list[21].weather[0].icon + ".png");
            $(".temperature3").text('Temp: ' + response.list[20].main.temp + ' °K');
            $(".humidity3").text('Humidity: ' + response.list[20].main.humidity + '%');
            $("#weatherImg4").attr("src", "http://openweathermap.org/img/w/" + response.list[29].weather[0].icon + ".png");
            $(".temperature4").text('Temp: ' + response.list[28].main.temp + ' °K');
            $(".humidity4").text('Humidity: ' + response.list[28].main.humidity + '%');
            $("#weatherImg5").attr("src", "http://openweathermap.org/img/w/" + response.list[37].weather[0].icon + ".png");
            $(".temperature5").text('Temp: ' + response.list[36].main.temp + ' °K');
            $(".humidity5").text('Humidity: ' + response.list[36].main.humidity + '%');
        });
    }
})

document.getElementById("search").addEventListener("click", saveLocation); {
    function saveLocation() { 
      var searchHistory = document.getElementById("location");
      var mySearchHistory = {History: searchHistory.value};
      var myJSON = JSON.stringify(mySearchHistory);
      localStorage.setItem("Location", myJSON);
    } 
}

function retrieveSearchHistory() {
    debugger;

    var searchHistory = localStorage.getItem("Location");
    console.log(searchHistory);
    var locationSearchHistory = JSON.parse(searchHistory);
    console.log(locationSearchHistory);
    document.getElementById("location").innerHTML = locationSearchHistory;
}

document.addEventListener("DOMContentLoaded", retrieveSearchHistory(location));



