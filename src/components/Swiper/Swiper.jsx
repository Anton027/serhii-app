import {   A11y, Autoplay } from 'swiper';
import 'swiper/css/bundle';
import { SwiperList,SwiperSlideItem } from './Swiper.styled';
import { Video } from 'components/CatalogList/CatalogList.styled';



export const SwiperCenter = () => {

    return (
        <SwiperList
            // install Swiper modules
            modules={[Autoplay, A11y]}
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{ delay: 3000 }}
            centeredSlides={true}
            // onSwiper={(swiper) => console.log(swiper)}
            onClick={
                () => {
                console.log('click')
            }}
            onSlideChange={
                () => {
                    console.log('slide change');
                }
            }
        >
            <SwiperSlideItem>
                <Video
                    src="https://www.youtube.com/embed/FJNZTOmp4EM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </SwiperSlideItem>
            <SwiperSlideItem>
                <Video
                    src="https://www.youtube.com/embed/FJNZTOmp4EM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </SwiperSlideItem>
            <SwiperSlideItem>
                <Video
                    src="https://www.youtube.com/embed/FJNZTOmp4EM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </SwiperSlideItem>
            <SwiperSlideItem>
                <Video
                    src="https://www.youtube.com/embed/FJNZTOmp4EM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </SwiperSlideItem>
            <SwiperSlideItem>
                <Video
                    src="https://www.youtube.com/embed/FJNZTOmp4EM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </SwiperSlideItem>
            <SwiperSlideItem>
                <Video
                    src="https://www.youtube.com/embed/FJNZTOmp4EM"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                />
            </SwiperSlideItem>
        </SwiperList>
    )
}