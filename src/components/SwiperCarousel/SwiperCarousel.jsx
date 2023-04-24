import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import image_slide_1 from "../../images/swiper/IMG_2654.JPG"
import image_slide_2 from "../../images/swiper/IMG_2669.JPG"
import image_slide_3 from "../../images/swiper/IMG_2676.JPG"
import image_slide_4 from "../../images/swiper/IMG_2681.JPG"
import image_slide_5 from "../../images/swiper/IMG_2684.JPG" 





export const SwiperCarousel = () => {
    return (
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                autoplay={{ delay: 2500 }}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 1000,
                        modifier: 2.5
                    }
                }
                pagination={
                    { el: '.swiper_pagination', clickable: true }
                }
                modules={[EffectCoverflow,Pagination,Navigation,Autoplay]}
                className='container_swiper'
            >
                <SwiperSlide>
                    <img src={image_slide_1} alt="image_slide_1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image_slide_2} alt="image_slide_2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image_slide_3} alt="image_slide_3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image_slide_4} alt="image_slide_4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image_slide_5} alt="image_slide_5" />
                </SwiperSlide>
                <div className="slider_controler">
                    <div className="swiper_pagination">

                    </div>
                </div>
            </Swiper>
        </div> 
    )
}