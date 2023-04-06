import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CatalogSect = styled.section`
    margin-top:50px;
    margin-bottom: 30px;
`;

export const Video = styled.iframe`
    min-width: 290px;
    min-height: 290px;

    border-radius: 10px;

    cursor: pointer;
    @media (min-width: 768px){
        min-width: 320px;
    }
        @media (min-width: 1240px){
        min-width: 390px;
    } 

    &:hover,&:focus{
        transform: scale(1.02);
        box-shadow: 0px 1px 30px 3px rgba(167, 15, 214,1);
    }
`;

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
`;

export const Item = styled.div`
    /* &:hover,&:focus{
        transform: scale(1.02);
        box-shadow: 0px 1px 30px 3px rgba(167, 15, 214,1);
    } */
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom:15px;
    color: #fff;
`;

export const LinkMore = styled(NavLink)`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    margin-left: auto;
    margin-right: auto;

    color: whitesmoke;
    background-color:black;
    min-width: 80px;
    border: 1px solid #fff;
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

export const InfoVideoModal = styled.p`
    padding: 7px;
    color: #000;
    text-align: center;
`;

export const WrapLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const WindowModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(240, 240, 240, 0.8);
    border: 2px solid #640980;
    border-radius:  8px;
    padding:10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 1px 30px 8px rgba(255,255,255,1);
`;