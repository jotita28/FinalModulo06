const { readFileAsJSON, writeFileFromJSON } = require("../fileSystem");

const remove = async (id) => {
    const resultadoAnime = await readFileAsJSON();
    const animeEliminar = resultadoAnime[id];
    delete resultadoAnime[id];
    await writeFileFromJSON(resultadoAnime);
    const nuevoResultadoAnimes = await readFileAsJSON();
    return {
        result: nuevoResultadoAnimes,
        deletedAnime: animeEliminar,
    };
};

module.exports = {
    remove,
};