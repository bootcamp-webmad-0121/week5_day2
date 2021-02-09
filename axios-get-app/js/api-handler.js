class CountriesApi {

    constructor() {

        this.app = axios.create({
            baseURL: `https://restcountries.eu/rest/v2`
        })
    }

    getCountriesByName = countryName => this.app.get(`/name/${countryName}`)
    getCountriesByCurrency = curr => this.app.get(`/currency/${curr}`)
    getCountriesByCapital = city => this.app.get(`/capital/${city}`)
}