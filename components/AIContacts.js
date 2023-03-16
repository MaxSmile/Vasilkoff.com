import { Container } from 'react-bootstrap';
import { GeoAlt, Person, EnvelopeAt, Telephone, ChatLeftDots } from 'react-bootstrap-icons';

export default function AIContacts() {
    return (
        <>

            <section className="bg-white my-20">
                <Container>
                    <h2 className="text-center text-3xl font-bold text-primary">Please, try our assistant manager chat</h2>
                    <h4 className="text-center text-xl font-bold text-secondary">- AI powered -</h4>
                    <div className="relative z-10 lg:flex ">

                        <form action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-1/2 lg:px-8">
                            <div className="grid gap-10 sm:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
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
                            <div className="relative mt-10">
                                <input
                                    type="text"
                                    name="message"
                                    className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label htmlFor="" className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                    Message
                                </label>
                                <ChatLeftDots className="absolute top-1/2 -translate-y-1/2 right-4 " />
                            </div>
                            <div className="mt-10 text-center lg:text-right">
                                <button type="button" className="btn bg-white px-12 capitalize text-secondary  dark:hover:bg-secondary">
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