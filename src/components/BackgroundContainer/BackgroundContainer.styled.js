import styled from '@emotion/styled';
import image from '../../images/VectorWhite.png'

export const BackgroundWrap = styled.div`
    background-image: url(${image});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    background-attachment: fixed;
`

export const ListNight = styled.ul`
    
    position: relative;
    width: 100%;
    height: 100%;
    -webkit-transform: rotateZ(45deg);
        transform: rotateZ(45deg);
    -webkit-animation: sky 200000ms linear infinite;
        animation: sky 200000ms linear infinite;
`
export const StarItem = styled.li`
    
    position: absolute;
    left: 50%;
    top: 50%;
    height: 2px;
    background: linear-gradient(-45deg, #5f91ff, rgba(0, 0, 255, 0));
    border-radius: 999px;
    -webkit-filter: drop-shadow(0 0 6px #699bff);
        filter: drop-shadow(0 0 6px #699bff);
    -webkit-animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
        animation: tail 3000ms ease-in-out infinite, shooting 3000ms ease-in-out infinite;
    &::before, &::after{
        content: '';
    position: absolute;
    top: calc(50% - 1px);
    right: 0;
    height: 2px;
    background: linear-gradient(-45deg, rgba(0, 0, 255, 0), #5f91ff, rgba(0, 0, 255, 0));
    -webkit-transform: translateX(50%) rotateZ(45deg);
        transform: translateX(50%) rotateZ(45deg);
    border-radius: 100%;
    -webkit-animation: shining 3000ms ease-in-out infinite;
        animation: shining 3000ms ease-in-out infinite;
    }
`