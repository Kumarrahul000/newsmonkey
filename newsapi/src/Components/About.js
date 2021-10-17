import React from 'react';
import { aboutData } from './Appi';
import { Carousel } from 'react-bootstrap';



function Slider() {
    return (
        < div className="container my-5">
            <div className="row">
                <h2 className="text-center">
                    About Us
                    </h2>
                <div className="col-md-5">
                    <Carousel fade>
                        {aboutData.map((itm) => {
                            return (
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={itm.img}
                                        alt="First slide"
                                        width="90%"
                                        height="400px"
                                    />

                                </Carousel.Item>
                            )
                        })}



                    </Carousel>

                </div>
                <div className="col-md-7">
                    <p>News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events. News is sometimes called "hard news" to differentiate it from soft media.</p>
               <p>Common topics for news reports include war, government, politics, education, health, the environment, economy, business, fashion, and entertainment, as well as athletic events, quirky or unusual events. Government proclamations, concerning royal ceremonies, laws, taxes, public health, and criminals, have been dubbed news since ancient times. Technological and social developments, often driven by government communication and espionage networks, have increased the speed with which news can spread, as well as influenced its content. The genre of news as we know it today is closely associated with the newspaper.</p>
                </div>

            </div>

           
        </div>
    )
}

export default Slider
