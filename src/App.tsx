import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './app/page'
import Learn from './app/learn'
import ArweaveAO101 from './app/learn/arweave-ao-101'
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
import RootLayout from './components/layout/RootLayout'
import Footer from './components/footer'
import ExampleDocPage from './app/example-doc-page'
import ScrollToTop from './components/ScrollToTop'
import Terms from './app/legal/Terms'
import Privacy from './app/legal/Privacy'
import Cookies from './app/legal/Cookies'




function App() {
  return (
    <RootLayout>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <div className="pt-16">
          {/* <WarningBanner /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/cookies" element={<Cookies />} />
            <Route path="/test" element={<ExampleDocPage />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/social-impact" element={<SocialImpact />} />
            <Route path="/community/news" element={<News />} />
            <Route path="/learn/tokenomics/arweave" element={<ArweaveTokenomics />} />
            <Route path="/learn/tokenomics/ao" element={<AOComputerTokenomics />} />
            <Route path="/community/resource-hub" element={<CommunityPage />} />
            <Route path="/developers/:page" element={<GetStarted />} />
            <Route path="/developers/:page/:subpage" element={<GetStarted />} />
            <Route path="/developers/:page/:subpage/:subsubpage" element={<GetStarted />} />
            <Route path="/learn/arweave-ao-101" element={<ArweaveAO101 />} />
            <Route path="/learn/arweave-ao-101/:page" element={<ArweaveAO101 />} />
            <Route path="/learn/arweave-ao-101/:page/:subpage" element={<ArweaveAO101 />} />
            <Route path="/learn/arweave-ao-101/:page/:subpage/:subsubpage" element={<ArweaveAO101 />} />
            <Route path="/learn/atomic-assets" element={<AtomicAssets />} />
            <Route path="/learn/atomic-assets/:page" element={<AtomicAssets />} />
            <Route path="/learn/atomic-assets/:page/:subpage" element={<AtomicAssets />} />
            <Route path="/learn/atomic-assets/:page/:subpage/:subsubpage" element={<AtomicAssets />} />
            {/* <Route path="*" element={<h1 className="text-white text-center">404 Not Found</h1>} /> */}

          </Routes>
        </div>
        <Toaster />

        <Chatbot />
        <Footer />
      </BrowserRouter>
    </RootLayout>
  )
}

export default App
