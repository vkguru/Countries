const searchInput = document.querySelector('#searchinput');
const regionList = document.querySelector('#regions');
const output = document.querySelector('#output');
let countries; 

const url = 'https://restcountries.eu/rest/v2/all';
fetch(url)
.then((resp) => resp.json())
.then(function(data){
    countries = data;
    console.log(countries);
    sessionStorage.setItem('allCountriesData', encodeURIComponent(JSON.stringify(countries)))
    displayContent(countries);
})
.catch(function(error){
    console.log(error);
});

function displayContent(listedCountries) {
    let display = '';
    for (let i = 0; i < listedCountries.length; i++) {
        display += `
        <div class ="countryCard" >
            <img src =${listedCountries[i].flag} width="160px" height="80px">
            <ul>
                <li class="name"> ${listedCountries[i].name}</li> 
                <li><strong>Population:</strong> ${listedCountries[i].population}</li> 
                <li><strong>Region:</strong> ${listedCountries[i].region}</li> 
                <li><strong>Capital:</strong> ${listedCountries[i].capital}</li>
            </ul>
        </div>
        `;
    }
    document.querySelector('#output').innerHTML = display;

    document.querySelectorAll('.countryCard').forEach((countryCard) => {
        countryCard.addEventListener('click', (event) => {
            sessionStorage.setItem('country', event.currentTarget.dataset.country);
            window.location = 'country.html'
        })
        countryCard.width = "33%";
        countryCard.height = "33%";
    });

    /*function filterCountries() {
        let filtereist = [];
        for (let i = 0; i < countries.length; i++) {
            if (re)
        }
    }*/
    

}