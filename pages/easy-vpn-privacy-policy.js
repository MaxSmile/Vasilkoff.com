import React from 'react';
import Head from 'next/head';

export default function EasyVpnPrivacyPolicy() {
    return (
        <div>
            <Head>
                <title>Privacy Policy - Easy VPN Free</title>
                <meta 
                    name="description" 
                    content="Learn how Vasilkoff prioritizes your privacy, detailing our practices for Easy VPN Free" 
                />
            </Head>
            <div className="container py-20">
                <h1 className="mb-5 mt-12 text-2xl font-bold">Easy VPN Free Privacy Policy</h1>
                <p className="mb-5">Last updated: December 1, 2023</p>

                <div className="prose space-y-4">
                    <p>
                        Welcome to Easy VPN Free. This privacy policy outlines our practices regarding the collection, use, and disclosure of information for users of our Easy VPN Free application ("App").
                    </p>

                    <h2>About Easy VPN Free</h2>
                    <p>
                        Easy VPN Free is an Android application that allows users to easily connect to a multitude of free VPN servers around the world with just a single tap. The list of servers the application connects to is sourced from <a href="http://www.vpngate.net/">VPN Gate Academic Experiment Project</a>, an academic research initiative at the Graduate School of the University of Tsukuba, Japan. This project aims to expand knowledge of "Global Distributed Public VPN Relay Servers".
                    </p>
                    <ul>
                        <li>Access to approximately 8531 Public VPN Relay Servers by volunteers worldwide.</li>
                        <li>Disguise your IP address to hide your identity while surfing the Internet.</li>
                        <li>Utilize strong encryption to protect yourself on public Wi-Fi networks.</li>
                        <li>Free of charge and no registration required.</li>
                    </ul>

                    <h2>Data Collection and Use</h2>
                    <p>
                        Easy VPN Free is committed to protecting your privacy. Our App is designed as an open-source solution that prioritizes your privacy and security. We do not collect, store, or process any personal data through our App. The App does not require any form of registration, and we do not track or monitor your activity.
                    </p>

                    <h2>Third-Party Components and Licenses</h2>
                    <p>
                        This application uses several third-party components:
                    </p>
                    <ul>
                        <li><a href="https://github.com/schwabe/ics-openvpn">OpenVPN for Android</a> under GPLv2 License.</li>
                        <li><a href="https://github.com/daimajia/NumberProgressBar">NumberProgressBar</a> under MIT License.</li>
                        <li><a href="https://github.com/amitshekhariitbhu/Fast-Android-Networking">Fast-Android-Networking</a> under Apache 2.0 License.</li>
                    </ul>
                    <p>
                        The source code for Easy VPN Free, along with full details on the licenses, can be found on our <a href="https://github.com/MaxSmile/EasyVPN-Free">GitHub page</a>.
                    </p>

                    <h2>Data Collection and Use</h2>
                    <p>
                        Easy VPN Free is committed to protecting your privacy. Our App is designed as an open-source solution that prioritizes your privacy and security. We do not collect, store, or process any personal data through our App. The App does not require any form of registration, and we do not track or monitor your activity.
                    </p>
                    <h2>No Data Sharing</h2>
                    <p>
                        Since we do not collect any personal data, there is no sharing of personal information with third parties.
                    </p>
                    <h2>Security</h2>
                    <p>
                        We are dedicated to ensuring the security of our App and protecting it from unauthorized access. However, please be aware that no security measures are impenetrable, and we cannot guarantee absolute security.
                    </p>
                    <h2>Compliance with Laws</h2>
                    <p>
                        We comply with all applicable laws and regulations regarding data protection and privacy.
                    </p>
                    <h2>Changes to Our Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We encourage you to review this Privacy Policy periodically for any changes.
                    </p>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about our Privacy Policy, please contact us via:
                        <ul>
                            <li>Email: easy-vpn@vasilkoff.com</li>
                            <li>GitHub Repository: https://github.com/MaxSmile/EasyVPN-Free</li>
                        </ul>
                    </p>

                </div>
            </div>
        </div>
    )
}
