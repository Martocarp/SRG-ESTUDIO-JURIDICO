const contenedorTarjetas = document.getElementById("us_card");
const slides = document.querySelectorAll('.slide');
const faqQuestions = document.querySelectorAll('.faq-question');
let currentSlide = 0;


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

window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    
    // Se achica recién cuando bajamos más de 150 píxeles (evitando el bucle)
    if (window.scrollY > 150) {
        header.classList.add("scrolled");
    } 
    // Vuelve a su tamaño original SOLO si subimos casi hasta arriba de todo
    else if (window.scrollY < 20) {
        header.classList.remove("scrolled");
    }
});

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        // Agrega la clase 'abierto' si no la tiene, y se la saca si ya la tiene
        item.classList.toggle('abierto');
    });
});