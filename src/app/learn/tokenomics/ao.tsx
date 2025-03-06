// // src/Tokenomics.tsx

// import React from 'react';

// const AOComputerTokenomics: React.FC = () => {
//   return (
//     <div className="text-white container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">AO Computer Tokenomics</h1>
//       <p className="mb-4">
//         AO Computer is a decentralized supercomputing platform built on the Arweave protocol. It introduces the AO token, designed to facilitate and incentivize computational tasks within its ecosystem.
//       </p>
//       <h2 className="text-2xl font-semibold mb-2">Token Supply and Distribution</h2>
//       <p className="mb-4">
//         <strong>Total Supply:</strong> The AO token has a fixed supply of 21 million tokens, mirroring Bitcoin's scarcity model.
//       </p>
//       <p className="mb-4">
//         <strong>Fair Launch:</strong> AO was launched without any presales, pre-mining, or preferential allocations, ensuring an equitable distribution from the outset.
//       </p>
//       <p className="mb-4">
//         <strong>Minting Mechanism:</strong> AO tokens are minted every five minutes at a monthly rate of 1.425% of the remaining supply. This approach results in a gradual decrease in the number of new tokens minted over time, following a four-year halving cycle similar to Bitcoin's.
//       </p>
//       <h2 className="text-2xl font-semibold mb-2">Distribution Breakdown</h2>
//       <p className="mb-4">
//         <strong>Arweave Token Holders:</strong> Approximately 36% of the total AO supply is allocated to Arweave (AR) token holders. This distribution rewards AR holders for their support and secures the underlying storage layer.
//       </p>
//       <p className="mb-4">
//         <strong>Bridging Assets:</strong> Around 64% of AO tokens are designated to incentivize the bridging of external assets into the AO ecosystem. This strategy aims to foster economic growth and liquidity within the platform.
//       </p>
//       <h2 className="text-2xl font-semibold mb-2">Economic Model</h2>
//       <p className="mb-4">
//         <strong>Incentivizing Computation:</strong> AO tokens are used to compensate participants who provide computational resources, enabling decentralized applications and processes to run efficiently.
//       </p>
//       <p className="mb-4">
//         <strong>Ecosystem Funding:</strong> Developers who attract users and assets to the AO platform can earn AO tokens, providing a sustainable revenue stream and encouraging the development of diverse applications.
//       </p>
//       <h2 className="text-2xl font-semibold mb-2">Token Lock-Up Period</h2>
//       <p className="mb-4">
//         <strong>Initial Non-Transferability:</strong> AO tokens remain non-transferable until approximately 15% of the total supply has been minted. This milestone is expected to be reached around early February 2025, ensuring a stable and secure initial phase for the network.
//       </p>
//       <h2 className="text-2xl font-semibold mb-2">Sources for AO Tokenomics</h2>
//       <ul className="list-disc list-inside mb-4">
//         <li>
//           <a href="https://mirror.xyz/0x1EE4bE8670E8Bd7E9E2E366F530467030BE4C840/-UWra0q0KWecSpgg2-c37dbZ0lnOMEScEEkabVm9qaQ" className="text-blue-500 hover:underline">
//             Economics of the AO Computer
//           </a>
//         </li>
//         <li>
//           <a href="https://pintu.co.id/en/academy/post/what-is-ao-computer" className="text-blue-500 hover:underline">
//             A Quick Guide to the AO Token
//           </a>
//         </li>
//       </ul>
//       <h2 className="text-2xl font-semibold mb-2">Relevant Videos</h2>
//       <p className="mb-4">
//         For a more in-depth understanding of Arweave's tokenomics, consider watching the following video:
//       </p>
//       <div className="relative" style={{ paddingTop: '56.25%' }}>
//         <iframe
//           className="absolute inset-0 w-full h-full"
//           src="https://www.youtube.com/embed/XJxe4ovuhqc"
//           title="Arweave's AO Token Launch: What You Need to Know"
//           frameBorder="0"
//           allowFullScreen
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default AOComputerTokenomics;

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
      <div className="markdown text-lg p-6 bg-black border border-gray-800 rounded-md w-full max-w-3xl text-justify">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {showLongVersion ? longContent : shortContent}
        </ReactMarkdown>
      </div>
      {/* Video Explanation Section */}
      {showLongVersion &&(
        <div className="w-full max-w-3xl mt-6">
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
      
    </main>
  );
};

export default AOComputerTokenomics;
