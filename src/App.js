import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Project';
import RootLayout from './pages/Root';
import Contact from './pages/ContactPage';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <About /> },
      { path: '/projects', element: <Projects /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
