import React from "react";
import owner1 from '../images/Mario and Adrian b.jpg';

const About = () => {
    return (
        <about className='about'>
            {/* About Banner */}
            <section>
                {/*About Banner Text */}
                <div className="about-text">
                    <h2>Little Lemon</h2>
                    <h3> Houston</h3>
                    <h4>Welcome to Little Lemon – A Culinary Haven Crafted with Love!</h4>
                    <p>At Little Lemon, we believe in the magic of food to bring people together, and we've made it our mission to create a warm and inviting space where culinary delights and cherished memories intertwine.</p>
                    <h4>Our Culinary Philosophy:</h4>
                    <p>At the heart of Little Lemon's kitchen is a dedication to flavor innovation and a celebration of seasonal ingredients. Mario and Adrian's culinary philosophy revolves around creating dishes that not only satisfy the palate but also tell a story. Every plate is a canvas, showcasing their commitment to culinary artistry and the joy of savoring each moment.</p>
                    <em>Indulge, savor, and make memories at Little Lemon – where every bite tells a story!</em>
                </div>

                {/* About Banner Image */}
                <div className="about-img">
                    <img src={owner1} alt="Owners" />
                </div>
            </section>
        </about>
    );
};

export default About;