import Link from 'next/link';
import Head from 'next/head';

const GetAIChat = (props) => {
    return (
        <div className="pt-[82px] lg:pt-[106px]">
            <Head>
                <title>Get AI Chat - Vasilkoff</title>
            </Head>
            <div className="flex min-h-[500px] items-center justify-center">
                <div className="p-5 text-center font-semibold">
                    <h1 className="mb-8 text-[50px] font-bold leading-none md:text-[80px]">Get AI Chat</h1>
                    <p className="text-base">The page is under the construction</p>
                    <Link href="/" className="btn mx-auto mt-10 w-max">
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GetAIChat;
