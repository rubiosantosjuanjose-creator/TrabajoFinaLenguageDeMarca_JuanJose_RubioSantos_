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


let resenas = [

    {
        id: 1,
        videojuegoId: 1,
        usuario: "Carlos",
        comentario: "Muy divertido",
        puntuacion: 9
    }

];

// Endpoint para mostrar reseñas
app.get("/resenas", (req, res) => {

    res.json(resenas);

});
// Endpoint para añadir reseñas
app.post("/resenas", (req, res) => {

    let nuevaResena = req.body;

    
    if (
        nuevaResena.usuario == undefined || nuevaResena.comentario == undefined
    ) {

        res.status(400).json({
            error: "Faltan datos"
        });

    } else {

        // Creamos id
        nuevaResena.id = resenas.length + 1;

        // Guardamos reseña
        resenas.push(nuevaResena);

        // Mensaje
        res.status(201).json({
            mensaje: "Reseña añadida"
        });

    }

});

// Endpoint para borrar reseñas
app.delete("/resenas/:id", (req, res) => {

    const id = parseInt(req.params.id);

    let borrada = false;

    // Recorremos reseñas
    for (let i = 0; i < resenas.length; i++) {

        if (resenas[i].id == id) {

            // Borramos
            resenas.splice(i, 1);

            borrada = true;

        }

    }

    // Si no existe
    if (borrada == false) {

        res.status(404).json({
            error: "No existe la reseña"
        });

    } else {

        res.status(200).json({
            mensaje: "Reseña borrada"
        });

    }

});
// Endpoint para ver reseñas de un videojuego
app.get("/videojuegos/:id/resenas", (req, res) => {

    const id = parseInt(req.params.id);

    let resultado = [];

    // Recorremos reseñas
    for (let i = 0; i < resenas.length; i++) {

        if (resenas[i].videojuegoId == id) {

            resultado.push(resenas[i]);

        }

    }
    res.json(resultado);
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

// Endpoint para modificar videojuegos
app.put("/videojuegos/:id", (req, res) => {

    const id = parseInt(req.params.id);

    let videojuegoEncontrado = null;

    // Buscamos el videojuego
    for (let i = 0; i < videojuegos.length; i++) {

        if (videojuegos[i].id === id) {

            videojuegoEncontrado = videojuegos[i];

        }

    }

    
    if (videojuegoEncontrado == null) {

        res.status(404).json({
            error: "Videojuego no encontrado"
        });

    } else {

        // Modificamos los datos
        videojuegoEncontrado.titulo = req.body.titulo;
        videojuegoEncontrado.genero = req.body.genero;
        videojuegoEncontrado.plataforma = req.body.plataforma;
        videojuegoEncontrado.precio = req.body.precio;
        videojuegoEncontrado.stock = req.body.stock;

        
        res.status(200).json({
            mensaje: "Videojuego modificado correctamente",
            datos: videojuegoEncontrado
        });

    }

});
// Endpoint para borrar videojuegos
app.delete("/videojuegos/:id", (req, res) => {

    const id = parseInt(req.params.id);

    let encontrado = false;

    // Recorremos los videojuegos
    for (let i = 0; i < videojuegos.length; i++) {

        
        if (videojuegos[i].id == id) {

            
            videojuegos.splice(i, 1);

            encontrado = true;

        }

    }

    //Error si no se encuentra el videojuego
    if (encontrado == false) {

        res.status(404).json({
            error: "No se encontro el videojuego"
        });

    } else {

        // Mensaje de confirmacion
        res.status(200).json({
            mensaje: "Videojuego eliminado"
        });

    }

});

// Encendemos el servidor
app.listen(PORT, () => {

    console.log("Servidor iniciado en el puerto " + PORT);

});
