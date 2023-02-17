import { CatalogSect,Video,InfoVideo,List,Item,Title,ButtonList } from "./CatalogList.styled"
import { Container } from "components/Container";
// import { SimpleSlider } from "components/SimpleSlider";
import React from "react";
// import Slider from "react-slick";

export const CatalogList = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // }
    return (
        <>
        <CatalogSect>
                <Container>
                    <Title 
                        lang="en"
                    >
                        Portfilio or My Projects
                    </Title>
                    <List >
                        {/* <Slider {...settings}> */}
                            <Item>
                                <Video 
                                    src="http://techslides.com/demos/sample-videos/small.webm"
                                    poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                    controls 
                                    loop
                                    preload="auto">
                                </Video>
                                <InfoVideo>
                                    Since Material UI components are built to function in
                                    isolation, they don't require any
                                    kind of globally scoped styles.
                                    For a better user experience and developer experience, we recommend
                                    adding the following globals to your app.
                                </InfoVideo>
                            </Item>
                            <Item>
                                <Video 
                                    src="http://techslides.com/demos/sample-videos/small.webm"
                                    poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                    controls 
                                    loop
                                    preload="auto">
                                </Video>
                                <InfoVideo>
                                    Since Material UI components are built to function in
                                    isolation, they don't require any
                                    kind of globally scoped styles.
                                    For a better user experience and developer experience, we recommend
                                    adding the following globals to your app.
                                </InfoVideo>
                            </Item>
                            <Item>
                                <Video 
                                    src="http://techslides.com/demos/sample-videos/small.webm"
                                    poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                    controls 
                                    loop
                                    preload="auto">
                                </Video>
                                <InfoVideo>
                                    Since Material UI components are built to function in
                                    isolation, they don't require any
                                    kind of globally scoped styles.
                                    For a better user experience and developer experience, we recommend
                                    adding the following globals to your app.
                                </InfoVideo>
                            </Item>
                            <Item>
                                <Video 
                                    src="http://techslides.com/demos/sample-videos/small.webm"
                                    poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                    controls 
                                    loop
                                    preload="auto">
                                </Video>
                                <InfoVideo>
                                    Since Material UI components are built to function in
                                    isolation, they don't require any
                                    kind of globally scoped styles.
                                    For a better user experience and developer experience, we recommend
                                    adding the following globals to your app.
                                </InfoVideo>
                            </Item>
                            <Item>
                                <Video 
                                    src="http://techslides.com/demos/sample-videos/small.webm"
                                    poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                    controls 
                                    loop
                                    preload="auto">
                                </Video>
                                <InfoVideo>
                                    Since Material UI components are built to function in
                                    isolation, they don't require any
                                    kind of globally scoped styles.
                                    For a better user experience and developer experience, we recommend
                                    adding the following globals to your app.
                                </InfoVideo>
                            </Item>
                            <Item>
                                <Video 
                                    src="http://techslides.com/demos/sample-videos/small.webm"
                                    poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                    controls 
                                    loop
                                    preload="auto">
                                </Video>
                                <InfoVideo>
                                    Since Material UI components are built to function in
                                    isolation, they don't require any
                                    kind of globally scoped styles.
                                    For a better user experience and developer experience, we recommend
                                    adding the following globals to your app.
                                </InfoVideo>
                            </Item>
                        {/* </Slider> */}
                    </List>
                    <ButtonList data-modal-open type="button">
                        More
                    </ButtonList>
                </Container>
            </CatalogSect>
        </>
    )
}