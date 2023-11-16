import React from "react";
import MarioAdrian from "../images/MarioAdrian.jpg";
/*import "../AboutUS.css";*/ 

const AboutUs = () => {
    return (
        <section className="hero">
            <div className="heading">
                <h1>ABOUT US</h1>
            </div>
            <div className="test-container">
                <div className="hero-content">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.The restaurant features a locally sourced menu with daily specials.</p>
                </div>
                <div className="hero-image">
                    <img src={MarioAdrian} alt=""/>
                </div>
            </div>
        </section>

    )
}

export default AboutUs;



























/*const AboutUs = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="content-section">
                    <div className="title">
                        <h1>About Us</h1>
                    </div>
                    <div className="content">
                        <h3>Little Lemon</h3>
                        <h4>Chicago</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquam dictum lectus, sit amet elementum ligula consequat quis. Phasellus eget arcu elit. Vivamus vulputate sagittis quam et pharetra. Vivamus molestie lacus nec dolor laoreet sagittis. Nullam quis lectus non lorem lobortis imperdiet. In tortor massa, dignissim ut orci at, vestibulum auctor orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo iaculis, posuere tellus et, tempus eros. Praesent feugiat tempor tortor, quis convallis elit 
                        </p>
                        <div className="image-section">
                            <img src={MarioAdrian} alt=""/>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutUs;*/

