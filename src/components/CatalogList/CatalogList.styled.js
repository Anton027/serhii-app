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
    border-radius: 10px;

    color: #fff;
    &:hover,&:focus{
        transform: scale(1.07);
        border-bottom: 1px solid #fff;
        box-shadow: 0px 1px 30px 8px rgba(255,255,255,1);
    }
`;
export const Title = styled.h2`
    text-align: center;
    margin-bottom:15px;
    color: #fff;
`
export const ButtonList = styled.button`
    display: block;
        margin-left: auto;
    margin-right: auto;
    color: whitesmoke;
    border-color: #fff;
    background-color:black;
    min-width: 80px;
    border-radius: 12px;
    padding:5px 12px;
    cursor: pointer;
    &:hover,&:focus{
        transform: scale(1.07);
        box-shadow: 0px 1px 30px 8px rgba(255,255,255,1);
        border-color: #fff;
        color: #fff ;
    }
`;
export const InfoVideo = styled.p`
    padding: 7px;
    color: #fff;
`;