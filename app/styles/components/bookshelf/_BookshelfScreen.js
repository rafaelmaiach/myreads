import styled from 'styled-components';

import backgroundImage from 'Assets/images/bookshelf_page.jpg';

export const Background = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BackgroundLayer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.6);
    width: 100%;
    height: 100%;
`;
