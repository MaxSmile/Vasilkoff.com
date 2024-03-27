// /components/Layouts/Prefooter.tsx
import Image from 'next/image.js';

const Prefooter = () => {

    return (
        <>
            <div className="max-w-6xl mx-auto pt-12">
                <div className="grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <a href='https://www.appfutura.com/app-developers/cyprus' target='_blank'>
                            <Image loading="lazy"  src="/images/appfutura-badge.webp" 
                            alt="AppFutura Top 10 IT companies in Cyprus" width={382 / 2} height={344 / 2} />
                        </a>
                    </div>
                    <div className='text-center'>
                        <h2><strong>Free</strong> consultation about how to start your Website or App</h2>
                        <p className="pt-6"><a href="/contact-us" type="button" className="btn" >Contact Us Now</a></p>
                        <p className="pt-6">Free reasearch with in <strong>24 hours</strong> for complex cases</p>
                    </div>
                    <div>
                        <a href="/payment"><Image src="/images/stripe-powered-payments.webp" className="m-auto"
                            alt="Stripe" width={600 / 2} height={290 / 2} /></a>
                        <p className="text-center py-4"><a href="/payment"><strong>Request an invoice</strong></a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Prefooter;
