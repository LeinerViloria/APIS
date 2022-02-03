
const API ="http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=39d409c3ce325d60d5490b41b3d4619e&hash=46f5b18934f615e1bb8063d4fbace35a";

const getApi = async (url)=>{
    try {
        const response = await fetch(url);
        const json = await response.json();
        fillData(json.data.results);

    } catch (error) {
        console.log("problemas en API", error);

    }




}

const fillData = (data) =>{
    let html = "";
  data.forEach((ch) => {
    // console.log(ch.thumbnail.path+"."+ch.thumbnail.extension);
    html += '<div class="col ">';
    html += '<div class="card h-100 target">';
    html += `<img src="${ch.thumbnail.path+"."+ch.thumbnail.extension}" class="card-img-top" alt="">`;
    html += '<div class="card-body">';
    html +=  `<h5 class="card-title">Titulo: ${ch.title}</h5>`;
    html +=  `<h5 class="card-title">Id: ${ch.id}</h5>`;
    html +=  `<h5 class="card-title">Numero de paginas: ${ch.pageCount}</h5>`;
    
    if (ch.description !="" & ch.description != "#N/A") {
        html +=  `<h5 class="card-title">Description: ${ch.textObjects[0]}</h5>`;
    }else{
        html +=  `<h5 class="card-title">Description: Este comic no cuenta con descripcion </h5>`;
    }
    html += "</div>";
    html += '</div>';
    html += '</div>';
  });
  document.getElementById("comics").innerHTML = html;


}

getApi(API);