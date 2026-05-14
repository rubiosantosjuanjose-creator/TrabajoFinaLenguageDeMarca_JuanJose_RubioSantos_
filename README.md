# TrabajoFinalLenguageDeMarca_JuanJose_RubioSantos
Trabajo final de lenguaje de marca
// API REST - Tienda de Videojuegos

// Descripción

Este proyecto consiste en una API REST desarrollada con Node.js y Express basada en una tienda de videojuegos dedicada a la venta y alquiler de juegos de diferentes tipos, tanto modernos como retro.

//////////////////////

// Tecnologías utilizadas

Durante el desarrollo del proyecto se han utilizado las siguientes herramientas:

-Node.js
-Express
-JavaScript
-Bruno 
-GitHub y GitHub Desktop

//////////////////////

// Funcionalidades principales

Actualmente la API permite:

-Añadir videojuegos
-Mostrar videojuegos
-Buscar videojuegos por id
-Modificar videojuegos
-Eliminar videojuegos
-Añadir reseñas
-Mostrar reseñas
-Eliminar reseñas
-Filtrar videojuegos mediante diferentes opciones
-Gestionar errores mediante códigos HTTP

//////////////////////

//Endpoints de videojuegos

Obtener todos los videojuegos:

GET /videojuegos


Buscar videojuego por ID:

GET /videojuegos/:id


Añadir videojuego:

POST /videojuegos


Modificar videojuego:

PUT /videojuegos/:id


Eliminar videojuego:

DELETE /videojuegos/:id


//////////////////////

// Endpoints de reseñas

Mostrar todas las reseñas:

GET /resenas


Añadir reseña:

POST /resenas


Eliminar reseña:

DELETE /resenas/:id


Mostrar reseñas de un videojuego:

GET /videojuegos/:id/resenas


//////////////////////

// Filtros implementados

Filtrar por género:

GET /genero?genero=Sandbox


Filtrar por plataforma:

GET /plataforma?plataforma=PC


Filtrar por rango de precios:

GET /precio?min=20&max=50


Mostrar videojuegos disponibles:

GET /disponibles


//////////////////////

// 
Para comprobar el funcionamiento de la API se ha utilizado Bruno, donde se han realizado pruebas de todos los endpoints disponibles utilizando los distintos métodos HTTP.



