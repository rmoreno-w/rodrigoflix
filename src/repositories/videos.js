import config from '../config';

const CATEGORIES_URL = `${config.URL_BACKEND}/videos`;

const insertVideo = (dadosDoVideo) =>
    fetch(`${CATEGORIES_URL}?_embed=videos`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(dadosDoVideo),
    }).then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
            const respostaConvertidaDoServidor = await respostaDoServidor.json();

            return respostaConvertidaDoServidor;
        }

        throw new Error('Não foi possível cadastrar o Video :(');
    });

export default {
    insertVideo,
};
