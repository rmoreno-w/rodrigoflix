import styled from 'styled-components';

export const Button = styled.button`
    color: var(--white);
    /* border: 1px solid var(--white); */
    border: 0;
    background: var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity 0.3s;
    &:hover,
    &:focus {
        opacity: 0.85;
    }
`;

export const ClearButton = styled.button`
    color: var(--white);
    border: 2px solid var(--blackLighter);
    background: transparent;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity 0.3s;
    &:hover,
    &:focus {
        opacity: 0.6;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1.5em;
`;
