import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Telegram, EnvelopeHeart, Github, Code, Bug, HouseHeart, Dash, Hospital } from 'react-bootstrap-icons';
import { Container } from "react-bootstrap";



const Footer = () => {



    return (
        <footer>

            <Container>
                <Row>
                    <Col>

                        <div>UK</div>
                        <div>
                            Vasilkoff Ltd Reg. 07976437 <br />
                            207 Regent Street, London W1B 3HH
                        </div>
                        <div>
                            <ul class="firstadd_social">
                                <li><a href="https://web.facebook.com/vasilkoff.software" target="_blank"><i class="fa-solid fa-square-phone"></i>+18882614460</a></li>
                                <li><a href="https://web.facebook.com/vasilkoff.software" target="_blank"><i class="fa-solid fa-square-phone"></i>+4442045772478</a></li>
                                <li><a href="mailto:maxim@vasilkoff.com" target="_blank"><i class="fa-solid fa-at"></i>maxim@vasilkoff.com</a></li>
                                <li><a href="https://t.me/Vasilkoff" target="_blank"><i class="fa-solid fa-paper-plane"></i>Vasilkoff</a></li>
                            </ul>
                        </div>
                    </Col>



                    <Col>
                        <div>Cyprus</div>
                        <div>
                            Vasilkoff (CY) Ltd Reg. HE 344792<br />
                            ATHINODOROU BUSINESS CENTER Office 402<br />
                            Charalambou Mouskou &amp; Grigori Afxentiou Office 20<br />
                            Paphos 8010
                        </div>
                        <div>
                            <ul>
                                <li><a href="#" target="_blank"><i class="fa-regular fa-address-card"></i>VAT #CY10344792Y TIC 12344792A</a></li>
                                <li><a href="https://wa.link/drf9vm" target="_blank"><i class="fa-brands fa-square-whatsapp"></i>+35796253566</a></li>
                                <li><a href="tel:+35799169229" target="_blank"><i class="fa-solid fa-square-phone"></i><span>+35799169229</span></a></li>
                                <li><a href="mailto:sp@vasilkoff.com" target="_blank"><i class="fa-solid fa-at"></i><span>sp@vasilkoff.com</span></a></li>
                                <li><a href="https://g.page/Vasilkoff-com?share" target="_blank"><i class="fa-solid fa-location-dot"></i><span>Glastonos 12-14, 2nd Floor, Paphos&nbsp;8046</span></a></li>
                            </ul>
                        </div>
                    </Col>

                    <Col>
                        <ul>
                            <li class="active"><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="#map">Contact Us</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
};

export default Footer;
