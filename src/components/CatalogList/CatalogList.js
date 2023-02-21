import { CatalogSect,Video,InfoVideo,List,Item,Title,ButtonList } from "./CatalogList.styled"
import { Container } from "components/Container";

import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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
                        {/* <Slider {...settings}> */}
                            <Item onClick={handleOpen}>
                                <Video 
                                    src="http://techslides.com/demos/sample-videos/small.webm"
                                    poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                    controls 
                                    loop
                                    preload="auto">
                                </Video>
                                
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

            <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Video 
                                    src="http://techslides.com/demos/sample-videos/small.webm"
                                    poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                    controls 
                                    loop
                                    preload="auto">
                                </Video>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <InfoVideo>
                                    Since Material UI components are built to function in
                                    isolation, they don't require any
                                    kind of globally scoped styles.
                                    For a better user experience and developer experience, we recommend
                                    adding the following globals to your app.
                        </InfoVideo>
                    </Typography>
                    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                    </Box>
                </Modal>
            </div>
        </>
    )
}