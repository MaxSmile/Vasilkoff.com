// pages/read-fast.tsx
import Head from 'next/head';

export default function ReadFast() {
    return (
        <>
            <Head>
                <title>Read Fast with an app from Vasilkoff</title>
                <meta
                    name="description"
                    content="Explore Read Fast, an extended Android book reader that trains fast reading skills"
                />
            </Head>

            <section className="relative overflow-hidden pt-14 mt-40 lg:pt-[100px]">
                <div className="container heading relative z-[1] font-medium pb-10 text-lg leading-[30px]">
                    <h1>Read Fast with an app from Vasilkoff</h1>
                    <p className='py-4'>Rework of https://gitlab.com/axet/android-book-reader 
                    https://gitlab.com/axet/android-book-reader.git</p>
  <p>Welcome to Read Fast, an extended Android book reader that is designed to train fast reading skills. 
    It is an open-source rework of the Android book reader available at <a href="https://gitlab.com/axet/android-book-reader">https://gitlab.com/axet/android-book-reader</a>.</p>
  <p>Read Fast offers a range of features to enhance your reading speed, including:</p>
  <ul>
    <li>Speed Reading Techniques: Practice various speed reading techniques to improve your reading speed and comprehension.</li>
    <li>Customizable Settings: Adjust the reading speed, font size, and other settings to suit your preferences.</li>
    <li>Text Highlighting: Follow along with highlighted text to help you read at a faster pace.</li>
    <li>Progress Tracking: Monitor your reading progress and track improvements over time.</li>
  </ul>
  <p>Download the open-source Read Fast app from the original Android book reader repository, and start training your fast reading skills today!</p>
                </div>
            </section>

        </>
    );
};

