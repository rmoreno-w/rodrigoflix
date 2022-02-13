import config from '../config';

const CATEGORIES_URL = `${config.URL_BACKEND}/categories`;

const getAllCategs = () =>
    fetch(CATEGORIES_URL).then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
            const respostaConvertidaDoServidor = await respostaDoServidor.json();

            return respostaConvertidaDoServidor;
        }

        throw new Error('Não foi possível buscar os dados no Servidor :(');
    });

const getAllCategsWithVideos = () =>
    fetch(`${CATEGORIES_URL}?_embed=videos`).then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
            const respostaConvertidaDoServidor = await respostaDoServidor.json();

            console.log(respostaConvertidaDoServidor);
            return respostaConvertidaDoServidor;
        }

        throw new Error('Não foi possível buscar os dados no Servidor :(');
    });

export default {
    getAllCategsWithVideos,
    getAllCategs,
};
