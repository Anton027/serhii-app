import styled from '@emotion/styled';

export const Head = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 20px;
    position: relative;
    border-bottom: 1px solid green;

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
    color: #212121;
`;
export const InfoList = styled.ul`

`;
export const Icon = styled.span`
    margin-right: 5px;
`;