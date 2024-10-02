let api = "https://restcountries.com/v3.1/all";
let json = "data.json";
let button = document.querySelector("#button");
let output = document.querySelector("#output");

const listcountries = async () => {
  try {
    let result = await fetch(api);
    let data = await result.json();
    for (let i = 0; i < 250; i++) {
      countrytemplate(data[i]);
      // countryPage(data[i])
      searchcountry();
      dropdownlist(data[i]);
    }
    filterregion();
  } catch (e) {
    console.log(e);
  }
};

const countrytemplate = (countrydata) => {
  const card = document.createElement("div");
  card.id = "card";

  const img = document.createElement("img");
  img.id = "countryimg";
  img.src = countrydata.flags.png;

  const country = document.createElement("p");
  country.id = "country";
  country.textContent = countrydata.name.common;

  const population = document.createElement("p");
  population.id = "population";
  population.textContent = "Population: " + countrydata.population;

  const region = document.createElement("p");
  region.id = "region";
  region.textContent = "Region: " + countrydata.region;

  const capital = document.createElement("p");
  capital.id = "capital";
  capital.textContent = "Capital: " + countrydata.capital;

  card.appendChild(img);
  card.appendChild(country);
  card.appendChild(population);
  card.appendChild(region);
  card.appendChild(capital);
  output.appendChild(card);

  card.addEventListener("click", () => {
    document.querySelector(".filter").classList.add("hidden")
    output.innerHTML = '';
    countryPage(countrydata);
  });
};

const searchcountry = () => {
  const searchInput = document.querySelector("#searchbar");
  const listItems = document.querySelectorAll("#country");
  searchInput.addEventListener("input", () => {
    const filterValue = searchInput.value.toUpperCase();
    listItems.forEach((items) => {
      const text = items.innerText.toUpperCase();
      if (text.includes(filterValue)) {
        items.parentElement.classList.remove("hidden");
      } else {
        items.parentElement.classList.add("hidden");
      }
    });
  });
};

const dropdown = () => {
  const button = document.querySelector(".dropbtn");
  const dropdownbtn = document.getElementById("myDropdown");
  button.addEventListener("click", () => {
    dropdownbtn.classList.toggle("show");
  });
};

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const dropdownlist = (countrydata) => {
  const dropdown = document.querySelector("#myDropdown");
  const region = countrydata.region;
  const regionoption = document.createElement("a");
  regionoption.textContent = region;
  dropdown.appendChild(regionoption);
};

const filterregion = () => {
  const listItems = document.querySelectorAll("a");
  listItems.forEach((item) => {
    item.addEventListener("click", () => {
      const cards = document.querySelectorAll("#card");
      const selectedRegion = item.textContent;
      cards.forEach((card) => {
        const regionText = card
          .querySelector("#region")
          .textContent.replace("Region: ", "");
        if (selectedRegion === "All") {
          card.classList.remove("hidden");
        } else if (regionText === selectedRegion) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
};

const getnativeName = (data) => {
  const nativeNames = data.name.nativeName;
  for (const j in nativeNames) {
    const officialName = nativeNames[j].official;
    return officialName
  }
};

const countryPage = (countrydata) => {
  const output =document.querySelector("#output")
  const countrypage = document.createElement("div");
  countrypage.id = "countrypage";
  const leftsection = document.createElement("div");
  leftsection.id = "leftsection";

  const backButton = document.createElement("button");
  backButton.id = "back";
  backButton.textContent = "Back";

  const flagImage = document.createElement("img");
  flagImage.id = "flag";
  flagImage.src = countrydata.flags.png;

  leftsection.appendChild(backButton);
  leftsection.appendChild(flagImage);

  const rightsection = document.createElement("div");
  rightsection.id = "rightsection";

  const countryName = document.createElement("h1");
  countryName.textContent = countrydata.name.common;

  const nativeName = document.createElement("p");
  nativeName.textContent = "Native Name: " + getnativeName(countrydata);


  const population = document.createElement("p");
  population.textContent = "Population: " + countrydata.population ;

  const region = document.createElement("p");
  region.textContent = "Region: "+ countrydata.region;

  const capital = document.createElement("p");
  capital.textContent = "Capital: " + countrydata.capital;

  // const topLevelDomain = document.createElement("p");
  // topLevelDomain.textContent = "Top Level Domain: "+countrydata;

  const currencies = document.createElement("p");
  currencies.textContent = "Currencies: " + Object.keys(countrydata.currencies)[0]

  const language = document.createElement("p");
  language.textContent = "Language: " + Object.values(countrydata.languages).toString()

  // const borderCountries = document.createElement("p");
  // borderCountries.textContent = "Border Countries: " + countrydata.borders;


  rightsection.appendChild(countryName);
  rightsection.appendChild(nativeName);
  rightsection.appendChild(population);
  rightsection.appendChild(region);
  rightsection.appendChild(capital);
  // rightsection.appendChild(topLevelDomain);
  rightsection.appendChild(currencies);
  rightsection.appendChild(language);
  // rightsection.appendChild(borderCountries);


  countrypage.appendChild(leftsection);
  countrypage.appendChild(rightsection);

  output.appendChild(countrypage);
  backButton.addEventListener("click", () => {
    document.querySelector(".filter").classList.remove("hidden")
    output.innerHTML = '';
    listcountries();
  });
};

window.addEventListener("load", () => {
  listcountries();
  dropdown();
});


//changetheme
const changetheme = ()=>{
  const button = document.querySelector("#mode")
  const theme = document.getElementById('theme-stylesheet');
  button.addEventListener('click', () => {
    if (theme.getAttribute('href') === 'theme-light.css') {
      theme.setAttribute('href', 'theme-dark.css');
    } else {
      theme.setAttribute('href', 'theme-light.css');
    }
  })
}

changetheme()