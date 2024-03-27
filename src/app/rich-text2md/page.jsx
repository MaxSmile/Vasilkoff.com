// src/app/rich-text2md/page.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Container from '../_components/Container';
import BtnClose from '../_components/BtnClose';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import html2md from 'html-to-md';
import Link from 'next/link';
import OtherServicesAndTools from '../_components/OtherServicesAndTools';

const RichText2MdPage = () => {
  const [markdownOutput, setMarkdownOutput] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const editableDivRef = useRef(null);

  const saveContent = () => {
    if (editableDivRef.current) {
      localStorage.setItem('rtInput', editableDivRef.current.innerHTML);
    }
  };

  const convertToMarkdown = () => {
    if (editableDivRef.current) {
      const html = editableDivRef.current.innerHTML;
      const md = html2md(html);
      setMarkdownOutput(md);
      saveContent();
    }
  };

  const resetFields = () => {
    if (editableDivRef.current) {
      editableDivRef.current.innerHTML = '';
      setMarkdownOutput('');
    }
  };

  useEffect(() => {
    const savedInput = localStorage.getItem('rtInput');
    if (savedInput && editableDivRef.current) {
      editableDivRef.current.innerHTML = savedInput;
    }
  }, []);

  return (
    <main>
      <Head>
        <title>Rich Text to Markdown Converter - Vasilkoff</title>
        <meta name="description" content="Convert your rich text to Markdown easily with our tool. Just paste your content and see the Markdown version instantly." />
      </Head>

      <Container className="py-20">
        <h1 className="mb-5 text-2xl font-bold">Rich Text to Markdown Converter</h1>
        <p className="mb-5">This service allows you to convert rich text content into Markdown format. Simply paste your content in the box below and click "Convert" to see the Markdown result. Feel free to edit your content directly.</p>

 
<div className="grid grid-cols-2 gap-4">
  <div>
    <h2 className="mb-2 text-lg font-semibold">Rich Text Input</h2>
    <div
      contentEditable
      ref={editableDivRef}
      className="w-full h-64 p-2 border border-gray-300 rounded shadow-sm overflow-auto 
      focus:outline-none focus:ring focus:border-blue-300"
      onInput={convertToMarkdown}
      placeholder="Paste rich text here..."
    />
  </div>
  <div>
    <h2 className="mb-2 text-lg font-semibold">Markdown Output</h2>
    <textarea
      className="w-full p-2 border border-gray-300 rounded shadow-sm overflow-auto h-64"
      value={markdownOutput}
      
      placeholder="Your Markdown will appear here..."
    />
  </div>
</div>





        <div className="mt-4 flex justify-center gap-4">
          <button className="btn-132" onClick={convertToMarkdown}>Convert</button>
          <button className="btn-132" onClick={resetFields}>Reset</button>
          <button className="btn-132" onClick={() => setShowPreview(!showPreview)}>Preview</button>
        </div>
        {showPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative w-full max-w-3xl h-[80vh] p-5 overflow-hidden bg-white rounded-lg">
              <BtnClose onClose={() => setShowPreview(false)} className="absolute top-0 right-0 m-4" />
              <div className="overflow-auto h-full">
                <Markdown remarkPlugins={[remarkGfm]} children={markdownOutput} />
              </div>
            </div>
          </div>
        )}
        <OtherServicesAndTools exceptionLink="/rich-text2md" />
      </Container>
    </main>
  );
}

export default RichText2MdPage;
