import React from "react";
import bannerImg from '../images/restauranfood.jpg';

const Header = () => {
    return (
        <header className='header'>
            {/* Hero Banner */}
            <section>
                {/*Hero Banner Text */}
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3> Houston</h3>
                    <p>Indulge in the flavors of the Mediterranean at Little Lemon, where our chefs Mario and Adrian bring the sun-soaked tastes and traditions to your table. Explore a culinary journey that celebrates the richness of the Mediterranean, where every dish is a delicious fusion of passion and authenticity.</p>

                    <a href="/booking">
                    <button aria-label='On Click'>Reserve a Table</button>
                    </a>
                </div>

                {/* Hero Banner Image */}
                <div className="banner-img">
                    <img src={bannerImg} alt="Restaurant Food" />
                </div>
            </section>
        </header>
    );
};

export default Header;