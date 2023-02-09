import styled from '@emotion/styled';

export const CatalogSect = styled.section`

    margin-bottom: 30px;
`
export const Video = styled.video`
    width: 290px;

    cursor: pointer;
    @media (min-width: 768px){
        width: 320px;
    }
        @media (min-width: 1240px){
        width: 390px;
    } 

`
export const List = styled.ul`
        display: grid;
        padding: 10px;
    @media (min-width: 768px){
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
export const Item = styled.li`
    margin-bottom: 20px;
    border-bottom: 1px solid gray;

    &:hover,&:focus{
        transform: scale(1.05);
        border-bottom: 1px solid red;
    }
`;
export const Title = styled.h2`
    text-align: center;
    margin-bottom:15px;
`
export const ButtonList = styled.button`
    display: block;
        margin-left: auto;
    margin-right: auto;
    color: whitesmoke;
    background-color:black;
    min-width: 80px;
    border-radius: 12px;
    padding:5px 12px;
    cursor: pointer;
    &:hover,&:focus{
        transform: scale(1.25);
        background-color: red;
    }
`;
export const InfoVideo = styled.p`
    background-color: #fff;
`;