// pages/payment.tsx
import Head from 'next/head';
import Container from '../_components/Container';
import RequestInvoiceForm from '../_components/RequestInvoice';

export default function PaymentPage() {
    return (
        <>
            <Head>
                <title>Payments to Vasilkoff</title>
                <meta
                    name="description"
                    content="Streamline payments to Vasilkoff Ltd and request invoices for prepayments or services. Convenient online payment platform for secure transactions."
                />
            </Head>

            <section className="max-w-4xl mx-auto py-8">
                <Container>
                    <div className='heading'>
                        <h1>Payments to Vasilkoff</h1>
                    </div>
                    <p className='py-4'>Welcome to the Payments page of Vasilkoff Ltd, your trusted provider of software outsourcing services. Here, you can conveniently make payments for invoices and request invoices for prepayments or other predefined services. We strive to streamline your financial transactions and provide a secure and hassle-free payment experience.</p>
                    <div className="my-6">
                        <p>On this page, you can easily handle your financial interactions with Vasilkoff Ltd. Make use of the quick access below to jump straight to the section you need:</p>
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="#making-payments" className="btn btn-primary">Make a Payment</a>
                            <a href="#requesting-invoices" className="btn btn-secondary">Request an Invoice</a>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="pt-24" id="making-payments">
                <Container>
                    <h2 className='py-4 text-2xl'>Making Payments</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 space-x-8">
                        <div className="pt-8 lg:text-left">
                            <strong>To make a payment for an invoice, please follow the steps below:</strong>
                            <ol className='py-4 list-disc'>
                                <li>Enter your invoice number and payment amount in the designated fields.</li>
                                <li>Select your preferred payment method from the available options.</li>
                                <li>Provide the necessary payment details, such as credit card information or bank transfer details.</li>
                                <li>Review the payment summary and click on the "Submit" button to initiate the payment process.</li>
                            </ol>
                            <p>Once your payment is successfully processed, you will receive a confirmation email with the payment details and a receipt for your records. Our system ensures the highest level of security and data protection to safeguard your payment information.</p>
                        </div>
                        <div>Component</div>
                    </div>
                </Container>
            </section>

            <section className="pt-24" id="requesting-invoices">
                <Container>
                    <h2 className='py-4 text-2xl'>Requesting Invoices</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">

                        <div className="pt-8 text-left">

                            <strong>If you need to request an invoice for prepayments or other predefined services, please complete the following steps:</strong>
                            <ol className='py-4 list-disc'>
                                <li>Fill out the invoice request form, providing accurate and detailed information about the services you require.</li>
                                <li>Include any specific instructions or additional details related to your invoice request.</li>
                                <li>Submit the form, and our team will review your request promptly.</li>
                                <li>Once your invoice is generated, it will be sent to the email address provided. Please ensure the email address is correct and accessible.</li>
                            </ol>
                        </div>
                        <div>
                            <RequestInvoiceForm />
                        </div>
                    </div>


                </Container>
            </section>

            <section className="max-w-4xl mx-auto py-8 mt-10">
  <Container>
    <div className="flex flex-col items-center text-center">
      <p className='py-4 text-lg'>
        <strong>If you encounter any issues or have questions, our team is ready to assist you. You can find various ways to get in touch on our contact page available by clicking below</strong>
      </p>
      <a href="/contact-us" className="btn btn-primary mt-4 py-2 px-6 rounded-md text-white" role="button">Get in Touch</a>
      <p className='py-4 mt-4 text-lg'>
        Thank you for considering Vasilkoff Ltd for your software outsourcing needs. Your business is important to us, and we're committed to delivering outstanding service and ensuring a smooth and secure experience.
      </p>
    </div>
  </Container>
</section>

        </>
    );
};

