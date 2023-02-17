
import 'animate.css';
import Link from "next/link";
import Tilt from 'react-parallax-tilt';

export const Banner = () => {
    return (
        <div className="axil-slider-area axil-slide-activation">
            <div
                className="axil-slide slide-style-default slider-fixed-height d-flex align-items-center paralax-area">
                <div className="container">
                    <div className="row align-items-center pt_md--60 mt_sm--60">
                        <div className="col-lg-7 col-12 order-2 order-lg-1">
                            <div className="content pt_md--30 pt_sm--30">
                                <h1
                                    className="axil-display-1"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    Professional Software Development Services
                                </h1>
                                <p
                                    className="subtitle-3"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    Vasilkoff Ltd provides comprehensive development services for websites
                                    and mobile applications, as well as cutting-edge blockchain technology
                                    solutions such as DApps and smart contracts
                                </p>
                                <Link href="/portfolio" className="axil-button btn-large btn-transparent"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="400">
                                    <span className="button-text">View Showcase</span>
                                    <span className="button-icon" />

                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-12 order-1 order-lg-2">
                            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                                <div className="text-start text-lg-end">
                                    <div className=" paralax-image">
                                        <div className="animate__animated animate__zoomIn">
                                            <img alt="Vasilkoff Ltd team work" src="images/3255469-768x768.jpg" width={490} height={490} />
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // return (
    //     <section >
    //         <Container className="px-5">

    //             <Row className="aligh-items-center gx-5" >
    //                 <Col xs={12} md={6} xl={7}>
    //                     <div className="animate__animated animate__fadeIn">
    //                         <h1>Professional Software<br /> Development Services</h1>
    //                         <p>Vasilkoff Ltd provides comprehensive development services for websites 
    //                             and mobile applications, as well as cutting-edge blockchain technology 
    //                             solutions such as DApps and smart contracts</p>
    //                         <div class="hero_btn"><a href="#services">Learn More</a></div>
    //                     </div>
    //                 </Col>
    //                 <Col xs={12} md={6} xl={5}>

    //                     <div className="animate__animated animate__zoomIn">
    //                         <img class="hero_img" src="images/3255469-768x768.jpg" width={490} height={490} />
    //                     </div>
    //                 </Col>
    //             </Row>
    //         </Container>



    //         <Container>
    //             <Row className="aligh-items-center">
    //                 <Col xs={12} md={6} xl={7}>
    //                     <div className="animate__animated animate__fadeIn">
    //                         <h1>Professional Software<br /> Development Services</h1>
    //                         <div class="hero_para">Vasilkoff Ltd provides comprehensive development services for websites and mobile applications, as well as cutting-edge blockchain technology solutions such as DApps and smart contracts</div>
    //                         <div class="hero_btn"><a href="#services">Learn More</a></div>
    //                     </div>
    //                 </Col>
    //                 <Col xs={12} md={6} xl={5}>
    //                     <TrackVisibility>
    //                         {({ isVisible }) =>
    //                             <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
    //                                 <img class="hero_img" src="images/3255469-768x768.jpg" width={490} height={490} />
    //                             </div>}
    //                     </TrackVisibility>
    //                 </Col>
    //             </Row>
    //         </Container>
    //         <div class="hero_section">
    //             <div class="left_col  fade-up-header   ">
    //                 <div class="hero_heading">Professional Software<br /> Development Services</div>
    //                 <div class="hero_para">We are a technology company that understands complexity of businesses, and with our technical expertise, we help them transform and scale.</div>
    //                 <div class="hero_btn"><a href="#services">Learn More</a></div>
    //             </div>

    //             <div class="right_col" data-tilt data-tilt-reverse="true" data-tilt-max="3" data-tilt-speed="400" data-tilt-perspective="500" >
    //                 <img class="hero_img" src="images/3255469-768x768.jpg" />
    //             </div>
    //         </div>
    //     </section>
    // )
}
