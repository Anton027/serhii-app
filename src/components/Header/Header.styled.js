import styled from '@emotion/styled';
import { NavLink } from "react-router-dom";

export const Head = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding-top: 10px;
    padding-bottom:10px;
    margin-bottom: 20px;

    position: relative;

    /* background: rgb(2,0,36); */
    /* background: linear-gradient(304deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 100%); */

    border-radius:10px;
    /* border-bottom: 1px solid #fff; */
    box-shadow: 0px 1px 30px 4px rgba(	100, 9, 128,1);

    @media (min-width: 768px){
        padding-top: 20px;
        padding-bottom:20px;
    }
    @media (min-width: 1240px){
        padding-top: 40px;
        padding-bottom:40px;
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;

`;


export const InfoList = styled.ul`
    @media screen and (max-width: 767px) {
        display: none;
    }
`;
export const Icon = styled.span`
    margin-right: 5px;

`;

export const Link = styled(NavLink)`
    color: #fff;
    &:hover,&:focus{
        color: #640980;
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
    &:hover,&:focus{
        color: #640980;
    }
    &.active {
        color: #fff;
        background-color: #640980;
    }
    @media screen and (max-width: 767px) {
        display: none;
    }
`;

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