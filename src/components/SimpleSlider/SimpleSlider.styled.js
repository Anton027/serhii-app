import styled from "styled-components";

export const Section = styled.section`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 20px;
    @media screen and (min-width: 320px) and (max-width:767px){
        display:none;
    }

    /* display: flex;
    justify-content: center;
    align-items: center; */
`
export const WrapVideo = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding:5px;
`
export const Video = styled.video`
    width: 160px;

    cursor: pointer;
    @media (min-width: 768px){
        width: 180px;
    }
        @media (min-width: 1240px){
        width: 290px;
    } 

`