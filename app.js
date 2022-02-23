fetch("https://restcountries.com/v2/all")
  .then((response) => response.json())
  .then((countries) => {
    console.log(countries);
    const countriesList = document.getElementById("countries");

    countries.forEach((country) => {
      let singleCountry = `<div class="card">
     <img src="${country.flag}" class="card-img-top" alt="${country.name}" />
     <div class="card-body">
       <h5 class="card-title">${country.name}</h5>
       <p class="card-text">Capital: <strong> ${country.capital} </strong></p>
       <a href="#" class="btn btn-primary">View Details</a>
     </div>
   </div>`;
      countriesList.innerHTML += singleCountry;
    });
  });
