import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const ArweaveTokenomics: React.FC = () => {
  const [shortContent, setShortContent] = useState('');
  const [longContent, setLongContent] = useState('');
  const [showLongVersion, setShowLongVersion] = useState(true);

  useEffect(() => {
    fetch('/content/learn/tokenomics/arweave-short.md')
      .then(res => res.text())
      .then(setShortContent);
    
    fetch('/content/learn/tokenomics/arweave-long.md')
      .then(res => res.text())
      .then(setLongContent);
  }, []);

  // return (
  //   <div className="text-white container mx-auto p-4">
  //     <h1 className="text-3xl font-bold mb-4">Arweave Tokenomics</h1>
  //     <button 
  //       onClick={() => setShowLongVersion(prev => !prev)}
  //       className="mb-4 p-2 bg-gray-700 rounded hover:bg-gray-600 transition"
  //     >
  //       {showLongVersion ? "TL;DR" : "Full Version"}
  //     </button>
  //     <div className="markdown-content">
  //       <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
  //         {showLongVersion ? longContent : shortContent}
  //       </ReactMarkdown>
  //     </div>
  //   </div>
  // );
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      {/* Header */}
      <h2 className="font-bold mb-6 text-center text-3xl">Arweave Tokenomics</h2>

      {/* Toggle Button */}
      <button
        onClick={() => setShowLongVersion(prev => !prev)}
        className="mb-4 p-2 bg-gray-800 border border-gray-700 rounded hover:bg-gray-700 transition"
      >
        {showLongVersion ? "TL;DR" : "Full Version"}
      </button>

      {/* Content Container */}
      <div className="markdown text-lg p-6 bg-black border border-gray-800 rounded-md w-full text-justify">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {showLongVersion ? longContent : shortContent}
        </ReactMarkdown>
      </div>
    </main>
  );
};

export default ArweaveTokenomics;
