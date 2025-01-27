
function renderPropiedades(arreglo, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = ""; 
    arreglo.forEach(propiedad => {
        const template = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><strong>Ubicación:</strong> ${propiedad.ubicacion}</p>
                        <p><strong>Habitaciones:</strong> ${propiedad.habitaciones}</p>
                        <p><strong>Precio:</strong> $${propiedad.costo.toLocaleString()}</p>
                        <p>${propiedad.smoke ? "<span class='text-success'>Se permite fumar</span>" : "<span class='text-danger'>No se permite fumar</span>"}</p>
                        <p>${propiedad.pets ? "<span class='text-success'>Se permiten mascotas</span>" : "<span class='text-danger'>No se permiten mascotas</span>"}</p>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += template;
    });
    
}

const propiedadesVenta = [
    {
        nombre: "Casa Familiar",
        src: "assets/img/casa1.jpg",
        descripcion: "Una hermosa casa con jardín amplio.",
        ubicacion: "Santiago",
        habitaciones: 4,
        costo: 200000000,
        smoke: false,
        pets: true
    },
    {
        nombre: "Departamento Moderno",
        src: "assets/img/departamento1.jpg",
        descripcion: "Departamento con excelente ubicación y diseño moderno.",
        ubicacion: "Providencia",
        habitaciones: 2,
        costo: 120000000,
        smoke: true,
        pets: false
    },
    {
        nombre: "Cabaña Acogedora",
        src: "assets/img/cabana1.jpg",
        descripcion: "Cabaña rústica perfecta para vacaciones.",
        ubicacion: "Valdivia",
        habitaciones: 3,
        costo: 90000000,
        smoke: false,
        pets: true
    }
];

const propiedadesAlquiler = [
    {
        nombre: "Departamento Céntrico",
        src: "assets/img/departamento2.jpg",
        descripcion: "Cerca de todo, ideal para profesionales.",
        ubicacion: "Santiago Centro",
        habitaciones: 2,
        costo: 450000,
        smoke: true,
        pets: false
    },
    {
        nombre: "Casa para Familia",
        src: "assets/img/casa3.jpg",
        descripcion: "Amplia casa en un sector tranquilo.",
        ubicacion: "La Florida",
        habitaciones: 3,
        costo: 800000,
        smoke: false,
        pets: true
    },
    {
        nombre: "Loft Moderno",
        src: "assets/img/loft1.jpg",
        descripcion: "Diseño minimalista con excelente iluminación.",
        ubicacion: "Providencia",
        habitaciones: 1,
        costo: 600000,
        smoke: false,
        pets: false
    }
];


window.renderPropiedades = renderPropiedades;
window.propiedadesVenta = propiedadesVenta;
window.propiedadesAlquiler = propiedadesAlquiler;
