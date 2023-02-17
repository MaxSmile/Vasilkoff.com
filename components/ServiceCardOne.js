import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import Tilt from 'react-parallax-tilt';
import { camelCaseToDashed } from './helpers/utilities';


const ServiceCardOne = (
    {
        column,
        serviceClass,
        index,
        activeIndex,
        data,
        changeActive,
        alignment = 'center',
    }
) => {
    const [textAlignment, setTextAlignment] = useState('text-center');

    useEffect(() => {
        if (alignment === 'center') setTextAlignment('text-center');
        else if (alignment === 'right') setTextAlignment('text-end');
        else setTextAlignment('text-start');
    }, [alignment]);

    return (
        <div className={column} data-aos="aos-fade-in-up">
            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7}>
                <div
                    className={`axil-service axil-control paralax-image ${serviceClass} ${textAlignment} ${
                        activeIndex === index ? "active" : ""
                    }`}
                    onMouseEnter={() => changeActive(index)}
                >
                    <div className="inner">
                        <div className={`icon ${data.iconColorClass}`}>
                            <div className="icon-inner">
                                <div className="layer-image">
                                    <Image
                                        width={50}
                                        height={49}
                                        src={data.imageLayer}
                                        alt="Icon Images"
                                    />
                                </div>
                                <div className="image-2">
                                    <Image
                                        width={data.imageIcon.width}
                                        height={data.imageIcon.height}
                                        src={data.imageIcon.src}
                                        alt="Shape Images"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="content">
                            <h4 className="title">
                                <Link
                                    href={`/services/${camelCaseToDashed(data.category)}/${data.slug}`}>{data.title}</Link>
                            </h4>
                            <p>{data.description}</p>
                            <Link
                                className="axil-button"
                                data-hover="Learn More"
                                href={`/services/${camelCaseToDashed(data.category)}/${data.slug}`}
                            >
                              
                                    Learn More
                                
                            </Link>
                        </div>
                    </div>
                </div>
            </Tilt>
        </div>
    );
};

export default ServiceCardOne;
