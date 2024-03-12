// pages/html2md.tsx
import Head from 'next/head';
import { useState } from 'react';
import remarkGfm from "remark-gfm";
import html2md from 'html-to-md';

import BtnClose from '../components/helpers/BtnClose';
import Markdown from 'react-markdown';

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

    return (
        <div>
            <Head>
                <title>HTML to Markdown Converter - Vasilkoff</title>
                <meta
                    name="description"
                    content="Convert your HTML to Markdown easily with our tool. Just paste your HTML code and get the Markdown version instantly."
                />
            </Head>

            <div className="container py-20">
                <h1 className="mb-5 mt-12 text-2xl font-bold">HTML to Markdown Converter</h1>
                <p className="mb-5">This service allows you to convert HTML code into Markdown format. Simply paste your HTML in the left box and click "Convert" to see the Markdown result on the right. Feel free to edit your HTML and Markdown in the text areas.</p>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="mb-2 font-semibold">HTML Input</h2>
                        <textarea
                            className="w-full h-64 p-2 border rounded"
                            value={htmlInput}
                            onChange={(e) => setHtmlInput(e.target.value)}
                            placeholder="Paste your HTML here..."
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
                <div className="mt-4 flex gap-4 mx-auto max-w-xl">
                    <button className="btn" onClick={convertToMarkdown} disabled={!htmlInput}>
                        Convert
                    </button>

                    <button className="btn" onClick={copyToClipboard} disabled={!markdownOutput}>
                        Copy
                    </button>
                    <button className="btn" onClick={resetFields} disabled={!htmlInput && !markdownOutput}>
                        Reset
                    </button>
                    <button className="btn" onClick={togglePreview} disabled={!markdownOutput}>
                        Preview
                    </button>
                </div>
                {showPreview && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                        <div className="relative bg-white p-5 rounded-lg w-full max-w-3xl h-[80vh] overflow-hidden">
                            <BtnClose onClose={() => setShowPreview(false)} className="absolute top-0 right-0 m-4" />
                            <div className="overflow-auto h-full">
                                <Markdown remarkPlugins={[remarkGfm]}>{markdownOutput}</Markdown>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Html2MdPage;
