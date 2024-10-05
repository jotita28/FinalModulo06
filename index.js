const express = require('express');
const app = express();
const listarAnimes = require('./utils/animes/listarAnimes');
const agregar = require('./utils/animes/agregar');
const editarAnime = require('./utils/animes/editarAnime');
const eliminar = require('./utils/animes/eliminar')
app.use(express.json()); //middleware

//listar todos los animes
app.get("/animes", async (req, res) => {
    resultado = await listarAnimes.allAnimes();
    res.json(resultado);
});

//buscar animes por su nombre

app.get("/animes/nombre/:nombre", async (req, res) => {
    const { nombre } = req.params;
    const resultado = await listarAnimes.byName(nombre);
    const statusCode = resultado.error ? 404 : 200;
    res.status(statusCode).json(resultado);
});

//buscar animes por su id

app.get("/animes/:animeId", async (req, res) => {
    const { animeId } = req.params;
    const resultado = await listarAnimes.byId(animeId);
    const statusCode = resultado.error ? 404 : 200;
    res.status(statusCode).json(resultado);
});

//agregar un anime 

app.post("/animes", async (req, res) => {
    const anime = req.body;
    const resultado = await agregar.add(anime);
    res.status(201).json(resultado);
});

//editar un anime

app.put("/animes/:id", async (req, res) => {
    const { id } = req.params; 
    const anime = req.body;
    const resultado = await editarAnime.edit({id, anime});
    res.json(resultado);
});

//eliminar un anime

app.delete("/animes", async (req, res) => {
    const { animeId } = req.body;
    const resultado = await eliminar.remove(animeId)
    const statusCode = resultado.error ? 404 : 200
    res.status(statusCode).json(resultado)
});

//servidor

app.listen(8000, ()=>{
    console.log("El servidor se esta ejecutando")
})

module.exports = { app };