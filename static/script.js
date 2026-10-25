
const productos = {
    "Hamburguesas": [
        {
            nombre: "Chicharito",
            descripcion: "150 g de carne seleccionada y madurada, pan brioche, queso cheddar, nachos, guacamole, pico de gallo, jalapeños, tacos, verduras frescas y papas a elección.",
            precio: 27000,
            equipo: true
        },
        {
            nombre: "CR7 Cristiano Ronaldo",
            descripcion: "150 g de carne seleccionada y madurada, acompañada de pan brioche, queso cheddar, salsa cuatro quesos, dos tocinetas caramelizadas, verduras frescas y papas a elección (criolla, cascos o francesa).",
            precio: 29000,
            equipo: true
        },
        {
            nombre: "Doble o Nada",
            descripcion: "300 g de carne seleccionada y madurada, pan brioche, doble porción de tocineta y cheddar, verduras frescas y papas a elección.",
            precio: 36000,
            equipo: true
        },
        {
            nombre: "Tigre Falcao",
            descripcion: "150 g de carne madurada, cheddar, 50 g de pulled pork, cebolla y tocineta caramelizada en vino tinto y miel, verduras frescas y papas a elección.",
            precio: 30000,
            equipo: true
        },
        {
            nombre: "Fuera de Lugar",
            descripcion: "150 g de carne madurada, pan brioche, cheddar, tocineta, aros de cebolla rellenos de queso, salsa de la casa, verduras frescas y papas a elección.",
            precio: 28000,
            equipo: true
        },
        {
            nombre: "Caudio Pizarro",
            descripcion: "150 g de carne madurada, cheddar, ceviche de chicharrón, cebolla morada, cilantro, aguacate y papas a elección.",
            precio: 31000,
            equipo: true
        },
        {
            nombre: "Smash",
            descripcion: "Dos monedas de carne seleccionada y madurada de 75 g, plancha, cheddar, tocineta, cebolla crispy y papas a elección.",
            precio: 26000,
            equipo: true
        },
        {
            nombre: "Totemham",
            descripcion: "Hamburguesa de pollo crispy, pan brioche, ensalada coleslaw y papas a elección.",
            precio: 26000,
            equipo: true
        },
        {
            nombre: "Hamburguesa Clásica",
            descripcion: "150 g de carne madurada, pan brioche, cheddar, verduras frescas y papas a elección.",
            precio: 19000,
            equipo: true
        },
        {
            nombre: "Lio Messi",
            descripcion: "150 g de carne madurada, cheddar, tocineta, chorizo argentino, verduras frescas y papas a elección.",
            precio: 30000,
            equipo: true
        },
        {
            nombre: "Nairo Man",
            descripcion: "150 g de carne madurada, cheddar, patacón, huevo frito, aguacate, verduras frescas y papas a elección.",
            precio: 29000,
            equipo: true
        },
        {
            nombre: "Filadelphia",
            descripcion: "150 g de carne madurada, panceta de cerdo en salmuera ahumada y confitada, queso Filadelfia, verduras frescas y papas a elección.",
            precio: 28000,
            equipo: true
        },
        {
            nombre: "Pogba",
            descripcion: "150 g de carne madurada, cheddar, 150 g de champiñones flameados con whiskey, verduras frescas y papas a elección.",
            precio: 28000,
            equipo: true
        },
        {
            nombre: "Todo Bien",
            descripcion: "150 g de carne madurada, pan brioche, rodaja de queso frito, piña caramelizada artesanal, suero costeño, verduras frescas y papas a elección.",
            precio: 30000,
            equipo: true
        }
    ],

    "Menú infantil": [
        {
            nombre: "Mini",
            descripcion: "Dos mini hamburguesas con 65 g de carne seleccionada y madurada, pan brioche, tocineta, queso cheddar, papas a elección (criolla, cascos o francesa) y gaseosa.",
            precio: 29000
        },
        {
            nombre: "Salchipapa Futura Estrella",
            descripcion: "Papa francesa, salchicha y queso mozzarella.",
            precio: 19000
        },
        {
            nombre: "Tenders de pollo",
            descripcion: "4 piezas crujientes de tender de pollo acompañadas de papas a la francesa.",
            precio: 29000
        }
    ],

    "Parrilla": [
        {
            nombre: "Baby Beef - Yamal",
            descripcion: "300 g de lomo fino de res, tierno, asado a las brasas PIRA.",
            precio: 63000
        },
        {
            nombre: "Churrasco - Maradona",
            descripcion: "350 g de lomo ancho de res, brasas PIRA y chimichurri ahumado.",
            precio: 57000
        },
        {
            nombre: "Costillas de Cerdo - Iván René",
            descripcion: "Costillas de cerdo acompañadas con papas a elección.",
            precio: 51000
        },
        {
            nombre: "Lomo Salteado",
            descripcion: "250 g de lomo fino de res al wok con tomate, cebolla roja, arroz blanco y papas a elección.",
            precio: 60000
        },
        {
            nombre: "Pechuga Gratin - Cup",
            descripcion: "350 g de pechuga de pollo a las brasas PIRA con queso fundido.",
            precio: 40000
        },
        {
            nombre: "Punta de Anca - R9 Nazario",
            descripcion: "350 g de punta de anca a las brasas PIRA.",
            precio: 67000
        },
        {
            nombre: "Pechuga Ranchera - Deport",
            descripcion: "350 g de filete de pechuga, salsa ranchera, chorizo y mazorca desgranada.",
            precio: 47000
        },
        {
            nombre: "Tomahawk de Cerdo",
            descripcion: "500 g de corte de cerdo con hueso, a las brasas PIRA.",
            precio: 51000
        },
        {
            nombre: "Codito de Cerdo",
            descripcion: "800 g de codito de cerdo de cocción lenta, piel crocante, puré de papa y demi-glace.",
            precio: 67000
        },
        {
            nombre: "Picaña de Cerdo",
            descripcion: "350 g de picaña de cerdo premium a la parrilla.",
            precio: 49000
        },
        {
            nombre: "New York Steak - Luchito Díaz",
            descripcion: "Corte premium de res a las brasas PIRA.",
            precio: 60000
        },
        {
            nombre: "Filet Mignon - ZIZU",
            descripcion: "260 g de lomo fino envuelto en tocineta, a las brasas, con demi-glace de champiñón.",
            precio: 63000
        },
        {
            nombre: "Ribeye - Rivery",
            descripcion: "Ribeye marmoleado a las brasas PIRA.",
            precio: 60000
        },
        {
            nombre: "Picaña Neymar",
            descripcion: "Picaña seleccionada a las brasas PIRA.",
            precio: 68000
        },
        {
            nombre: "T-Bone de Res - Raphiña",
            descripcion: "500 g de T-bone a las brasas PIRA.",
            precio: 80000
        },
        {
            nombre: "Salmón",
            descripcion: "400 g de lomo de salmón.",
            precio: 65000
        },
        {
            nombre: "Pechuga Champiñón - League",
            descripcion: "350 g de pechuga a las brasas con salsa de champiñones.",
            precio: 47000
        },
        {
            nombre: "Punta de Anca de Cerdo - R Gaucha",
            descripcion: "Corte de cerdo con hueso, de cocción lenta sobre brasas PIRA.",
            precio: 52000
        }
    ],

    "Alitas": [
        {
            nombre: "Combo 1",
            descripcion: "10 alitas en salsa artesanal a elección, una porción de papas (criolla, cascos o francesa) y una salsa.",
            precio: 33000
        },
        {
            nombre: "Combo 2",
            descripcion: "20 alitas, dos porciones de papas y dos salsas.",
            precio: 64000
        },
        {
            nombre: "Combo 3",
            descripcion: "30 alitas, tres porciones de papas y tres salsas.",
            precio: 86000
        }
    ],

    "Mazorcadas": [
        {
            nombre: "Mazorcada Goleadora Súper Especial",
            descripcion: "Maíz, 100 g de carne de res, 100 g de pollo, salteado, tocineta, salsa de maíz, papa cabello de ángel y queso a elección: costeño, mozzarella o campesino.",
            precio: 26000
        },
        {
            nombre: "Mazorcada Goleadora Especial",
            descripcion: "Maíz, 100 g de carne de res, 100 g de cerdo, 100 g de pollo, 100 g de chorizo, salteado, tocineta, salsa de maíz, papa cabello de ángel y queso a elección.",
            precio: 37000
        },
        {
            nombre: "Mazorcada Vegetariana - Juego Limpio",
            descripcion: "Maíz, 100 g de champiñones, 100 g de zucchini, salteado, salsa de maíz, papa cabello de ángel, queso a elección y cebolla crispy.",
            precio: 22000
        }
    ],

    "Perros calientes": [
        {
            nombre: "Carlos Vela",
            descripcion: "Pan brioche, mozzarella, salchicha americana, pico de gallo, guacamole, jalapeños, nachos y papas a elección.",
            precio: 25000
        },
        {
            nombre: "Jhon Pinilla",
            descripcion: "Pan brioche clásico, mozzarella, salchicha americana, salsas de la casa, papa cabello de ángel y papas a elección.",
            precio: 18000
        },
        {
            nombre: "Lukaku",
            descripcion: "Pan brioche, mozzarella, salchicha americana, costillas de cerdo desmechadas en BBQ, cebolla crispy y papas.",
            precio: 25000
        },
        {
            nombre: "Mbappe",
            descripcion: "Pan brioche, mozzarella, salchicha americana, trozos de pollo con champiñones en bechamel, parmesano y papas.",
            precio: 28000
        },
        {
            nombre: "Mohamed Salah",
            descripcion: "Pan brioche, mozzarella, salchicha americana, salsa cuatro quesos, tocineta, piña caramelizada y papas.",
            precio: 28000
        },
        {
            nombre: "René Higuita",
            descripcion: "Pan brioche, mozzarella, salchicha americana, carne desmechada, maíz en salsa criolla de la casa y papas.",
            precio: 28000
        }
    ],

    "Salchipapas": [
        {
            nombre: "Salchipapa Iván René",
            descripcion: "Papas a la francesa, salchicha, trozos de costilla de cerdo, queso gratinado y piña caramelizada.",
            precio: 39000
        },
        {
            nombre: "Salchipapa Monterrey",
            descripcion: "Papas a la francesa, salchicha, trozos de costilla de cerdo, queso gratinado y piña caramelizada.",
            precio: 38000
        }
    ],

    "Bebidas": [
        { nombre: "Jugo en agua", descripcion: "Descripción no especificada en el documento.", precio: 9000 },
        { nombre: "Juego en leche", descripcion: "Nombre tal como aparece en el documento original; confirmar si corresponde a «Jugo en leche».", precio: 11000 },
        { nombre: "Malteadas", descripcion: "Descripción no especificada en el documento.", precio: 17000 },
        { nombre: "Limonada mango biche", descripcion: "Descripción no especificada en el documento.", precio: 12000 },
        { nombre: "Limonada natural", descripcion: "Descripción no especificada en el documento.", precio: 8000 },
        { nombre: "Limonada coco", descripcion: "Descripción no especificada en el documento.", precio: 12000 },
        { nombre: "Limonada cereza da", descripcion: "Nombre tal como aparece en el documento original; confirmar escritura.", precio: 12000 },
        { nombre: "Soda de frutos rojos", descripcion: "Descripción no especificada en el documento.", precio: 15000 },
        { nombre: "Soda de frutos amarillos", descripcion: "Descripción no especificada en el documento.", precio: 15000 },
        { nombre: "Gaseosa", descripcion: "Descripción no especificada en el documento.", precio: 6500 }
    ],

    "Adiciones": [
        { nombre: "Tocineta", descripcion: "Adición extra.", precio: 5000 },
        { nombre: "Queso cheddar", descripcion: "Adición extra.", precio: 4000 },
        { nombre: "Queso mozzarella", descripcion: "Adición extra.", precio: 4000 },
        { nombre: "Queso frito", descripcion: "Adición extra.", precio: 6000 },
        { nombre: "Papa", descripcion: "Criolla, francesa o casco.", precio: 6500 },
        { nombre: "Arroz", descripcion: "Adición extra.", precio: 4000 },
        { nombre: "Carne", descripcion: "Adición extra.", precio: 9000 }
    ],

    "Entradas": [
        {
            nombre: "Papas Golazo",
            descripcion: "Papa criolla, chorizo y limón.",
            precio: 18000
        },
        {
            nombre: "Patacón de Primera",
            descripcion: "4 croquetas de patacón con hogao y queso rallado.",
            precio: 18000
        },
        {
            nombre: "Nachos de Titular",
            descripcion: "Nachos con carne molida en salsa mexicana y guacamole.",
            precio: 26000
        },
        {
            nombre: "Papas de Calentamiento",
            descripcion: "Papa criolla, chicharrón y guacamole.",
            precio: 28000
        },
        {
            nombre: "Papas Tiro Libre Queso y Tocineta",
            descripcion: "Papitas francesas crocantes, bañadas en salsa cheddar y coronadas con tocineta crujiente.",
            precio: 26000
        }
    ]
};

