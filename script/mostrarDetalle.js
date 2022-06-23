let detalle2 = document.getElementById('detalle2');
let destino2 =   JSON.parse(localStorage.getItem('destinosFilter'));

window.onload = function(){
    mostrarDetalle(destino2,detalle2);
}

export function mostrarDetalle(lugar, detalle){
    detalle.innerHTML="";
    console.log(lugar);  
    let div = document.createElement("div");
    div.classList.add("tarjeta2");

    let img = document.createElement("img");
    img.classList.add("imagen");
    img.setAttribute("id","imgCont")
    img.setAttribute("src", "." + lugar.imagen);
    img.setAttribute("alt",lugar.destino);
    img.setAttribute("width","100%");

    let h2 = document.createElement("h2");
    h2.setAttribute("id","destino");
    h2.textContent = lugar.destino;

    let p = document.createElement("p");
    p.setAttribute("id","descripcion");
    p.textContent = lugar.descripcion;

    let imgCont = document.createElement("img");
    imgCont.setAttribute("id","imgCont")
    imgCont.setAttribute("src", "." + lugar.imgCont);
    
    document.getElementById('destinoForm').setAttribute('placeholder',lugar.destino);
    document.getElementById('continenteForm').setAttribute('placeholder',lugar.continente)

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(imgCont);

    detalle.appendChild(div);
}

