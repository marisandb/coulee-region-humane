import React from 'react';
import "./style.css"

function Footer() {
    return (
        <footer className="flex">
            <div className="footer-left">
            <p>
                <strong>Location &amp; Hours</strong><br />
                Coulee Region Humane Society | 911 Critter Court | Onalaska WI 54650<br />
                Phone: <a href="tel:+16087814014">608-781-4014</a> | Fax: 608-781-1646 <br />
                Weekdays 9 a.m. - 5 p.m.  Saturday &amp; Sunday 1 p.m. - 5 p.m.
            </p>
            </div>
            <div className="footer-right">
            <p>
                <strong> Do you have a wildlife emergency? <br /></strong>
                You can call <a href="tel:+16087814014">608-781-4014</a> to reach Animal Control. <br />
                Humane officers are available 24/7/365.<br />
                Please note humane officers cannot travel out of county. <br />
                After 7pm they may also not travel out of city limits depending on the situation.
            </p>
            </div>
        </footer>
    )
}

export default Footer;