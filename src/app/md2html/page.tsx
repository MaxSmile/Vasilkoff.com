// src/app/md2html/page.tsx
"use client";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { remark } from "remark";
import html from "remark-html";
import Container from '../_components/Container';
import { MD_EXAMPLE } from '@/lib/constants';
import OtherServicesAndTools from '../_components/OtherServicesAndTools';

const Md2HtmlPage = () => {
    const [markdownInput, setMarkdownInput] = useState('');
    const [htmlOutput, setHtmlOutput] = useState('');

    const convertToHtml = async () => {
        const result = await remark().use(html).process(markdownInput);
        setHtmlOutput(result.toString());
    };

    const resetFields = () => {
        setMarkdownInput('');
        setHtmlOutput('');
    };

    // Load the saved input from localStorage when the component mounts
    useEffect(() => {
        const savedInput = localStorage.getItem('mdInput');
        if (savedInput) {
            setMarkdownInput(savedInput);
        }
    }, []);

    // Update the localStorage whenever the input changes
    useEffect(() => {
        localStorage.setItem('mdInput', markdownInput);
    }, [markdownInput]);

    return (
        <main>
            <Head>
                <title>Markdown to HTML Converter - Vasilkoff</title>
                <meta
                    name="description"
                    content="Convert your Markdown to HTML easily with our tool. Just paste your Markdown and click Convert to see the HTML version instantly."
                />
            </Head>

            <Container className="py-20">
                <h1 className="mb-5 mt-12 text-2xl font-bold">Markdown to HTML Converter</h1>
                <p className="mb-5">This service allows you to convert Markdown into HTML format. Simply paste your Markdown in the left box and click "Convert" to see the HTML result on the right.
                    Feel free to edit your Markdown and preview the HTML output.</p>
                

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="mb-2 font-semibold">Markdown Input</h2>
                        <textarea
                            className="w-full h-64 p-2 border rounded"
                            value={markdownInput}
                            onChange={(e) => setMarkdownInput(e.target.value)}
                            placeholder={MD_EXAMPLE}
                            spellCheck="false"
                        ></textarea>
                    </div>
                    <div>
                        <h2 className="mb-2 font-semibold">HTML Output</h2>
                        <textarea
                            className="w-full h-64 p-2 border rounded"
                            value={htmlOutput}
                            readOnly
                            placeholder="Your HTML will appear here..."
                        ></textarea>
                    </div>
                </div>
                <div className="mt-4 flex gap-4 w-fit justify-center mx-auto">
                    <button className="btn-132" onClick={convertToHtml} disabled={!markdownInput}>
                        Convert
                    </button>
                    <button className="btn-132" onClick={resetFields} disabled={!markdownInput && !htmlOutput}>
                        Reset
                    </button>
                </div>
                <OtherServicesAndTools exceptionLink="/md2html" />
            </Container>
        </main>
    );
};

export default Md2HtmlPage;
