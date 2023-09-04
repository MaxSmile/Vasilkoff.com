import { PropsWithChildren, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from '../../App';
import Footer from './Footer';
import Header from './Header';

const DefaultLayout = ({ children }: PropsWithChildren) => {
    const [showLoader, setShowLoader] = useState(true);
    const [showTopButton, setShowTopButton] = useState(false);

    const goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const onScrollHandler = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setShowTopButton(true);
        } else {
            setShowTopButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler);

        const screenLoader = document.getElementsByClassName('screen_loader');
        if (screenLoader?.length) {
            // screenLoader[0].classList.add("animate__fadeOut");
            setTimeout(() => {
                setShowLoader(false);
            }, 200);
        }

        return () => {
            window.removeEventListener('onscroll', onScrollHandler);
        };
    });

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <App>
            {/* BEGIN MAIN CONTAINER */}
            <div>
                {/* screen loader  */}
                {showLoader && (
                    <div className="screen_loader fixed inset-0 z-[60] grid place-content-center bg-[#fafafa] dark:bg-[#060818]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="200px"
                            height="200px"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid"
                        >
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#990000" strokeWidth="4">
                                <animate
                                    attributeName="r"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="0;16"
                                    keyTimes="0;1"
                                    keySplines="0 0.2 0.8 1"
                                    calcMode="spline"
                                    begin="0s"
                                ></animate>
                                <animate
                                    attributeName="opacity"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="1;0"
                                    keyTimes="0;1"
                                    keySplines="0.2 0 0.8 1"
                                    calcMode="spline"
                                    begin="0s"
                                ></animate>
                            </circle>
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#DCDCDC" strokeWidth="4">
                                <animate
                                    attributeName="r"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="0;16"
                                    keyTimes="0;1"
                                    keySplines="0 0.2 0.8 1"
                                    calcMode="spline"
                                    begin="-0.5s"
                                ></animate>
                                <animate
                                    attributeName="opacity"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="1;0"
                                    keyTimes="0;1"
                                    keySplines="0.2 0 0.8 1"
                                    calcMode="spline"
                                    begin="-0.5s"
                                ></animate>
                            </circle>
                        </svg>
                    </div>
                )}

                <div className="bg-white font-mulish text-base text-gray antialiased dark:bg-[#261010]">
                    <Header className={showTopButton ? 'sticky-header' : ''}/>

                    <div id="maincontent" role="main" className="-mt-[82px] bg-white lg:-mt-[106px]">
                        {children}

                        <Footer />
                    </div>
                </div>

                {/* Return to Top  */}
                {showTopButton && (
                    <button type="button" className="fixed bottom-5 z-10 animate-bounce right-5" onClick={goToTop}>
                        <div className="group flex h-14 w-14 items-center justify-center rounded-full border border-black/20 text-white 
                        transition duration-500 bg-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6 transition group-hover:text-black"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                    </button>
                )}
            </div>
        </App>
    );
};

export default DefaultLayout;
