import React from 'react'
import "../styles/slider/carousel.min.scss";
import "../styles/slider/carousel.scss";
import { Carousel } from 'react-responsive-carousel'

const   Slider=()=>(
    <div className='carousel-container'>
        <Carousel showArrows infiniteLoop centerMode
            showThumbs={false} useKeyboardArrows
            stopOnHover autoPlay interval={5000}
            transitionTime={1000} centerSlidePercentage={80}>
            <div>
                <img src="/imgs/slider/1.jpg"/>
                <p className="legend">coffee</p>
            </div>
            <div>
                <img src="/imgs/slider/2.jpg"/>
                <p className="legend">cake</p>
            </div>
            <div>
                <img src="/imgs/slider/3.jpg"/>
                <p className="legend">food</p>
            </div>
        </Carousel>
    </div>
)

export default Slider