import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Apply from './components/pages/Apply';
import Exhibition from './components/pages/Exhibition';
import About from './components/pages/About';
import './App.css';
import ExhibitionPhoto from './components/ExhibitionPhoto';
import SliderDetail from './components/SliderDetail';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/about" element={<About />} />
        <Route path="/exhibitionPhoto" element={<ExhibitionPhoto />} />
        <Route path="/projectdetail/:year/:index" element={<SliderDetail />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
