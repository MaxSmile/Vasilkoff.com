import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import Head from 'next/head';

const Privacypolicy = () => {


    return (
        <div>
            <Head>
                <title>Privacy Policy</title>
            </Head>

            <div className="py-14 md:py-[100px]">
                <div className="container">
                    <div className="pb-12  my-20">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Privacy Policy</h4>
                        <p className="pb-5 text-lg font-medium">
                            At www.padmemarketplace.com, accessible at www.padmemarketplace.com, one of our main priorities is the privacy of our visitors. This
                            Privacy Policy document contains types of information that is collected and recorded by www.plurk.com and how we use it.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through email
                            at info@plruk.com
                        </p>
                        <p className="text-lg font-medium">
                            This privacy policy applies only to our online activities and is valid for visitors to our website with regards to the information
                            that they shared and/or collect in www.padmemarketplace.com. This policy is not applicable to any information collected offline or
                            via channels other than this website.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Consent</h4>
                        <p className="pb-5 text-lg font-medium">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                        <p className="text-lg font-medium">
                            Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to
                            enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising
                            partners may also use cookies.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Information we collect</h4>
                        <p className="pb-5 text-lg font-medium">
                            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you
                            at the point we ask you to provide your personal information.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the
                            contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            When you register for an Account, we may ask for your contact information, including items such as name, company name, address,
                            email address, and telephone number.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">How we use your information</h4>
                        <p className="pb-5 text-lg font-medium">We use the information we collect in various ways, including to:</p>
                        <ul className="text-lg font-medium">
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Provide, operate, and maintain our website
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Improve, personalize, and expand our website
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Understand and analyze how you use our website
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Develop new products, services, features, and functionality
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Communicate with you, either directly or through one of our partners, including for customer service, to provide you with
                                updates
                            </li>
                        </ul>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Links to Other Sites/Apps</h4>
                        <p className="text-lg font-medium">
                            Our Website links to other websites/Websites that may collect personally identifiable information about you. Mntra is not
                            responsible for the privacy practices or the content of those linked websites/Websites.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Security Precautions</h4>
                        <p className="text-lg font-medium">
                            Our Website has stringent security measures in place to protect the loss, misuse, and alteration of the information under our
                            control. Whenever you change or access your account information, we offer the use of a secure server. Once your information is in
                            our possession we adhere to strict security guidelines, protecting it against unauthorized access.
                        </p>
                    </div>
                    <div>
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Choice/Opt-Out</h4>
                        <p className="text-lg font-medium">
                            We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from
                            us on behalf of our partners, and from us in general, after setting up an account. If you want to remove your contact information
                            from all our lists and newsletters, please visit unsubscribe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacypolicy;
