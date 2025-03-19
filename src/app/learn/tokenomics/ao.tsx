import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const AOComputerTokenomics: React.FC = () => {
  const [shortContent, setShortContent] = useState('');
  const [longContent, setLongContent] = useState('');
  const [showLongVersion, setShowLongVersion] = useState(true);

  useEffect(() => {
    fetch('/src/content/learn/tokenomics/ao-short.md')
      .then(res => res.text())
      .then(setShortContent);
    
    fetch('/src/content/learn/tokenomics/ao-long.md')
      .then(res => res.text())
      .then(setLongContent);
  }, []);

  // return (
  //   <div className="text-white container mx-auto p-4">
  //     <h1 className="text-3xl font-bold mb-4">AO Computer Tokenomics</h1>
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
      <h2 className="text-3xl font-bold mb-6 text-center">AO Computer Tokenomics</h2>

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
      {/* Video Explanation Section */}
      {/* {showLongVersion &&(
        <div className="w-full mt-6">
        <p className="mb-4"> For a more in-depth understanding of Arweave's tokenomics, consider watching the following video: </p>
          <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/XJxe4ovuhqc"
              title="Arweave's AO Token Launch: What You Need to Know"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
       */}
       {showLongVersion && (
  <div className="w-full max-w-xl mt-6">
    <p className="mb-4 text-center text-gray-300">
      For a more in-depth understanding of Arweave's tokenomics, consider watching the following video:
    </p>
    <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="absolute inset-0 w-full h-64 rounded-lg border border-gray-700"
        src="https://www.youtube.com/embed/XJxe4ovuhqc"
        title="Arweave's AO Token Launch: What You Need to Know"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

    </main>
  );
};

export default AOComputerTokenomics;
