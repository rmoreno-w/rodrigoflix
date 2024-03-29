import styled from 'styled-components';

const SvgContainer = styled.div<{
    height?: number;
    width?: number;
}>`
    height: 'auto';
    width: 'auto';
    display: inline-flex;
    align-items: center;
    justify-content: center;

    & svg {
        height: ${(props) => (props.height ? `${props.height}px` : '100%')};
        width: ${(props) => (props.width ? `${props.width}px` : '100%')};
    }
`;

export default SvgContainer;
