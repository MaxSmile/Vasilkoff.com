"use client";
import Head from 'next/head';
import Container from '../_components/Container';
import { useState } from 'react';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Determine button classes based on whether the search term is empty
    const buttonClasses = searchTerm.trim()
        ? 'btn cursor-pointer'
        : 'btn cursor-not-allowed';

    return (
        <main>
            <Head>
                <title>Search results on Vasilkoff website</title>
                <meta name="description" content="Search results on Vasilkoff.com website with Google Custom Search Engine" />
            </Head>

            <section className="relative overflow-hidden pt-14 mt-40 lg:pt-[100px]">
                <Container className="heading relative z-[1] font-medium pb-10 text-lg leading-[30px]">
                    <h1>Search results on Vasilkoff Website</h1>

                    <form action='/'>
                        <input
                            className='w-full max-w-[450px] rounded-md border border-gray-300 p-2 m-4 ml-0'
                            id="s"
                            name="s"
                            type="text"
                            placeholder="Enter Search request here"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <button 
                            type="submit" 
                            className={buttonClasses}
                            disabled={!searchTerm.trim()}
                        >
                            Search
                        </button>
                    </form>

                </Container>
            </section>
        </main>
    );
}
