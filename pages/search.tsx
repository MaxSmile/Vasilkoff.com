import Head from 'next/head';

export default function Search() {


    return (
        <>
            <Head>
                <title>Search results on Vasilkoff website</title>
                <meta name="description" content="???" />
            </Head>

            <section className="relative overflow-hidden pt-14 mt-40 lg:pt-[100px]">
                <div className="container heading relative z-[1] font-medium pb-10 text-lg leading-[30px]">
                    <h1>Search results on Vasilkoff Website</h1>

                    <form action='/'>
                        <input
                            className='w-full max-w-[450px] rounded-md border border-gray-300 p-2 m-4 ml-0'
                            id="s"
                            name="s"
                            type="text"
                            placeholder="Enter Search request here"
                        />
                        <button type="submit" className='btn'>Search</button>
                    </form>

                </div>


            </section>
        </>
    );
}
