const API = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=00/";

const getApi = async (api) => {
  try {
    const response = await fetch(api);
    const json = await response.json();

    json.results.forEach(element => {
      getInfo(element.url);
    });

  } catch (error) {
    console.log("Error in the API: ", error);
  }
};

const getInfo = async (results) => {
  try {
    const res = await fetch(results);
    const json = await res.json();
    fillData(json);
  } catch (error) {
    console.log("Error in the second API: ", error);
  }
}

const fillData = (data) => {
  let html = "";
  let name = data.name;
  let img = data.sprites.other.dream_world.front_default;
  let height = data.height;
  let weight = data.weight;

  html += '<div class="col">';
  html += '<div class="card h-100 bg-info cardHover">';
  html += `<img src="${img}" class="card-img-top" alt="">`;
  html += ' <div class="card-body">';
  html += `<h5 class="card-title">${name}</h5>`;
  html += `<p class="card-text">${weight}</p>`;
  html += `<p class="card-text">${height}</p>`;
  html += "</div>";
  html += "</div>";
  html += "</div>";

  document.getElementById("characters").innerHTML += html;

};

getApi(API);
