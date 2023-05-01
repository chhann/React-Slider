import React, {Component} from "react";
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope as fasEnvelope, faAdd, faChevronRight, faChevronLeft, faGraduationCap, faHippo, faHorse, faFrog, faFishFins} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope as farEnvelope} from '@fortawesome/free-regular-svg-icons'

export default function SimpleSlider () {


        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow : <SampleNextArrow/>,
            prevArrow : <SamplePrevArrow />
        };

        const pictures = ['pic1.jpg', 'pic2.jpg','pic3.jpg']

        return (
            <div>
                <h2>
                    2023-05-01</h2>
                <Slider {...settings} className="mx-5">
                    <div >
                        <img src={ require('../img/pic1.jpg')} 
                        alt="" 
                        width={300}
                        />
                    </div>
                    <div>
                        <img src={ require('../img/pic2.jpg')} 
                        alt="" 
                        width={300}
                        />
                    </div>
                    <div>
                        <img src={ require('../img/pic3.jpg')} 
                        alt="" 
                        width={300}
                        />
                    </div>



                    {
                        pictures.map((pic) => (
                            <div>
                                <img src={ require(`../img/${pic}`)} 
                                width={300}
                                />
                            </div>
                        ))
                    }
                </Slider>
                <div className="iicon">
                    <FontAwesomeIcon icon={fasEnvelope}/>
                    <FontAwesomeIcon icon={farEnvelope}/>
                    <FontAwesomeIcon icon={faAdd}/>
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <FontAwesomeIcon icon={faHippo} />
                    <FontAwesomeIcon icon={faHorse} />
                    <FontAwesomeIcon icon={faFrog} />
                    <FontAwesomeIcon icon={faFishFins} />
                        
                </div>

            </div>
        );

}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon
        icon={faChevronRight}
        className={className}
        style={{ ...style, display: "block", color: "gray", width:"40px", height:"40px"}}
        onClick={onClick}
        />
    );
}

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
    return (
        <FontAwesomeIcon
        icon={faChevronLeft}
        className={className}
        style={{ ...style, display: "block", color: "gray", width:"40px", height:"40px" }}
        onClick={onClick}
        />
        );
    }