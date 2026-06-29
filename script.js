const API_KEY = "5453386d61af4593861135717262906";

async function getWeather(city) {
    try {

        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
        );
    //     if (!response.ok) {
    // throw new Error("Failed to fetch weather data.");
// }
        const data = await response.json();
        if (data.error) {
    throw new Error(data.error.message);
}

        document.getElementById("city").textContent = data.location.name;
        document.getElementById("temperature").textContent = data.current.temp_c;
        document.getElementById("condition").textContent = data.current.condition.text;
        document.getElementById("humidity").textContent = data.current.humidity;
        document.getElementById("weatherIcon").src =
        "https:" + data.current.condition.icon;
    } 
    catch (error) {
        document.getElementById("city").textContent = "City not found. Please try again.";
    document.getElementById("temperature").textContent = "--";
    document.getElementById("condition").textContent = "--";
    document.getElementById("humidity").textContent = "--";
    document.getElementById("weatherIcon").src = "";
       console.error(error);
    }
}

document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();

    if (city !== "") {
        getWeather(city);
    }
});
getWeather("London");
