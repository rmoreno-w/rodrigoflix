import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const FooterBase = styled.footer`
    background: var(--black);
    border-top: 2px solid var(--primary);
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 32px;
    padding-bottom: 32px;
    color: var(--white);
    text-align: center;

    @media (max-width: 800px) {
        padding: 12px;
        padding-bottom: 51px;
    }
`;
