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
        <div className="axil-service-area ax-section-gap bg-color-white">
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
};

