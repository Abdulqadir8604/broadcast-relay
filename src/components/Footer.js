// Footer.js
import React from "react";
import "../App.css";

function Footer({theme}) {
    return (
        <footer>
            <p className="footer_text_h3">Developed by AQ</p>
            {/* <p className="footer_text_h3">Hinduja College</p> */} {/* This paragraph is commented out, possibly to hide or temporarily disable displaying Hinduja College */}
            {/* <p className="footer_text_p">Developed with ❤️ by Umaima & Fatema</p> */} {/* This paragraph is commented out, likely to hide or disable the credit line for Umaima & Fatema */}
        </footer>
    );
}

export default Footer;
