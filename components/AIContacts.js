import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { GeoAlt, Person, EnvelopeAt, Telephone, ChatLeftDots, Send } from 'react-bootstrap-icons';
import ActiveZone from './ActiveZone';

export default function AIContacts() {
    const [activeZone, setActiveZone] = useState(false);
    
    const aicheadRef = useRef();
    const parentRef = useRef();
    const chatLeftDotsRef = useRef();
    const submitMessageBtnRef = useRef();

    const nameRef = useRef();
    const emailRef = useRef();
    const mobileRef = useRef();
    const messageRef = useRef();
    const cityRef = useRef();

    const containerRef = messageRef;

    const submitMessage = () => {
        const message = messageRef.current.innerText;
        messageRef.current.innerHTML = "";
        setActiveZone(<ActiveZone 
            name={nameRef.current.value}
            email={emailRef.current.value}
            mobile={mobileRef.current.value}
            message={message}
            city={cityRef.current.value}
            />);

        aicheadRef.current?.classList.add("hidden");
        containerRef.current?.classList.add("height-300");
        parentRef.current?.classList.add("topping-0");
        chatLeftDotsRef.current?.classList.add("shrink-away");
        submitMessageBtnRef.current?.classList.add("shrink-away");
        containerRef.current.contentEditable = false;
        
    }

    
    return (
        <>

            <section className="bg-white my-20">
                <Container>
                    <h2 className="text-center text-3xl font-bold text-primary">Please, try our assistant manager chat</h2>
                    <h4 className="text-center text-xl font-bold text-secondary">- AI powered -</h4>
                    <div className="relative z-10 lg:flex ">

                        <form action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-1/2 lg:px-8">
                            <div id="aichead" className="grid gap-10 sm:grid-cols-2" ref={aicheadRef}>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        ref={nameRef}
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >
                                        Full Name
                                    </label>
                                    <Person className="absolute top-1/2 -translate-y-1/2 right-4 " />
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        ref={emailRef}
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >
                                        Email Address
                                    </label>
                                    <EnvelopeAt className="absolute top-1/2 -translate-y-1/2 right-4 " />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="mobile"
                                        ref={mobileRef}
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >
                                        Mobile Number
                                    </label>
                                    <Telephone className="absolute top-1/2 -translate-y-1/2 right-4 " />
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="city"
                                        ref={cityRef}
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >
                                        City
                                    </label>
                                    <GeoAlt className="absolute top-1/2 -translate-y-1/2 right-4 " />
                                </div>
                            </div>
                            <div className="relative top-10" ref={parentRef}>
                                <div
                                    contentEditable="true"
                                    name="message"
                                    id="messageContainer"
                                    style={activeZone ? { padding: 0, overflow: "hidden" }:{}}
                                    ref={messageRef}
                                    className=" height-60 w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary pr-12"
                                >{activeZone}</div>
                                {!activeZone && (
                                    <label htmlFor="message" className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                        Message
                                    </label>
                                )}
                                
                                <ChatLeftDots ref={chatLeftDotsRef} className="absolute top-1/2 -translate-y-1/2 right-4 " />
                            </div>
                            <div className="mt-20 text-center lg:text-right">
                                <button type="button" 
                                    ref={submitMessageBtnRef}
                                    onClick={submitMessage}
                                    className="btn bg-white px-12 capitalize text-secondary  dark:hover:bg-secondary">
                                    Send Message
                                </button>
                            </div>
                        </form>

                        <div className="heading text-center lg:mb-0 lg:w-1/2 lg:pr-10 lg:text-left text-dark my-8">

                            <div
                                className="mx-auto"
                                // data-aos='fade-left'
                                // data-aos-duration="1000"
                            >
                                <p>
                                    At our company, we pride ourselves on providing top-notch software development services to our clients. We understand that communication is a critical aspect of our work, and that's why we've introduced our AI-powered assistant manager chat. This chat is available on our website, and it's designed to help our customers get quick answers to their basic questions.
                                </p>
                                <br />
                                <p>
                                    When you start a conversation with our AI-powered chat, it will ask you a few questions to understand your needs and provide relevant information. The chat is powered by advanced AI technology, which enables it to learn and adapt to different situations. This means that as you interact with the chat, it will become smarter and more accurate in providing you with the information you need.
                                </p>
                            </div>

                        </div>
                    </div>
                </Container>
            </section>
        </>

    )
}