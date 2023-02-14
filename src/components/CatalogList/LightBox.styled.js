import styled from "styled-components";

export const Wrap = styled.div`
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