import {
    CatalogSect,
    Video,
    InfoVideo,
    List,
    Item,
    Title,
    InfoVideoModal,
    WindowModal
} from "./CatalogList.styled"
import { Container } from "components/Container";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export const CatalogList = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                            <Item >
                                <iframe
                                width="390"
                                // height="315"
                                src="https://www.youtube.com/embed/FJNZTOmp4EM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                                
                                </iframe>
                                <InfoVideo onClick={handleOpen}>
                                    Since Material UI components are built to function in
                                    isolation, they don't require any
                                    kind of globally scoped styles.
                                    For a better user experience and developer experience, we recommend
                                    adding the following globals to your app.
                                </InfoVideo>
                            </Item>
                            <Item onClick={handleOpen}>
                                <Video 
                                    src="http://techslides.com/demos/sample-videos/small.webm"
                                    poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                    controls 
                                >
                                </Video>
                                <InfoVideo>
                                    Since Material UI components are built to function in
                                    isolation, they don't require any
                                    kind of globally scoped styles.
                                    For a better user experience and developer experience, we recommend
                                    adding the following globals to your app.
                                </InfoVideo>
                            </Item>
                            <Item onClick={handleOpen}>
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
                            <Item onClick={handleOpen}>
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
                            <Item onClick={handleOpen}>
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
                            <Item onClick={handleOpen}>
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
                    {/* <WrapLink>
                        <LinkMore to={"/gallery"}>
                            More
                        </LinkMore>
                    </WrapLink> */}
                </Container>
            </CatalogSect>

            <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <WindowModal>
                        <Video 
                                    src="http://techslides.com/demos/sample-videos/small.webm"
                                    poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                    controls 
                                    loop
                                    preload="auto">
                                </Video>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <InfoVideoModal>
                                        Since Material UI components are built to function in
                                        isolation, they don't require any
                                        kind of globally scoped styles.
                                        For a better user experience and developer experience, we recommend
                                        adding the following globals to your app.
                            </InfoVideoModal>
                        </Typography>
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                    </WindowModal>
                </Modal>
            </div>
        </>
    )
}