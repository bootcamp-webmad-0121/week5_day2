
const countriesApi = new CountriesApi()

document.querySelector('#theButton').onclick = () => {

    const nameValue = document.querySelector('#theInput').value

    countriesApi
        .getCountriesByName(nameValue)
        .then(response => showCountryInfo(response.data))           // .data contiene la respuesta del servidor
        .catch(err => showError(err, nameValue))
}


function showCountryInfo(data) {
    document.querySelector('#error').textContent = ''
    document.querySelector('#countryName').textContent = data[0].name
    document.querySelector('#countryInfo').textContent = `Población: ${data[0].population} habitantes. Capital: ${data[0].capital} `
}


function showError(err, nameValue) {
    document.querySelector('#error').textContent = `El país ${nameValue} no existe`
}