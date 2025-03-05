import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './app/page'
import Learn from './app/learn'
import BlockchainArweaveAO101 from './app/learn/arweave-ao-101'
import AtomicAssets from './app/learn/atomic-assets'
import SocialImpact from './app/learn/social-impact'
import { Navbar } from "@/components/navbar"
import Chatbot from "@/components/chatbot"; // Import chatbot
import News from './app/community/news'
import AOComputerTokenomics from './app/learn/tokenomics/ao'
import ArweaveTokenomics from './app/learn/tokenomics/arweave'
import AtomicAsset from './app/learn/atomic-asset'
import CommunityPage from './app/community/resource-hub'


function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="pt-16">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/blockchain-arweave-ao101" element={<BlockchainArweaveAO101 />} />
          <Route path="/learn/atomic-assets" element={<AtomicAssets />} />
          <Route path="/learn/social-impact" element={<SocialImpact />} />
          <Route path="/community/news" element={<News />} />
          <Route path="/learn/tokenomics/arweave" element={<ArweaveTokenomics />} />
          <Route path="/learn/tokenomics/ao" element={<AOComputerTokenomics />} />
          <Route path = "/learn/atomic-asset" element={<AtomicAsset />} />
          <Route path = "/community/resource-hub" element = {<CommunityPage />} />
        </Routes>
      </div>
      <Chatbot />
    </HashRouter>
  )
}

export default App
