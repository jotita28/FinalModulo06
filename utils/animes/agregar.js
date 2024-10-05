const { readFileAsJSON, writeFileFromJSON } = require("../fileSystem");

const add = async ({ nombre, genero, año, autor }) => {
    const resultadoAnime = await readFileAsJSON();
    const id = Object.keys(resultadoAnime).length + 1;
    console.log(id);
    const nuevoAnime = {
        [id]:{
        nombre,
        genero,
        año,
        autor,
        }
    };

    const animesActualizados = {...resultadoAnime, ...nuevoAnime}
    await writeFileFromJSON(animesActualizados);
    const nuevoResultadoAnimes = await readFileAsJSON();
    const arreglo = Object.values(nuevoResultadoAnimes);
    const animeFromFile = arreglo.find((anime) => anime.id === id);

    return {
        result: nuevoResultadoAnimes,
        addedBook: animeFromFile,
    };
};

module.exports = {
    add,
};