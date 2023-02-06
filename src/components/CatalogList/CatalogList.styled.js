import styled from '@emotion/styled';

export const CatalogSect = styled.section`

    margin-bottom: 30px;
`
export const Video = styled.video`
    width: 290px;
    /* @media (min-width: 768px){
        width: 768px;
    }
        @media (min-width: 768px){
        width: 768px;
    } */
`
export const List = styled.ul`
        display: grid;
        padding: 10px;
    @media (min-width: 769px){
        padding: 20px;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 15px;
        padding: 15px;
    }
        @media (min-width: 1240px){
        padding: 40px;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        padding: 20px;
    }
`
export const Title = styled.h2`
    text-align: center;
    margin-bottom:15px;
`
export const ButtonList = styled.button`
    display: block;
        margin-left: auto;
    margin-right: auto;
`;