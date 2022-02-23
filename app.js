fetch("https://restcountries.com/v2/all")
  .then((response) => response.json())
  .then((countries) => {
    const countriesList = document.getElementById("countries");

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

function loadCountryDetails(name) {
  let countryName = name.split(" ").join("-");

  fetch(`https://restcountries.com/v2/name/${countryName}`)
    .then((response) => response.json())
    .then((country) => {
      console.log(country);
      const countryDetails = document.getElementById("country-details");
      
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
