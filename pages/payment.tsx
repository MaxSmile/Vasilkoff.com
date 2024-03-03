// pages/payment.tsx
import Head from 'next/head';

export default function Payment() {
    return (
        <div>
            <Head>
                <title>Payments to Vasilkoff</title>
                <meta
                    name="description"
                    content="Streamline payments to Vasilkoff Ltd and request invoices for prepayments or services. Convenient online payment platform for secure transactions."
                />
            </Head>

            <section className="relative overflow-hidden pt-14 mt-40 lg:pt-[100px]">
                <div className="container heading relative z-[1] font-medium pb-10 text-lg leading-[30px]">
                    <h1>Payments to Vasilkoff</h1>
                    <p className='py-4'>Welcome to the Payments page of Vasilkoff Ltd, your trusted provider of software outsourcing services. Here, you can conveniently make payments for invoices and request invoices for prepayments or other predefined services. We strive to streamline your financial transactions and provide a secure and hassle-free payment experience.</p>

                    <div className="text-center lg:w-1/2 lg:text-left">
                        <h2 className='py-4'>Making Payments</h2>

                        <p>To make a payment for an invoice, please follow the steps below:</p>
                        <ol>
                            <li>Enter your invoice number and payment amount in the designated fields.</li>
                            <li>Select your preferred payment method from the available options.</li>
                            <li>Provide the necessary payment details, such as credit card information or bank transfer details.</li>
                            <li>Review the payment summary and click on the "Submit" button to initiate the payment process.</li>
                        </ol>
                        <p>Once your payment is successfully processed, you will receive a confirmation email with the payment details and a receipt for your records. Our system ensures the highest level of security and data protection to safeguard your payment information.</p>
                        <h2 className='py-4'>Requesting Invoices</h2>
                        <p>If you need to request an invoice for prepayments or other predefined services, please complete the following steps:</p>
                        <ol>
                            <li>Fill out the invoice request form, providing accurate and detailed information about the services you require.</li>
                            <li>Include any specific instructions or additional details related to your invoice request.</li>
                            <li>Submit the form, and our team will review your request promptly.</li>
                            <li>Once your invoice is generated, it will be sent to the email address provided. Please ensure the email address is correct and accessible.</li>
                        </ol>
                        
                    </div>
                    <p className='py-4'>In case of any difficulties, please feel free to contact us.</p>
                    <p className="pt-6"><a href="/contact-us" type="button" className="btn btn-danger btn-lg btn-block" >Contact Us Now</a></p>
                    <p className='py-4'>Thank you for choosing Vasilkoff Ltd for your software outsourcing needs. We value your business and strive to provide exceptional services and a seamless payment experience.</p>


                </div>
            </section>

        </div>
    );
};

