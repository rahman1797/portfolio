import React from 'react'
import Slider from 'react-slick'
import './CarouselSlick.css'

function CarouselSlick(props) {

    const settings = {
        dots: true,
        lazyLoad: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "90px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        swipeToSlide: true,
        adaptiveHeight: true
    };

    const imageList = props.data[0].image;

    return (
        <div className="my-5">
            { (imageList.length > 3) ?
            <Slider {...settings}>
                {
                    imageList.map( obj => 
                        <div>
                            <img className="mx-auto overview-image" src={`/portfolio/assets/images/${obj}` } alt={obj} />
                        </div>
                    )
                }
            </Slider>
            : 
            <div className="row">
            {
                imageList.map( obj => 
                    <div className="col-md-4 col-6 mb-3 mx-auto">
                        <img className=" overview-image-3" src={`/portfolio/assets/images/${obj}` } alt={obj} />
                    </div>
                ) 
            }
            </div>
            }
        </div>
    )
}

export default CarouselSlick