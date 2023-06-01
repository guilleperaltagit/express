console.log("Ejecutando ...");

const express = require("express")
const server = express()

const URL = "localhost"
const PORT = 3050

//Define la ruta básica
server.get("/", (req, res) => {
    res.send("<h1>BIENVENIDOS A EXPRESS</h1>")
})

//Define la ruta cursos. Responde un json
server.get("/cursos", (req, res) => {
    res.send([
        {
            "nombre": "HTML",
            "Duración": "3"
        },
        {
            "nombre": "CSS",
            "Duración": "2"  
        },
        {
            "nombre": "JavaScript",
            "Duración": "5"
        }
    ])
})

//Define la ruta contacto
server.get("/contacto", (req, res) => {
    res.send(`
    <h1>CONTACTO</h1>
    <p>Tel: 351-1234567</p>
    <p>Mail: prueba@untref.com.ar</p>`)
})

server.get("*", (req, res) => {
    res.status(404).send({"error": "404", "description": "No se encuentra la ruta o recurso solicitado." })
})

//Inicia el Servidor
server.listen(PORT, () => {
    console.log(`Servidor iniciado en http://${URL}:${PORT}`);
})