import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer">
    
            <div className="casey name"><a id="linkedin" href="https://www.linkedin.com/in/rachael-whitefield-952198180/" target="_blank"><i class="fab fa-linkedin-in"></i></a>Casey Eickhoff<a id="githib" href="https://github.com/RachaelWhitefield/lets-get-metaphysical" target="blank"><i className="fab fa-github gh-icon"></i></a></div>

            <div className="rachael name"><a id="linkedin" href="https://www.linkedin.com/in/rachael-whitefield-952198180/" target="_blank"><i class="fab fa-linkedin-in"></i></a>Rachael Whitefield<a id="githib" href="https://github.com/RachaelWhitefield/lets-get-metaphysical" target="blank"><i className="fab fa-github gh-icon"></i></a></div>
            {/* <p>STONED</p> */}
            <div className="wynn"><a id="linkedin" href="https://www.linkedin.com/in/rachael-whitefield-952198180/" target="_blank"><i class="fab fa-linkedin-in"></i></a>Wynn Cheney<a id="githib" href="https://github.com/RachaelWhitefield/lets-get-metaphysical" target="blank"><i className="fab fa-github gh-icon"></i></a></div>

            <div className="liv"><a id="linkedin" href="https://www.linkedin.com/in/rachael-whitefield-952198180/" target="_blank"><i class="fab fa-linkedin-in"></i></a>Liv Heller<a id="githib" href="https://github.com/RachaelWhitefield/lets-get-metaphysical" target="blank"><i className="fab fa-github gh-icon"></i></a></div>
            {/* <p></p> */}
        </footer>
    )
}

export default Footer;