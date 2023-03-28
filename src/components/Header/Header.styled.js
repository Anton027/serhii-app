import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Head = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    margin-bottom: 20px;
    position: relative;

    /* background: rgb(2,0,36); */
    /* background: linear-gradient(304deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 100%); */

    border-radius:10px;
    border-bottom: 1px solid #fff;
    box-shadow: 0px 1px 30px 8px rgba(255,255,255,1);
    @media (min-width: 768px){
        padding: 20px;
    }
    @media (min-width: 1240px){
        padding: 40px;
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;

`;

export const LogoLink = styled.a`
    font-size: large;
    font-weight: 900;
    text-decoration: none;
    padding-top: 24px;
    padding-bottom: 24px;
    
    color:#fff
    ;
    &:hover,&:focus{
        transform: scale(1.07);
        color: orangered;
    }

`;
export const InfoList = styled.ul`
    @media screen and (max-width: 767px) {
        display: none;
    }
`;
export const Icon = styled.span`
    margin-right: 5px;
`;

export const Link = styled.a`
    color: #fff;
    &:hover,&:focus{
        transform: scale(1.05);
        color: orangered;
    }
`;
export const InfoListItem = styled.li`

    margin-bottom: 10px;
        @media screen and (min-width: 320px) {
        margin-right: 20px;
    }
        @media screen and (min-width: 768px) {
        margin-right: 40px;
    }
    @media screen and (min-width: 1280px) {
        margin-bottom: 20px;
    }

`;

export const Pages = styled.ul`
    display: flex;
`;
export const PagesLink = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: white;
    font-weight: 500;

    &.active {
        color: #fff;
        background-color: #640980;
    }
    @media screen and (max-width: 767px) {
        display: none;
    }
`;