const formatoPrecio = (valor) => {
    if (valor === null || valor === undefined) {
        return "Por confirmar";
    }

    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0
    }).format(valor);
};


function crearTarjeta(producto) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "producto";

    const titulo = document.createElement("h2");
    titulo.textContent = producto.nombre;

    const descripcion = document.createElement("p");
    descripcion.className = "descripcion";
    descripcion.textContent = producto.descripcion;

    const precios = document.createElement("div");
    precios.className = "precios";

    if (producto.equipo) {
        precios.innerHTML = `
            <div class="precio">
                <span>SOLO</span>
                <strong>${formatoPrecio(producto.precio)}</strong>
            </div>
            <div class="precio">
                <span>EN EQUIPO 🍟🥤</span>
                <strong>${formatoPrecio(producto.precio + 10000)}</strong>
            </div>
        `;
    } else {
        precios.innerHTML = `
            <div class="precio">
                <span>PRECIO</span>
                <strong>${formatoPrecio(producto.precio)}</strong>
            </div>
        `;
    }

    tarjeta.append(titulo, descripcion, precios);

    return tarjeta;
}


function mostrarProductos(categoria) {
    const contenedor = document.getElementById("productos");
    const titulo = document.getElementById("titulo-categoria");

    if (!contenedor || !titulo) {
        console.error("No se encontraron los elementos del menú en el HTML.");
        return;
    }

    contenedor.innerHTML = "";
    titulo.textContent = categoria;

    const lista = productos[categoria] || [];

    if (lista.length === 0) {
        contenedor.textContent = "No hay productos disponibles en esta categoría.";
        return;
    }

    lista.forEach(producto => {
        contenedor.appendChild(crearTarjeta(producto));
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll(".categoria");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            botones.forEach(item => item.classList.remove("activa"));
            boton.classList.add("activa");

            const categoria = boton.dataset.categoria;
            mostrarProductos(categoria);
        });
    });

    mostrarProductos("Hamburguesas");
});


