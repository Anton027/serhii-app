import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


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
export const Item = styled.div`
    margin-bottom: 20px;
    border-bottom: 1px solid gray;
    border-radius: 10px;
    color: #fff;
    &:hover,&:focus{
        transform: scale(1.07);
        border-bottom: 1px solid #fff;
        box-shadow: 0px 1px 30px 8px rgba(255,255,255,1);
    }

    &:nth-child(1){
        animation: animateX50 3000ms infinite 1000ms;
    }
    @keyframes animateX50 {
        0% {
            transform: translateX(0);
        }

        50% {
            transform: translateX(50px);
        }

        100% {
            transform: translateX(0);
        }
    }

    &:nth-child(2) {
        animation: animateY110 3000ms infinite 1000ms;
    }
    @keyframes animateY110 {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(110px);
        }

        100% {
            transform: translateY(0);
        }
    }

    &:nth-child(3) {
    animation: animateX50Y100 3000ms infinite 1000ms;
    }
    @keyframes animateX50Y100 {
        0% {
            transform: translate(0, 0);
        }

        50% {
            transform: translate(-50px, -100px);
        }

        100% {
            transform: translate(0, 0);
        }
    }
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
`
export const WrapLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`