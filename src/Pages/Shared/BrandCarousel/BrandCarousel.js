import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../assets/Brands/bg4.png'
import image2 from '../../../assets/Brands/bg2.jpg'
import image3 from '../../../assets/Brands/bg10.jpg'

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;