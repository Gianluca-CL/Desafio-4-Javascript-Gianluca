const ventas = document.getElementById('ventas'); 
const arriendos = document.getElementById('arriendos'); 
const arriendosTotales = document.getElementById('arriendoTotales');
const ventasTotales = document.getElementById('ventasTotales');

const propiedadesVenta = [
    {
        nombre: "Casa Familiar",
        src: 'assets/img/casa1.jpg',
        descripcion: "Una hermosa casa con jardín amplio.",
        ubicacion: "Santiago",
        habitaciones: 4,
        costo: 200000000,
        smoke: false,
        pets: true
    },
    {
        nombre: "Departamento Moderno",
        src: "assets/img/departamento2.jpg",
        descripcion: "Departamento con diseño moderno.",
        ubicacion: "Providencia",
        habitaciones: 2,
        costo: 150000000,
        smoke: true,
        pets: false
    }
];

const propiedadesAlquiler = [
    {
        nombre: "Departamento Céntrico",
        src: "assets/img/departamento1.jpg",
        descripcion: "Ideal para estudiantes y profesionales.",
        ubicacion: "Santiago Centro",
        habitaciones: 2,
        costo: 500000,
        smoke: false,
        pets: true
    },
    {
        nombre: "Casa en la Playa",
        src: "assets/img/loft1.jpg",
        descripcion: "Casa a pasos de la playa.",
        ubicacion: "La Serena",
        habitaciones: 3,
        costo: 750000,
        smoke: true,
        pets: false
    }
];

function renderizarPropiedades(arreglo, contenedorReceptor, numeroCards) {
    let plantilla = '';
    for (let item of arreglo.slice(0, numeroCards)) {
        const smokeMessage = item.smoke 
            ? "<p class='green'>Se permite fumar <i class='fas fa-smoking'></i></p>" 
            : "<p class='red'>No se permite fumar <i class='fas fa-ban'></i></p>";

        const petsMessage = item.pets 
            ? "<p class='green'>Se permiten mascotas <i class='fas fa-paw'></i></p>"
            : "<p class='red'>No se permiten mascotas <i class='fas fa-ban'></i></p>";

        const ubicacionMessage = `<p><i class="fas fa-map-marker-alt"></i> ${item.ubicacion}</p>`; 
        const costoMessage = `<p><i class="fas fa-dollar-sign"></i> ${item.costo}</p>`;
        plantilla += `
        <div class='cardA'>
            <p>${item.nombre}</p>
            <img src='${item.src}' alt='Imagen de ${item.nombre}'>
            <p>${item.descripcion}</p>
            <p>${item.costo}</p> <p><i class="fas fa-dollar-sign"></i>
            <p>${item.ubicacion}</p> <p><i class="fas fa-map-marker-alt"></i>
            ${smokeMessage} 
            ${petsMessage}   
        </div>
        `;
    }

    contenedorReceptor.innerHTML = plantilla;
}

if (ventas & arriendos) {
    renderizarPropiedades(propiedadesVenta, ventas, 3); 
    renderizarPropiedades(propiedadesAlquiler, arriendos, 3);
}

if (ventasTotales) {
    renderizarPropiedades(propiedadesVenta, ventasTotales, propiedadesVenta.length); 
}

if (arriendosTotales) {
    renderizarPropiedades(propiedadesAlquiler, arriendosTotales, propiedadesAlquiler.length); 
}
