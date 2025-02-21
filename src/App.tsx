import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './app/page'
import Learn from './app/learn'
import BlockchainArweaveAO101 from './app/learn/blockchain-arweave-ao101'
import AtomicAssets from './app/learn/atomic-assets'
import SocialImpact from './app/learn/social-impact'
import { Navbar } from "@/components/navbar"
import Chatbot from "@/components/chatbot"; // Import chatbot


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
        </Routes>
      </div>
      <Chatbot />
    </HashRouter>
  )
}

export default App
