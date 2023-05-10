import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from 'react-router-dom';

import About from './pages/About';
import Projects from './pages/Project';
import RootLayout from './pages/Root';
import Contact from './pages/ContactPage';
import MovieDetail from './pages/MovieDetail';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <Router>
      {' '}
      {/* Ensure the Router component is the top-level component */}
      <div className='App'>
        <Nav />

        <Routes>
          {' '}
          {/* Wrap the Routes */}
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<MovieDetail />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
