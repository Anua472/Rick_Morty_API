
const API_URL = 'https://rickandmortyapi.com/api/character';
const SEARCH_URL = 'https://rickandmortyapi.com/api/character?name=';

const form =document.getElementById('form');
const search = document.getElementById('search')

// cargar los personajes
cargarPersonajes(API_URL);

async function cargarPersonajes(url) {
    try {
        const respuesta = await fetch(url);
        const personajes = await respuesta.json();
        mostrarPersonajes(personajes);
    }catch(error){
        console.error(error);
        alert("Error!... Intente de nuevo");
    }
}
function mostrarPersonajes(lista){

    const contenedor = document.getElementById('main');
    contenedor.innerHTML = "";
       
    lista.results.forEach((personaje) => {
        //utilizamos la desestructuración

        contenedor.innerHTML += 
            `
            <div class= "card">
                <img src="${personaje.image}" alt="${name}">
                <div class="character-info">
                    <h3>${personaje.name}</h3>
                </div>
                <div class="info">
                    <h3>Information</h3>
                    <p>${personaje.status}</p>
                    <p>${personaje.species}</p>
                    <p>${personaje.gender}</p>
                    
                </div>
            </div>
        
            `;
        
    });
}




form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        cargarPersonajes(SEARCH_URL+ searchTerm);
        search.value ='';
    }else{
        window.location.reload();
    }

})

