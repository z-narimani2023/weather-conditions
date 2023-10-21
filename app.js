const storage = new Storage();

const weatherLocation = storage.getLocData();

const weather = new Weather(weatherLocation.city, weatherLocation.state);

const ui = new UI();

document.addEventListener('DOMContentLoaded', getweather);
const chngeBtn = document.getElementById('w-change-btn');
chngeBtn.addEventListener('click', changeLoc);

function changeLoc() {
    const newcity = document.getElementById('city').value;
    const newState = document.getElementById('state').value;
    storage.setLocData(newcity, newState);
    weather.changeloc(newcity, newState);

    getweather();

    $('#locationModal').modal('hide');
}

function getweather() {
    weather.getweather()
        .then(result => {
            console.log(result);
            ui.paint(result, weather.location)
        })
        .catch(err => console.log(err.message));
}