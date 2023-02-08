import styled from '@emotion/styled';

export const FooterSect = styled.footer`

`
export const LogoLink = styled.a`
    font-size: large;
    font-weight: 900;
    text-decoration: none;
    text-align: center;
    padding-top: 24px;
    margin-bottom: 24px;
    color: #212121;
`;

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
`
export const Link = styled.a`
    color: black;
    font-size: 20px;
`;
export const Item = styled.li`
    margin-bottom: 10px;
`;
export const ItemNetwork = styled.li`
    @media screen and (min-width: 768px) {
        padding: 8px;
    }
`;