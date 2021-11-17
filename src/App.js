import './App.css';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contactUs" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
