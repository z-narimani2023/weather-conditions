class UI {
    constructor() {
        this.location = document.getElementById("w-location");
        this.condition = document.getElementById("w-Condition");
        this.icon = document.getElementById("w-icon");
        this.temp = document.getElementById("w-temp");
        this.tempmin = document.getElementById("w-temp-min");
        this.tempmax = document.getElementById("w-temp-max");
        this.pressure = document.getElementById("w-pressure");
        this.humidity = document.getElementById("w-humidity");
        this.speed = document.getElementById("w-speed");
        this.lon = document.getElementById("w-lon");
        this.lat = document.getElementById("w-lat");
    }

    paint(weather, location) {
        this.location.textContent = location;
        this.condition.textContent = this.Condition(weather.weather[0].main);
        this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
        this.temp.textContent = weather.main.temp;
        this.tempmin.textContent = weather.main.temp_min;
        this.tempmax.textContent = weather.main.temp_max;
        this.pressure.textContent = weather.main.pressure;
        this.humidity.textContent = weather.main.humidity;
        this.speed.textContent = weather.wind.speed;
        this.lon.textContent = weather.coord.lon;
        this.lat.textContent = weather.coord.lat;
    }
    Condition(Condition) {
        switch (Condition) {
            case "Thunderstorm":
                return "رعد و برق";
                break;
            case "Drizzle":
                return "نمنم باران";
                break;
            case "Rain":
                return "بارانی";
                break;
            case "Snow":
                return "برفی";
                break;
            case "Mist":
                return "غبار";
                break;
            case "Smoke":
                return "دود";
                break;
            case "Haze":
                return "غبار مه";
                break;
            case "Dust":
                return "گرد و خاک";
                break;
            case "Fog":
                return "مه";
                break;
            case "Sand":
                return "شن";
                break;
            case "Ash":
                return "خاکستر آتشفشانی";
                break;
            case "Squall":
                return "بوران";
                break;
            case "Tornado":
                return "توقان";
                break;
            case "Clear":
                return "صاف";
                break;
            case "Clouds":
                return "ابری";
                break;
            default:
                return Condition;


        }
    }
}