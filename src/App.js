import './App.css';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AboutPage from './components/pages/AboutPage';
import ServicePage from './components/pages/ServicePage';
import BlogPage from './components/pages/BlogPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
