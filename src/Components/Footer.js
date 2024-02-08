import React from "react";
import small_logo from "../images/small_logo.png";
import facebook from '../images/Facebook.png';
import instagram from '../images/instagram.png';

const Footer = () => {
    return(
        <footer className="">
            <section>
            <div className="company-info">
                <img src={small_logo} alt=""/>
               </div>
            <div>
                <h3>Important Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservations</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
            <ul>
            <li>123 Sycamore Street<br/>Houston, TX</li>
                <li>Phone: <br/> +1 281-330-8004</li>
                <li>Email: <br/> info@littlelemonbistro.com</li>
            </ul>
            </div>
            <div>
                <h3>Connect With Us!</h3>
            <ul>
                <li><a href="/"><img src={facebook} /></a></li>
                <li><a href="/"><img src={instagram} /></a></li>
            </ul>
            </div>
            </section>
            <section>
                <div>
                    <i>Created by M.Johnson for CourseEra Meta Front-End Web Development Capstone Project</i>
                </div>
            </section>
        </footer>
    )
}

export default Footer;