import Home from './app/page'
import { HashRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
  <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  </>)
}

export default App
