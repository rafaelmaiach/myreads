import styled from 'styled-components';

export const Background = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BackgroundLayer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
`;
