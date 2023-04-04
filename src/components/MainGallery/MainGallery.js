import { Container } from "components/Container";
import { List, Item,Video,LinkMore,WrapLink } from "./MainGallery.styled"; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Scrollbar, A11y } from 'swiper';


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

                <Swiper
                    modules={[ Autoplay, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    autoplay = {true}
                    scrollbar={{ draggable: true }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                        <SwiperSlide>
                            <Video 
                            src="http://techslides.com/demos/sample-videos/small.webm"
                            poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                            controls 
                            loop
                            preload="auto">
                        </Video>
                    </SwiperSlide>
                    <SwiperSlide>
                            <Video 
                            src="http://techslides.com/demos/sample-videos/small.webm"
                            poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                            controls 
                            loop
                            preload="auto">
                        </Video>
                    </SwiperSlide>
                    <SwiperSlide>
                            <Video 
                            src="http://techslides.com/demos/sample-videos/small.webm"
                            poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                            controls 
                            loop
                            preload="auto">
                        </Video>
                    </SwiperSlide>
                    <SwiperSlide>
                            <Video 
                            src="http://techslides.com/demos/sample-videos/small.webm"
                            poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                            controls 
                            loop
                            preload="auto">
                        </Video>
                    </SwiperSlide>
                    <SwiperSlide>
                            <Video 
                            src="http://techslides.com/demos/sample-videos/small.webm"
                            poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                            controls 
                            loop
                            preload="auto">
                        </Video>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Video 
                            src="http://techslides.com/demos/sample-videos/small.webm"
                            poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                            controls 
                            loop
                            preload="auto">
                        </Video>
                    </SwiperSlide>
                        <SwiperSlide>
                            <Video 
                            src="http://techslides.com/demos/sample-videos/small.webm"
                            poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                            controls 
                            loop
                            preload="auto">
                        </Video>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </>
    )
}