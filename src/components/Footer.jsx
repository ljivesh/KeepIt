import React from 'react';


function Footer() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p>Made by Menma.</p>
            <p>Copyright {year}</p>
        </footer>
    );
}

export default Footer;