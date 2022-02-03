//1. Traer la api

const API = "https://rickandmortyapi.com/api/character";

const getApi = async (api) => {
  try {
        const response = await fetch(api);
        const jsonRM = await response.json();
        fillData(jsonRM.results), pagination(jsonRM.info);
    } catch (error) {
        console.log("Error in the API: " + error);
    }

};

const fillData = (data) =>{
    let html = "";
    data.forEach(ch => {
        html += '<div class="col">';
        html += '<div class="card h-100">';
        html += `<img src="${ch.image}" class="card-img-top" alt="${data.name}">`;

        html += '<div class="card-body">'+
                    `<h5 class="card-title">${ch.name}</h5>`+
                    `<p class="card-text">${ch.status}</p>`+
                '</div>';

        html += '</div>';
        html += '</div>';
    });

    document.getElementById("characters").innerHTML = html;
}

const pagination = (info) =>{
    let html = "";

    html += `<li class="page-item ${(info.prev == null) ? "disabled" : ""}"> <a class="page-link" onclick="getApi('${info.prev}')">Prev</a> </li>`;

    html += `<li class="page-item ${(info.next == null) ? "disabled" : ""}"> <a class="page-link" onclick="getApi('${info.next}')">Next</a> </li>`;

    document.getElementById("pagination").innerHTML=html;
}

getApi(API);
