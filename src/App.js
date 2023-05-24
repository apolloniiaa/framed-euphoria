import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Project';
import Contact from './pages/ContactPage';
import MovieDetail from './pages/MovieDetail';
import Nav from './components/Nav';
import FaqSection from './components/FaqSection';
import HeroPage from './pages/HeroPage';
import './App.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  console.log(location);
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/home' element={<HeroPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<MovieDetail />} />
        <Route path='/questions' element={<FaqSection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<HeroPage />} index />
      </Routes>
    </div>
  );
}

export default App;
