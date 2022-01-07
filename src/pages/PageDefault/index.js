import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;

    ${() => {
        const isHomePage = window.location.pathname.length === 1;

        return (
            !isHomePage &&
            css`
                @media (max-width: 800px) {
                    padding-top: 50px;
                    padding-left: 5%;
                    padding-right: 5%;
                }
            `
        );
    }}
`;

function PageDefault({ children }) {
    return (
        <>
            <Menu />

            <Main>{children}</Main>

            <Footer />
        </>
    );
}

export default PageDefault;
