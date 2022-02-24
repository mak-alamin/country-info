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
       <a href="#" class="btn btn-primary" onclick="loadCountryDetails('${country.name.toLowerCase()}')">View Details</a>
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

      let index = 0;

      if (countryName == "india") {
        index = 1;
      }

      countryDetails.innerHTML = `
      <div class="card">
      <img src="${country[index].flag}" class="card-img-top" alt="${country[index].name}" />
      <div class="card-body">
        <h5 class="card-title">${country[index].name}</h5>
        <p class="card-text">Capital: <strong> ${country[index].capital} </strong></p>
        <p class="card-text">Population: <strong> ${country[index].population} </strong></p>
        <p class="card-text">Region: <strong> ${country[index].region} </strong></p>
        <p class="card-text">Subregion: <strong> ${country[index].subregion} </strong></p>
        <p class="card-text">Timezone: <strong> ${country[index].timezones} </strong></p>
        <p class="card-text">Currency: <strong> ${country[index].currencies} </strong></p>
        <p class="card-text">Languages: <strong> ${country[index].languages} </strong></p>
        <p class="card-text">Borders: <strong> ${country[index].borders} </strong></p>
      </div>
    </div>
      `;
    });
}

document.onload = loadCountryDetails("bangladesh");
document.onload = loadCountries("all");
