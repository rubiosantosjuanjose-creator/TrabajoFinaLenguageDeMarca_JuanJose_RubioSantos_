// Temática: Tienda de videojuegos

// Importamos express
const express = require("express");

// Creamos la aplicación
const app = express();

// Puerto del servidor
const PORT = 3000;

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
        alquilerDisponible: false,
        stock: 15,
        descripcion: "Juego de construcción y supervivencia",
        clasificacion: "Indie"
    },

    {
        id: 3,
        titulo: "Persona 5 Royal",
        genero: "JRPG",
        plataforma: "PC",
        precio: 30,
        alquilerDisponible: true,
        stock: 15,
        descripcion: "Juego jrpg con elementos de simulación social",
        clasificacion: "AAA"

    }
];

// Endpoint para obtener todos los videojuegos
app.get("/videojuegos", (req, res) => {

    res.json(videojuegos);

});

// Algunas reseñas
let resenas = [

    {
        id: 1,
        videojuegoId: 1,
        usuario: "Carlos",
        comentario: "Muy divertido",
        puntuacion: 9
    },

    {
        id: 2,
        videojuegoId: 2,
        usuario: "Luis",
        comentario: "Un juego muy entretenido",
        puntuacion: 7.5
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
    ) {

        res.status(400).json({
            error: "Faltan datos"
        });

    } else {

        
        nuevaResena.id = resenas.length + 1;

        
        resenas.push(nuevaResena);

        
        res.status(201).json({
            mensaje: "Reseña añadida"
        });

    }

});

// Endpoint para borrar reseñas
app.delete("/resenas/:id", (req, res) => {

    const id = parseInt(req.params.id);

    let borrada = false;

    
    for (let i = 0; i < resenas.length; i++) {

        if (resenas[i].id == id) {

            
            resenas.splice(i, 1);

            borrada = true;

        }

    }

   
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

    
    for (let i = 0; i < resenas.length; i++) {

        if (resenas[i].videojuegoId == id) {

            resultado.push(resenas[i]);

        }

    }
    res.json(resultado);
});

// Endpoint para obtener un videojuego por ID
app.get("/videojuegos/:id", (req, res) => {

     const id = parseInt(req.params.id);
     const videojuego = videojuegos.find(v => v.id === id);

    
    if (!videojuego) {

        return res.status(404).json({
            error: "Videojuego no encontrado"
        });

    }
    res.json(videojuego);

});

// Endpoint para añadir videojuegos
app.post("/videojuegos", (req, res) => {

    let nuevoVideojuego = req.body;

    
    if (
        nuevoVideojuego.titulo == undefined ||
        nuevoVideojuego.genero == undefined ||
    ) {

        res.status(400).json({
            error: "Faltan datos"
        });

    } else {

        
        nuevoVideojuego.id = videojuegos.length + 1;

        
        videojuegos.push(nuevoVideojuego);

       
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
// Endpoint para eliminar videojuegos
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
    if (encontrado == false) {

        res.status(404).json({
            error: "No se encontro el videojuego"
        });

    } else {

        
        res.status(200).json({
            mensaje: "Videojuego eliminado"
        });

    }

});

// Endpoint para buscar por genero
app.get("/genero", (req, res) => {

    let genero = req.query.genero;

    let resultado = [];

    
    for (let i = 0; i < videojuegos.length; i++) {

        
        if (videojuegos[i].genero == genero) {

            resultado.push(videojuegos[i]);

        }

    }

    
    res.json(resultado);

});

// Endpoint para buscar por plataforma
app.get("/plataforma", (req, res) => {

    let plataforma = req.query.plataforma;

    let resultado = [];

    
    for (let i = 0; i < videojuegos.length; i++) {

        a
        if (videojuegos[i].plataforma == plataforma) {

            resultado.push(videojuegos[i]);

        }

    }

    
    res.json(resultado);

});

// Endpoint para ver videojuegos disponibles
app.get("/disponibles", (req, res) => {

    let juegosDisponibles = [];

    
    for (let i = 0; i < videojuegos.length; i++) {

        
        if (videojuegos[i].alquilerDisponible == true) {

            juegosDisponibles.push(videojuegos[i]);

        }

    }
    res.json(juegosDisponibles);

});
// Endpoint para ver videojuegos no disponibles
app.get("/Nodisponibles", (req, res) => {

    let juegosnoDisponibles = [];

    
    for (let i = 0; i < videojuegos.length; i++) {

        
        if (videojuegos[i].alquilerDisponible == false) {

            juegosnoDisponibles.push(videojuegos[i]);

        }

    }
    res.json(juegosnoDisponibles);

});
// Aqui es donde se enciende el servidor
app.listen(PORT, () => {

    console.log("Servidor iniciado en el puerto " + PORT);

});
