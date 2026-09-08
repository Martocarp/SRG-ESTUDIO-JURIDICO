const contenedorTarjetas = document.getElementById("us_card");

async function cargarEquipo() {
    try {
        const respuesta = await fetch('./data/team.json');
        const equipo = await respuesta.json();
        
        let contenidoHTML = "";

        equipo.forEach(persona => {
            contenidoHTML += `
                <div class="card_people">
                    <h3>${persona.nombre}</h3>
                    <h5>${persona.certificacion}</h5>
                    <img src="${persona.imagen}" alt="Foto de perfil" class="img_profile">
                    <p>${persona.descripcion}</p>
                    <a href="${persona.link1}" target="_blank"><img src="./data/linkedin.svg" alt="LinkedIn"></a>
                    <a href="${persona.link2}" target="_blank"><img src="./data/linkedin.svg" alt="LinkedIn"></a>
                    <a href="${persona.link3}" target="_blank"><img src="./data/linkedin.svg" alt="LinkedIn"></a>

                </div>
            `;
        });

        contenedorTarjetas.innerHTML = contenidoHTML;

    } catch (error) {
        console.error("Hubo un error al cargar el equipo:", error);
    }
}

cargarEquipo();