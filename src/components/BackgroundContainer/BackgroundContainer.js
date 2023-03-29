import { BackgroundWrap,ListNight,StarItem } from "./BackgroundContainer.styled"
export const BackgroundContainer = ({ children }) => {
    return (
        <BackgroundWrap>
            <ListNight>
                <StarItem></StarItem>
            </ListNight>
            {children}
        </BackgroundWrap>
    )
}