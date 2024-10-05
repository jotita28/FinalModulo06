const { readFileAsJSON } = require("../fileSystem");

const allAnimes = async () => {
    const resultado = await readFileAsJSON();    
    return { result: resultado };
};


const byName = async (nombre) => {
    const resultadoAnime = await readFileAsJSON();
    const arreglo = Object.values(resultadoAnime);
    const anime = arreglo.filter((anime) => anime.nombre === nombre);
    if (!anime.length) {
        return {
            error: "No existe un anime con ese nombre",
            result: {},
        };
    }
    return {
        result: anime,
    };
};

const byId = async (id) => {
    const resultadoAnime = await readFileAsJSON();
    const anime = resultadoAnime[id];
    if (!anime) {
        return {
            error: "No existe un anime con dicho ID",
            result: {},
        };
    }
    return {
        result: anime,
    };
};

module.exports = {
    allAnimes,
    byName,
    byId
};