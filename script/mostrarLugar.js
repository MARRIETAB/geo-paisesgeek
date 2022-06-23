export function mostrarLugar(destino, detalle){ 
    detalle.innerHTML = "";
    destino.forEach((e) => {

        //console.log(e);
        let div = document.createElement("div");
        div.classList.add("tarjeta");
        //console.log(div);
        let img = document.createElement("img");
        img.classList.add("imagen");
        img.setAttribute("alt",e.destino);
        img.setAttribute("src",e.imagen);

        let h2 = document.createElement("h2");
        h2.setAttribute("id","destino");
        h2.textContent = e.destino;

        let a = document.createElement("a");
        a.classList.add('btn');
        a.setAttribute("id",e.id);
        a.textContent = "Ver más"; 

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(a);

        detalle.appendChild(div);

    });
}

