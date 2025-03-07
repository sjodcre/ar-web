// // src/pages/ArweaveTokenomics.tsx

// import React from 'react';

// const ArweaveTokenomics: React.FC = () => {
//   return (
//     <div className="text-white container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Arweave Tokenomics</h1>
//       <p className="mb-4">
//         Arweave is a decentralized storage network that offers permanent data storage solutions. Its native token, AR, is central to the network's operations and economic model.
//       </p>
//       <h2 className="text-2xl font-semibold mb-2">Key Features of AR Tokenomics</h2>
//       <h3 className="text-xl font-semibold mb-2">Utility of AR</h3>
//       <ul className="list-disc list-inside mb-4">
//         <li>Data Upload Fees: Users utilize AR tokens to pay a one-time fee for uploading data permanently onto the Arweave network.</li>
//         <li>Miner Incentives: Miners, who maintain and verify the network, are rewarded with AR tokens for their services.</li>
//       </ul>
//       <h3 className="text-xl font-semibold mb-2">Token Supply</h3>
//       <p className="mb-4">
//         The total supply of AR tokens is capped at 66 million:
//       </p>
//       <ul className="list-disc list-inside mb-4">
//         <li>Genesis Block Allocation: At the network's inception on June 8, 2018, 55 million AR tokens were minted. These were distributed among the storage endowment, early investors, initial developers, and community initiatives.</li>
//         <li>Mining Rewards: The remaining 11 million AR tokens are being gradually released as block rewards to incentivize miners over time.</li>
//       </ul>
//       <h3 className="text-xl font-semibold mb-2">Storage Endowment Mechanism</h3>
//       <p className="mb-4">
//         A distinctive feature of Arweave's economic model is its storage endowment:
//       </p>
//       <ul className="list-disc list-inside mb-4">
//         <li>Fee Allocation: When users upload data, a small portion of the fee compensates miners immediately, while the majority (~95%) is allocated to a storage endowment.</li>
//         <li>Sustainability: This endowment is designed to sustainably fund data storage over the long term. The tokens in the endowment are reserved to be released as block rewards after approximately 200 years or more, depending on network conditions and mining profitability.</li>
//       </ul>
//       <h3 className="text-xl font-semibold mb-2">Economic Model</h3>
//       <p className="mb-4">
//         Arweave's tokenomics are grounded in crypto-economic game theory:
//       </p>
//       <ul className="list-disc list-inside mb-4">
//         <li>Scarcity and Demand: With a fixed supply and essential utility in data storage, AR tokens derive value from their scarcity and demand within the network.</li>
//         <li>Incentive Alignment: The model ensures that both users and miners are economically motivated to participate, fostering a robust and self-sustaining ecosystem.</li>
//       </ul>
//       <h2 className="text-2xl font-semibold mb-2">Sources</h2>
//       <ul className="list-disc list-inside mb-4">
//         <li><a href="https://x.com/onlyarweave/status/1725514260795785606" className="text-blue-500 hover:underline">Arweave Tokenomics Guide</a></li>
//         <li><a href="https://www.arweave.org/yellow-paper.pdf" className="text-blue-500 hover:underline">Arweave Yellow Paper</a></li>
//       </ul>
//     </div>
//   );
// };

// export default ArweaveTokenomics;


import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const ArweaveTokenomics: React.FC = () => {
  const [shortContent, setShortContent] = useState('');
  const [longContent, setLongContent] = useState('');
  const [showLongVersion, setShowLongVersion] = useState(true);

  useEffect(() => {
    fetch('/src/content/learn/tokenomics/arweave-short.md')
      .then(res => res.text())
      .then(setShortContent);
    
    fetch('/src/content/learn/tokenomics/arweave-long.md')
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
