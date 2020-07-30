import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../PageDefault';


function Home() {
  return (
    <>
    <PageDefault>
    <BannerMain url="https://www.youtube.com/watch?v=vStgnVQtyeA&t=9628s" 
    videoDescription="Entrevista com o streamer Gaules. O cara é exemplo de resiliência e tenho como meta de vida ser uma pessoa tão resiliente como ele!"
    videoTitle="Entrevista Gaulês - Flow Podcast"/>

    <Carousel ignoreFirstVideo="True" category={dadosIniciais.categorias[0]}/>

    <Carousel category={dadosIniciais.categorias[1]}/>
    <Carousel category={dadosIniciais.categorias[2]}/>
    <Carousel category={dadosIniciais.categorias[3]}/>
    <Carousel category={dadosIniciais.categorias[4]}/>
    <Carousel category={dadosIniciais.categorias[5]}/>

    </PageDefault>
    </>
  );
}

export default Home;