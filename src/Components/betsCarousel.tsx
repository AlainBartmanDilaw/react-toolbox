import "./betsCarousel.css";
import { Carousel } from 'antd';
import React from 'react';
import images from 'src/images';

const BetsCarousel: React.FC = () => {
    return(
        <div className="carousel-container">
            <Carousel autoplay autoplaySpeed={5000}>
                {
                    images.map(
                        (image: string, index: number) => (
                            <div key={index}>
                                <img src={image} alt={`${index + 1}`}/>
                            </div>
                        )
                    )
                }
            </Carousel>
        </div>
    );
}

export default BetsCarousel;