/* Navegación entre categorías mediante gestos táctiles */
document.addEventListener("DOMContentLoaded", () => {
    const categorias = [
        "Hamburguesas",
        "Parrilla",
        "Alitas",
        "Mazorcadas",
        "Perros calientes",
        "Salchipapas",
        "Menú infantil",
        "Entradas",
        "Bebidas",
        "Adiciones"
    ];

    const contenido = document.querySelector(".contenido");
    const barraCategorias = document.querySelector(".categorias");

    if (!contenido || !barraCategorias) return;

    let inicioX = 0;
    let inicioY = 0;

    contenido.addEventListener("touchstart", (evento) => {
        const toque = evento.changedTouches[0];
        inicioX = toque.clientX;
        inicioY = toque.clientY;
    }, { passive: true });

    contenido.addEventListener("touchend", (evento) => {
        const toque = evento.changedTouches[0];
        const diferenciaX = toque.clientX - inicioX;
        const diferenciaY = toque.clientY - inicioY;

        // Ignorar movimientos cortos y desplazamientos principalmente verticales.
        if (
            Math.abs(diferenciaX) < 80 ||
            Math.abs(diferenciaX) < Math.abs(diferenciaY) * 1.3
        ) {
            return;
        }

        const botonActivo = barraCategorias.querySelector(".categoria.activa");
        if (!botonActivo) return;

        const categoriaActual = botonActivo.dataset.categoria;
        const indiceActual = categorias.indexOf(categoriaActual);
        if (indiceActual === -1) return;

        // Deslizar a la izquierda: siguiente categoría.
        // Deslizar a la derecha: categoría anterior.
        const nuevoIndice = diferenciaX < 0
            ? indiceActual + 1
            : indiceActual - 1;

        if (nuevoIndice < 0 || nuevoIndice >= categorias.length) return;

        const siguienteBoton = barraCategorias.querySelector(
            `[data-categoria="${categorias[nuevoIndice]}"]`
        );

        if (siguienteBoton) {
            siguienteBoton.click();
            siguienteBoton.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    }, { passive: true });
});



/* Navegación secuencial: un gesto, una categoría */
document.addEventListener("DOMContentLoaded", () => {
    const barra = document.querySelector(".categorias");
    if (!barra) return;

    let inicioX = 0;
    let inicioY = 0;
    let gestoActivo = false;
    let bloqueado = false;

    const DISTANCIA_MINIMA = 80;
    const PAUSA = 700;

    document.addEventListener("pointerdown", (e) => {
        if (e.pointerType === "mouse" && e.button !== 0) return;

        inicioX = e.clientX;
        inicioY = e.clientY;
        gestoActivo = true;
    }, { passive: true });

    document.addEventListener("pointerup", (e) => {
        if (!gestoActivo) return;
        gestoActivo = false;

        if (bloqueado) return;

        const dx = e.clientX - inicioX;
        const dy = e.clientY - inicioY;

        if (
            Math.abs(dx) < DISTANCIA_MINIMA ||
            Math.abs(dx) < Math.abs(dy) * 1.5
        ) {
            return;
        }

        const botones = [
            ...barra.querySelectorAll(".categoria")
        ];

        const actual = botones.findIndex(
            boton => boton.classList.contains("activa")
        );

        if (actual < 0) return;

        const destino = actual + (dx < 0 ? 1 : -1);

        if (destino < 0 || destino >= botones.length) return;

        // Bloquear antes de ejecutar el clic.
        bloqueado = true;

        botones[destino].click();

        botones[destino].scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
        });

        setTimeout(() => {
            bloqueado = false;
        }, PAUSA);
    }, { passive: true });

    document.addEventListener("pointercancel", () => {
        gestoActivo = false;
    }, { passive: true });
});
