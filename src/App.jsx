
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from './pages/Home/Home';

function App() {

  return (
  <>
    <Router>
      <Routes>
      <Route path="/" element={<Home/> } />
      </Routes>
    </Router>
  </>
   
  )
}

export default App
