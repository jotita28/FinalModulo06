const { readFileAsJSON, writeFileFromJSON } = require("../fileSystem");

const edit = async ({id, anime}) => {
    const resultadoAnime = await readFileAsJSON();
    const AnimePrev = resultadoAnime[id];
    resultadoAnime[id] = {...AnimePrev, ...anime}
    await writeFileFromJSON(resultadoAnime);
    return {
        result: resultadoAnime,
        EditAnime: AnimePrev,
    };
}

module.exports = {
    edit,
}