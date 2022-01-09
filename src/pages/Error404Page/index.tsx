import React from 'react';
import styled from 'styled-components';
import PageDefault from '../PageDefault';
import SVGContainer from '../../components/SVGContainer';
import { ReactComponent as ErrorImage } from '../../assets/images/404Error.svg';

const ErrorPage = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 32px;
        font-weight: bold;
    }

    @media (max-width: 800px) {
        h1 {
            font-size: 28px;
        }
    }
`;

export default function Error404Page() {
    return (
        <PageDefault>
            <ErrorPage>
                <h1>Desculpe! Não conseguimos encontrar a página que você procura</h1>
                <SVGContainer
                    height={window.screen.width > 800 ? 400 : 200}
                    width={window.screen.width > 800 ? 400 : 200}
                >
                    <ErrorImage />
                </SVGContainer>
                <p>
                    Ilustração por{' '}
                    <a href='https://storyset.com/web' target='_blank' rel='noreferrer'>
                        Storyset
                    </a>
                </p>
            </ErrorPage>
        </PageDefault>
    );
}
