import { useState} from "react";
const api = {
  base: "http://api.openweathermap.org/data/2.5/",
  key: "a835f9ccf88c2f0a8fc83735c26ec100",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div
      className={
        weather.main ? (weather.main.temp > 16 ? "app warm" : "app") : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            value={query}
            placeholder="Search..."
            onKeyPress={search}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {typeof weather.main !== "undefined" ? (
          <>
            <div className="location-box">
              <div className="location">
                {weather.name} City, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
