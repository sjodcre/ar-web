import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './app/page'
import Learn from './app/learn'
import BlockchainArweaveAO101 from './app/learn/arweave-ao-101'
import SocialImpact from './app/learn/social-impact'
import { Navbar } from "@/components/navbar"
import Chatbot from "@/components/chatbot"; // Import chatbot
import News from './app/community/news'
import AOComputerTokenomics from './app/learn/tokenomics/ao'
import ArweaveTokenomics from './app/learn/tokenomics/arweave'
import CommunityPage from './app/community/resource-hub'
import WarningBanner from './components/warning-banner'
import GetStarted from './app/developers/get-started'
import { Toaster } from "@/components/ui/sonner"
import AtomicAssets from './app/learn/atomic-assets'



function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="pt-16">
        <WarningBanner />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/social-impact" element={<SocialImpact />} />
          <Route path="/community/news" element={<News />} />
          <Route path="/learn/tokenomics/arweave" element={<ArweaveTokenomics />} />
          <Route path="/learn/tokenomics/ao" element={<AOComputerTokenomics />} />
          <Route path="/community/resource-hub" element={<CommunityPage />} />
          <Route path="/developers/:page" element={<GetStarted />} />
          <Route path="/developers/:page/:subpage" element={<GetStarted />} />
          <Route path="/developers/:page/:subpage/:subsubpage" element={<GetStarted />} />
          <Route path="/learn/blockchain-arweave-ao101" element={<BlockchainArweaveAO101 />} />
          <Route path="/learn/blockchain-arweave-ao101/:page" element={<BlockchainArweaveAO101 />} />
          <Route path="/learn/blockchain-arweave-ao101/:page/:subpage" element={<BlockchainArweaveAO101 />} />
          <Route path="/learn/blockchain-arweave-ao101/:page/:subpage/:subsubpage" element={<BlockchainArweaveAO101 />} />
          <Route path="/learn/atomic-assets" element={<AtomicAssets />} />
          <Route path="/learn/atomic-assets/:page" element={<AtomicAssets />} />
          <Route path="/learn/atomic-assets/:page/:subpage" element={<AtomicAssets />} />
          <Route path="/learn/atomic-assets/:page/:subpage/:subsubpage" element={<AtomicAssets />} />
          {/* <Route path="*" element={<h1 className="text-white text-center">404 Not Found</h1>} /> */}

        </Routes>
      </div>
      <Toaster />

      <Chatbot />
    </HashRouter>
  )
}

export default App
