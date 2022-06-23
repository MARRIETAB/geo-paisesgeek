import {destinos} from "../data/data.js";
import {mostrarLugar} from "../script/mostrarLugar.js";

let detalle = document.getElementById('detalle');

document.addEventListener('click',({target})=>{
  //console.log(target);
  let cardid = target.id; 
  //console.log(target.id)
  let destinosFilter = destinos.filter(destino=> destino.continente === cardid);
  //console.log(destinosFilter);
  localStorage.setItem('destinosFilt', JSON.stringify(destinosFilter));
  let destino =   JSON.parse(localStorage.getItem('destinosFilt'));
  //console.log(destino);
  mostrarLugar(destino, detalle);
});


  




