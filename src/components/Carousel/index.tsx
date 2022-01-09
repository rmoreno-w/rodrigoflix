/* eslint-disable import/extensions */
import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from '../Slider';

export type Video = {
    categoriaId: number;
    id: number;
    titulo: string;
    url: string;
};

export type Categoria = {
    cor: string;
    id: string;
    titulo: string;
    link_extra: {
        text: string;
        url: string;
    };
    videos: Video[];
};

type CarouselProps = {
    category: Categoria;
};

function Carousel({ category }: CarouselProps) {
    const categoryTitle = category.titulo;
    const categoryColor = category.cor;
    const categoryExtraLink = category.link_extra;
    const { videos } = category;
    return (
        <VideoCardGroupContainer>
            {categoryTitle && (
                <>
                    <Title style={{ backgroundColor: categoryColor || 'red' }}>{categoryTitle}</Title>
                    {categoryExtraLink && (
                        <ExtraLink href={categoryExtraLink.url} target='_blank'>
                            {categoryExtraLink.text}
                        </ExtraLink>
                    )}
                </>
            )}
            <Slider>
                {videos.map((video: Video) => (
                    <SliderItem key={video.titulo}>
                        <VideoCard videoTitle={video.titulo} videoURL={video.url} categoryColor={categoryColor} />
                    </SliderItem>
                ))}
            </Slider>
        </VideoCardGroupContainer>
    );
}

export default Carousel;
