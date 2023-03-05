import { useState, useEffect, useRef } from 'react';
import React from "react";
import Slider from "react-slick";
import { Section,WrapVideo,Video } from './SimpleSlider.styled';




export const SliderResponsive = ({ initialSlide = 0 }) => {

    const [hasSetPosition, setHasSetPosition] = useState(false);
    const slider = useRef();

    useEffect(() => {
        if (slider.current && !hasSetPosition) {
        slider.current.slickGoTo(initialSlide);
        setHasSetPosition(true);
        }
    }, [initialSlide, hasSetPosition, slider]);

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide:0,
        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <Section>
            <Slider ref={slider} {...settings}>
                <WrapVideo>
                    <Video
                            src="http://techslides.com/demos/sample-videos/small.webm"
                                        poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=240" 
                                        controls 
                                        loop
                                        preload="auto"
                    />
                </WrapVideo>
                <WrapVideo>
                    <Video
                            src="http://techslides.com/demos/sample-videos/small.webm"
                                        poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                        controls 
                                        loop
                                        preload="auto"
                    />
                </WrapVideo>
                <WrapVideo>
                    <Video
                            src="http://techslides.com/demos/sample-videos/small.webm"
                                        poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                        controls 
                                        loop
                                        preload="auto"
                    />
                </WrapVideo>
                <WrapVideo>
                        <Video
                            src="http://techslides.com/demos/sample-videos/small.webm"
                                        poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                        controls 
                                        loop
                                        preload="auto"
                    />
                </WrapVideo>
                <WrapVideo>
                    <Video
                            src="http://techslides.com/demos/sample-videos/small.webm"
                                        poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                        controls 
                                        loop
                                        preload="auto"
                    />
                </WrapVideo>
                <WrapVideo>
                    <Video
                            src="http://techslides.com/demos/sample-videos/small.webm"
                                        poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                        controls 
                                        loop
                                        preload="auto"
                    />
                </WrapVideo>
                <WrapVideo>
                    <Video
                            src="http://techslides.com/demos/sample-videos/small.webm"
                                        poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                        controls 
                                        loop
                                        preload="auto"
                    />
                </WrapVideo>
                <WrapVideo>
                    <Video
                            src="http://techslides.com/demos/sample-videos/small.webm"
                                        poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                        controls 
                                        loop
                                        preload="auto"
                    />
                </WrapVideo>
                <WrapVideo>
                    <Video
                            src="http://techslides.com/demos/sample-videos/small.webm"
                                        poster="https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?w=640" 
                                        controls 
                                        loop
                                        preload="auto"
                    />
                </WrapVideo>
            </Slider>
        </Section>
    );
}
