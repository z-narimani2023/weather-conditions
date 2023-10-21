class Weather {
    constructor(city, state) {
        this.apiKey = 'c43e134cb43a6d86ff00c61c543dbcda'
        this.city = city
        this.state = state
    }
    async getweather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`)
        if (response.ok) {
            const resData = await response.json();
            return resData;
        } else {
            throw Error(response.status)
        }
    }
    changeloc(city, state) {
        this.city = city;
        this.state = state;
    }
    get location() {
        return this.state + ',' + this.city;
    }
}