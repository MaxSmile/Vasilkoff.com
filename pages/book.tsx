// pages/book.tsx
import Head from 'next/head';
import Image from 'next/image';

export default function Book() {
    return (
        <>
            <Head>
                <title>Programming boook written by Maxim Vasilkov</title>
                <meta
                    name="description"
                    content="Programming boook written by Maxim Vasilkov and Gibson Tang: Objective-C memory management essentials"
                />
            </Head>

            <section className="relative overflow-hidden pt-14 mt-40 lg:pt-[100px]">
                <div className="container heading relative z-[1] font-medium pb-10 text-lg leading-[30px]">
                    <h1>Programming book written by Gibson Tang and Maxim Vasilkov</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <div className="text-center lg:text-left space-y-4">
                                <p>Objective-C Memory Management Essentials was first published in 2015 when Swift, a newer programming language, was gaining popularity in iOS development. As a result, the content of the book may have become outdated over time.</p>
                                <p>Unless your project specifically requires the use of Objective-C, especially for older projects, I would not recommend purchasing this book. Swift has evolved significantly since then, and there are more up-to-date resources available to learn memory management and iOS development.</p>
                                <p>If you are working on legacy Objective-C projects, you may still find value in this book. However, for most developers, I would recommend exploring newer resources that focus on Swift and its modern memory management techniques.</p>
                                <h2 className="py-4">With this book, you can:</h2>
                                <ul className="list-disc list-inside">
                                    <li>Gain a basic understanding of memory management and why memory leaks occur in applications.</li>
                                    <li>Learn about autorelease pools and object creation/storage to understand how memory is allocated.</li>
                                    <li>Explore ARC (Automatic Reference Counting) and how it helps in memory management.</li>
                                    <li>Discover various tools provided by Xcode that aid in memory management.</li>
                                    <li>Get a basic understanding of Swift, the recently introduced programming language for writing interactive and lightning-fast applications.</li>
                                </ul>
                                <p>You can find the book on <a className='underline' href="https://www.amazon.com/Objective-C-Memory-Management-Essentials/dp/1849697124" target="_blank">Amazon</a>.</p>
                            </div>
                        </div>
                        <div className=" justify-right items-right">
                            <Image src="/images/objc-mem-mng-essen.webp" alt="Objective-C Memory Management Essentials" width={1103 / 2} height={1360 / 2} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

