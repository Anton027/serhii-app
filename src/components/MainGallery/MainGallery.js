import { Container } from "components/Container";
import { List, Item,Video,LinkMore,WrapLink } from "./MainGallery.styled"; 

export const MainGallery = () => {
    return (
        <>
            <Container>
                <List>
                    <Item>
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
                    </Item>
                    <Item>
                        <Video 
                            src="http://techslides.com/demos/sample-videos/small.webm"
                            poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                            controls 
                            loop
                            preload="auto">
                        </Video>
                    </Item>
                </List>
                <WrapLink>
                    <LinkMore to={"/gallery"}>
                        More
                    </LinkMore>
                </WrapLink>
            </Container>
        </>
    )
}