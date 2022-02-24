// Search country
function searchCountry(searchTerm) {
  let countries = document.getElementsByClassName("card-title");

  for (country of countries) {
    if (country.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      country.parentElement.parentElement.style.display = "block";
    } else {
      country.parentElement.parentElement.style.display = "none";
    }
  }
}

function loadCountries(count) {
  const countriesList = document.getElementById("countries");
  countriesList.innerHTML = "Loading...";
  fetch(`https://restcountries.com/v2/${count}`)
    .then((response) => response.json())
    .then((countries) => {
      countriesList.innerHTML = "";
      countries.forEach((country) => {
        let singleCountry = `<div class="card">
     <img src="${country.flag}" class="card-img-top" alt="${country.name}" />
     <div class="card-body">
       <h5 class="card-title">${country.name}</h5>
       <p class="card-text">Capital: <strong> ${country.capital} </strong></p>
       <a href="#" class="btn btn-primary" onclick="loadCountryDetails('${country.name}')">View Details</a>
     </div>
   </div>`;
        countriesList.innerHTML += singleCountry;
      });
    });
}

function loadCountryDetails(name) {
  let countryName = name.replace("Å", "A").split(" ")[0];

  fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then((response) => response.json())
    .then((country) => {
      const countryDetails = document.getElementById("country-details");

      console.log(country);

      countryDetails.innerHTML = `
      <div class="card">
      <img src="${country[0].flag}" class="card-img-top" alt="${country[0].name}" />
      <div class="card-body">
        <h5 class="card-title">${country[0].name}</h5>
        <p class="card-text">Capital: <strong> ${country[0].capital} </strong></p>
        <p class="card-text">Population: <strong> ${country[0].population} </strong></p>
        <p class="card-text">Region: <strong> ${country[0].region} </strong></p>
        <p class="card-text">Subregion: <strong> ${country[0].subregion} </strong></p>
        <p class="card-text">Timezone: <strong> ${country[0].timezones} </strong></p>
        <p class="card-text">Currency: <strong> ${country[0].currencies} </strong></p>
        <p class="card-text">Languages: <strong> ${country[0].languages} </strong></p>
        <p class="card-text">Borders: <strong> ${country[0].borders} </strong></p>
      </div>
    </div>
      `;
    });
}

document.onload = loadCountryDetails("bangladesh");
document.onload = loadCountries("all");
