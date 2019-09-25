import React from "react";
import "./Footer.scss";

function Footer() {
    return (
        <footer className="footer" >
    
            <div className="name">Casey Eickhoff<br /><a id="githib" href="https://github.com/caseyisonit" target="blank"><i className="fab fa-github gh-icon"></i></a><a id="linkedin" href="https://www.linkedin.com/in/caseyeickhoff/" target="_blank"><i className="fab fa-linkedin-in"></i></a></div>

            <div className="name">Rachael Whitefield<br /><a id="githib" href="https://github.com/RachaelWhitefield/lets-get-metaphysical" target="blank"><i className="fab fa-github gh-icon"></i></a><a id="linkedin" href="https://www.linkedin.com/in/rachael-whitefield-952198180/" target="_blank"><i className="fab fa-linkedin-in"></i></a></div>
            
            <div className="name">Wynn Chaney<br /><a id="githib" href="https://github.com/wynnc" target="blank"><i className="fab fa-github gh-icon"></i></a><a id="linkedin" href="https://www.linkedin.com/in/wynn-chaney-74a85a183/" target="_blank"><i className="fab fa-linkedin-in"></i></a></div>

            <div className="name">Liv Heller<br /><a id="githib" href="https://github.com/TheGuardingDark" target="blank"><i className="fab fa-github gh-icon"></i></a><a id="linkedin" href="https://www.linkedin.com/in/liv-heller/" target="_blank"><i className="fab fa-linkedin-in"></i></a></div>
            
        </footer>
    )
}

export default Footer;