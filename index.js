// Temática: Tienda de videojuegos

// Importamos express
const express = require("express");

// Creamos la aplicación
const app = express();

// Puerto del servidor
const PORT = 3000;

// Middleware para leer JSON
app.use(express.json());

// Datos iniciales sobre algunos videojuegos
let videojuegos = [
    {
        id: 1,
        titulo: "The Legend of Zelda: Breath of the Wild",
        genero: "Aventura",
        plataforma: "Nintendo Switch",
        precio: 45,
        alquilerDisponible: true,
        stock: 10,
        descripcion: "Juego de exploración en mundo abierto",
        clasificacion: "AAA"
    },

    {
        id: 2,
        titulo: "Minecraft",
        genero: "Sandbox",
        plataforma: "PC",
        precio: 20,
        alquilerDisponible: true,
        stock: 15,
        descripcion: "Juego de construcción y supervivencia",
        clasificacion: "Indie"
    }
];

// Endpoint para obtener todos los videojuegos
app.get("/videojuegos", (req, res) => {

    res.json(videojuegos);

});

// Encendemos el servidor
app.listen(PORT, () => {

    console.log("Servidor iniciado en el puerto " + PORT);

});

// Endpoint para obtener un videojuego por ID
app.get("/videojuegos/:id", (req, res) => {

    // Convertimos el parámetro a número
    const id = parseInt(req.params.id);

    // Buscamos el videojuego
    const videojuego = videojuegos.find(v => v.id === id);

    // Si no existe devolvemos error
    if (!videojuego) {

        return res.status(404).json({
            error: "Videojuego no encontrado"
        });

    }

    // Si existe devolvemos el videojuego
    res.json(videojuego);

});

// Endpoint para añadir videojuegos
app.post("/videojuegos", (req, res) => {

    let nuevoVideojuego = req.body;

    // Comprobamos algunos datos importantes
    if (
        nuevoVideojuego.titulo == undefined ||
        nuevoVideojuego.genero == undefined ||
        nuevoVideojuego.plataforma == undefined
    ) {

        res.status(400).json({
            error: "Faltan datos"
        });

    } else {

        // Creamos un nuevo id
        nuevoVideojuego.id = videojuegos.length + 1;

        // Añadimos el videojuego
        videojuegos.push(nuevoVideojuego);

        // Mensaje de confirmacion
        res.status(201).json({
            mensaje: "Videojuego añadido",
            datos: nuevoVideojuego
        });

    }

});