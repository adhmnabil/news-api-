let sports = document.getElementById("sports");
let business = document.getElementById("business");
let science = document.getElementById("science");
let entertainment = document.getElementById("entertainment");
let general = document.getElementById("health");
let technology = document.getElementById("technology");

let articless = [];

async function getnews(country, category) {
  let response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=c765e50fe53c4dca83e43712783eb4fe`
  );

  let finalresult = await response.json();

  let articles = finalresult.articles;

  articless = articles;

  displaynews();

  console.log(articles);
}

function displaynews() {
  let cartoona = ``;

  for (let i = 0; i < articless.length; i++) {
    cartoona += ` 
        <div class="news">

            <img src="${
              articless[i].urlToImage
                ? articless[i].urlToImage
                : "images/images.jpg"
            }" alt="news">
            <p>Source: ${articless[i].source.name}</p>
            <h2>${articless[i].title}</h2>
            <p>${articless[i].description}</p>
            </div>
    `;
  }

  document.getElementById("news").innerHTML = cartoona;
}

sports.addEventListener("click", function () {
  getnews("us", "sports");
});
business.addEventListener("click", function () {
  getnews("eg", "business");
});

science.addEventListener("click", function () {
  getnews("eg", "science");
});
entertainment.addEventListener("click", function () {
  getnews("eg", "entertainment");
});
general.addEventListener("click", function () {
  getnews("eg", "general");
});
technology.addEventListener("click", function () {
  getnews("eg", "technology");
});

getnews("us", "sports");
