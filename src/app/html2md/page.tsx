// src/app/html2md/page.tsx
"use client";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import remarkGfm from "remark-gfm";
import html2md from 'html-to-md';
import BtnClose from '../_components/BtnClose';
import Markdown from 'react-markdown';
import Container from '../_components/Container';
import { HTML_EXAMPLE } from '@/lib/constants';
import OtherServicesAndTools from '../_components/OtherServicesAndTools';


const Html2MdPage = () => {
    const [htmlInput, setHtmlInput] = useState('');
    const [markdownOutput, setMarkdownOutput] = useState('');
    const [showPreview, setShowPreview] = useState(false);

    const convertToMarkdown = () => {
        const markdown = html2md(htmlInput);
        setMarkdownOutput(markdown);
    };

    const resetFields = () => {
        setHtmlInput('');
        setMarkdownOutput('');
    };

    const copyToClipboard = async () => {
        if (markdownOutput) {
            try {
                await navigator.clipboard.writeText(markdownOutput);
                alert('Markdown copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };

    const togglePreview = () => setShowPreview(!showPreview);


    // Load the saved HTML input from localStorage when the component mounts
    useEffect(() => {
        const savedHtmlInput = localStorage.getItem('htmlInput');
        if (savedHtmlInput) {
            setHtmlInput(savedHtmlInput);
        }
    }, []);

    // Update the localStorage whenever the HTML input changes
    useEffect(() => {
        localStorage.setItem('htmlInput', htmlInput);
    }, [htmlInput]);

    return (
        <main>
            <Head>
                <title>HTML to Markdown Converter - Vasilkoff</title>
                <meta
                    name="description"
                    content="Convert your HTML to Markdown easily with our tool. Just paste your HTML code and get the Markdown version instantly."
                />
            </Head>

            <Container className="py-20">
                <h1 className="mb-5 mt-12 text-2xl font-bold">HTML to Markdown Converter</h1>
                <p className="mb-5">This service allows you to convert HTML code into Markdown format. Simply paste your HTML in the left box and click "Convert" to see the Markdown result on the right.
                    Feel free to edit your HTML and Markdown in the text areas.</p>
                    

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="mb-2 font-semibold">HTML Input</h2>
                        <textarea
                            className="w-full h-64 p-2 border rounded"
                            value={htmlInput}
                            onChange={(e) => setHtmlInput(e.target.value)}
                            placeholder={HTML_EXAMPLE}
                            spellCheck="false"
                        ></textarea>
                    </div>
                    <div>
                        <h2 className="mb-2 font-semibold">Markdown Output</h2>
                        <textarea
                            className="w-full h-64 p-2 border rounded"
                            value={markdownOutput}
                            readOnly
                            placeholder="Your Markdown will appear here..."
                        ></textarea>
                    </div>
                </div>
                <div className="mt-4 flex gap-4 w-fit justify-center mx-auto">
                    <button className="btn-132" onClick={convertToMarkdown} style={{ "display": (!htmlInput) ? "none" : 'block' }} >
                        Convert
                    </button>

                    <button className="btn-132" onClick={copyToClipboard} style={{ "display": (!markdownOutput) ? "none" : 'block' }} disabled={!markdownOutput}>
                        Copy
                    </button>
                    <button className="btn-132" onClick={resetFields} style={{ "display": (!htmlInput && !markdownOutput) ? "none" : 'block' }} >
                        Reset
                    </button>
                    <button className="btn-132" onClick={togglePreview} style={{ "display": (!markdownOutput) ? "none" : 'block' }}>
                        Preview
                    </button>
                </div>
                {showPreview && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                        <div className="relative bg-white p-5 rounded-lg w-full max-w-3xl h-[80vh] overflow-hidden">
                            <BtnClose onClose={() => setShowPreview(false)} className="absolute top-0 right-0 m-4" />
                            <div className="overflow-auto h-full mt-12">
                                <Markdown remarkPlugins={[remarkGfm]}>{htmlInput}</Markdown>
                            </div>
                        </div>
                    </div>
                )}
                <OtherServicesAndTools exceptionLink="/html2md" />
            </Container>
        </main>
    );
}

export default Html2MdPage;
