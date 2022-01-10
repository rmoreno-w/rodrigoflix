import React from 'react';
import styled from 'styled-components';
import { FooterBase } from './styles';

const LogoAlura = styled.img<{
    src: string;
    alt: string;
    width: number;
    height: number;
}>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

const FooterText = styled.p`
    font-size: 14px;

    @media (max-width: 800px) {
        font-size: 12px;
    }
`;
function Footer() {
    return (
        <FooterBase>
            <a href='https://www.alura.com.br/'>
                <LogoAlura
                    src='https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg'
                    alt='Logo Alura'
                    height={window.screen.width > 800 ? 35 : 20}
                    width={window.screen.width > 800 ? 75 : 50}
                />
            </a>
            <FooterText>
                Orgulhosamente criado durante a <a href='https://www.alura.com.br/'>Imersão React da Alura</a>
            </FooterText>
        </FooterBase>
    );
}

export default Footer;
