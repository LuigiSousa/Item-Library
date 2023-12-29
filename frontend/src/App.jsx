import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Home from './components/HomePage/Home'
import Library from './components/Library'

function App() {

  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
