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
import Footer from './components/Footer';
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

  const isHomepage = location.pathname === '/';

  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<HeroPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<MovieDetail />} />
        <Route path='/questions' element={<FaqSection />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      {!isHomepage && <Footer />}
    </div>
  );
}

export default App;
