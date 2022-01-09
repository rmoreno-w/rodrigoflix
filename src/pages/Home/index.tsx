import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
    const [dadosIniciais, setDadosIniciais] = useState([]);

    useEffect(() => {
        categoriasRepository
            .getAllCategsWithVideos()
            .then((categorias) => {
                console.log(categorias);
                setDadosIniciais(categorias);
            })
            .catch((error) => {
                console.log('TRATAR ERRO AQUI', error);
            });
    }, []);

    return (
        <PageDefault>
            {dadosIniciais.length === 0 ? (
                <div>Carregando</div>
            ) : (
                <>
                    <BannerMain
                        url='https://www.youtube.com/watch?v=vStgnVQtyeA&t=9628s'
                        videoDescription='Entrevista com o streamer Gaules. O cara é exemplo de resiliência e tenho como meta de vida ser uma pessoa tão resiliente como ele!'
                        videoTitle='Entrevista Gaulês - Flow Podcast'
                    />
                    {dadosIniciais.map((_, index) => (
                        <Carousel key={index} category={dadosIniciais[index]} />
                    ))}
                </>
            )}
        </PageDefault>
    );
}

export default Home;
