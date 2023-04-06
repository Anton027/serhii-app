import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const FooterSect = styled.footer`

`
export const LogoLink = styled(NavLink)`
    font-size: large;
    font-weight: 900;
    text-decoration: none;
    padding: 5px;
    background-color: rgba(250,250,250, 0) ;
    border-radius: 5px;
    ;
    &:hover,&:focus{
        transform: scale(1.07);
    }
`;
export const Logo = styled.img`
    max-width: 48px;
    max-height: 48px;
`

export const Wrapper = styled.div`

    padding-top: 60px;
    padding-bottom: 60px;
    padding-left: 10px;

    @media (min-width:768px) {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
    @media (max-width: 767px) {
        margin-bottom: 60px;
    }
    @media (min-width:768px) 
    {
        padding-left: 20px;
        margin-bottom: 60px;
    }
        @media (min-width: 1240px){
        padding-left: 40px;
    }
`
export const List = styled.ul`
    display: flex;
    align-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
`

export const WrapAddres = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;
export const NetworksList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    @media screen and (min-width: 768px) {
        display: flex;
        justify-content:space-around;
    }
`
export const NetworkTitle = styled.p`
    text-align: center;
    font-size: large;
    font-weight: 900;
    color: #fff;
`
export const Link = styled(NavLink)`
    color: #fff;
    padding: 3px;
    
    font-size: 20px;
    font-weight: 900;
    
    &:hover,&:focus{

        color: #640980; 
            
    }
`;

export const Item = styled.li`
    margin-bottom: 20px;
`;

export const ItemNetwork = styled.li`

    @media screen and (min-width: 768px) {
        margin: 8px;
    }
`;