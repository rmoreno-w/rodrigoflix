import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, Description, Item, Title, WatchButton } from './styles';

function getYouTubeId(youtubeURL: string) {
    return youtubeURL.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, '$7');
}

type BannerProps = {
    videoTitle: string;
    videoDescription: string;
    url: string;
};

export default function BannerMain({ videoTitle, videoDescription, url }: BannerProps) {
    const youTubeID = getYouTubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

    return (
        <BannerMainContainer backgroundImage={bgUrl}>
            <ContentAreaContainer>
                <Item>
                    <Title>{videoTitle}</Title>

                    <Description>{videoDescription}</Description>
                </Item>

                <Item>
                    <VideoIframeResponsive youtubeID={youTubeID} />
                    <WatchButton>Assistir</WatchButton>
                </Item>
            </ContentAreaContainer>
        </BannerMainContainer>
    );
}
