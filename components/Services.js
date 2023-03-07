import {useEffect, useState} from 'react';
import SectionTitle from './SectionTitle';
import ServiceCardOne from './ServiceCardOne';
import ServiceData from '../data/Services';

export default function Services() {
    const [defaultServices, setDefaultServices] = useState([]);
    const [activeService, setActiveService] = useState(1);

    const getDefaultServices = () => {
        const filteredServices = ServiceData.filter(
            (service) => service.category === 'Default'
        );

        setDefaultServices(filteredServices)
    }

    const changeActive = (index) => {
        setActiveService(index);
    };

    useEffect(() => {
        getDefaultServices();
    }, []);

    return (
        <div style={{border: '1px solid red'}}
        className="axil-service-area ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title="Services we can help you with"
                            subtitle="what we can do for you"
                            description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet."
                            color="extra08-color"
                            alignment="center"
                        />
                    </div>
                </div>
                <div className="row">
                    {defaultServices?.map((service, index) => (
                        <ServiceCardOne
                            key={service.id}
                            column="col-lg-4 col-md-6 col-sm-6 col-12"
                            index={index}
                            activeIndex={activeService}
                            data={service}
                            changeActive={changeActive}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
    /*
            <section id="services" class="help">
          <div class="heading reveal">
            What we can help you with
          </div>
          <div class="cards_help" data-tilt data-tilt-reset="false" data-tilt-max="2" data-tilt-speed="200" data-tilt-perspective="900" data-tilt-reverse="true">
            <div class="hcard hcard1" data-tilt data-tilt-startX="85" data-tilt-startY="2" data-tilt-reset="false" data-tilt-max="2" data-tilt-speed="200" data-tilt-perspective="900" data-tilt-reverse="true">
              <div class="himg"><img src="images/b1p1.jpg" /></div>
              <div class="sub-head">Web Application Development</div>
              <div class="sub-para">Our web applications are marked by a robust, scalable architecture that supports high performance requirements and ease of management without compromising.</div>
            </div>

            <div class="hcard hcard2" data-tilt data-tilt-startX="2" data-tilt-startY="85" data-tilt-reset="false" data-tilt-max="2" data-tilt-speed="200" data-tilt-perspective="900" data-tilt-reverse="true">

              <div class="himg"><img src="images/b1p2.jpg" /></div>
              <div class="sub-head">Mobile Application Development</div>
              <div class="sub-para">We develop powerful applications that provide a thrilling experience for your users and bring tangible value to your business. Whether native, cross platform or web.</div>
            </div>

            <div class="hcard hcard3" data-tilt data-tilt-startX="85" data-tilt-startY="2" data-tilt-reset="false" data-tilt-max="2" data-tilt-speed="200" data-tilt-perspective="900" data-tilt-reverse="true">
              <div class="himg"><img src="images/b1p3.jpg" /></div>
              <div class="sub-head">Blockchain Apps Services</div>
              <div class="sub-para">We can assist you in developing cryptocurrency exchanges based on the model of the Peatio open-source exchange.</div>
            </div>

            <div class="hcard hcard4" data-tilt data-tilt-startX="2" data-tilt-startY="85" data-tilt-reset="false" data-tilt-max="2" data-tilt-speed="200" data-tilt-perspective="900" data-tilt-reverse="true">
              <div class="himg"><img src="images/b1p4.jpg" /></div>
              <div class="sub-head">UX/UI Design Development</div>
              <div class="sub-para">Based on many years of experience and extensive knowledge in the field of design, we are exploring the full concept of the application, user interaction, animation and visual design.</div>
            </div>
          </div>
        </section>

    */
};

