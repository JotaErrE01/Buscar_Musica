import * as UI from './interfaz';

export class API{
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion; 
    }

    consultarAPI(){
        //consultamos la API
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const { lyrics } = data;

                if(lyrics){
                    UI.divResultado.innerText = lyrics;
                    UI.headingResultado.innerText = `Canción: ${this.cancion}\n\nArtista: ${this.artista}`;
                    return;
                }

                UI.limpiarHtml();
                UI.divMensajes.innerText = 'Canción no encontrada';
                UI.divMensajes.classList.add('error');

                setTimeout(() => {
                    UI.divMensajes.classList.remove('error');
                    UI.divMensajes.innerHTML = '';
                }, 3000);
            })
    }
}