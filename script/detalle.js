import {destinos} from "../data/data.js";

document.addEventListener("click", ({target})=>{
  
  if (target.classList.contains('btn')){
    container.innerHTML = "";
    let destinosFind = destinos.find(d => d.id == target.id);
    localStorage.setItem('destinosFilter', JSON.stringify(destinosFind));
    window.location.href = './pages/detalleForm.html';
  }
});