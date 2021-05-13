//imports
import '../index.html';
import '../css/style.css';
import { API } from "./api";
import * as UI from './interfaz';

//funciones
function buscarCancion(e){
    e.preventDefault();

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(!artista || !cancion){
        UI.limpiarHtml();
        UI.divMensajes.textContent = 'Todos los Campos Son Obligatorios';
        UI.divMensajes.classList.add('error');
        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 3000);
        return;
    }

    //consultar API
    const busqueda = new API(artista, cancion);
    busqueda.consultarAPI();
}


//listenners
document.addEventListener('DOMContentLoaded', _ => {
    UI.formularioBuscar.addEventListener('submit', buscarCancion);
})