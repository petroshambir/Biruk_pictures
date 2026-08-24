
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Hom';
import About from './pages/About';
import Price from './pages/Price';              
import Contact from './pages/Contact';         
import Welcome from './components/Welcome'; 
import Gallery from './components/Gallery'; 
import AdminLogin from './components/AdminLogin'; 
import AdminDashboard from './components/AdminDashboard'; 
import ClientSelection from './components/ClientSelection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/price" element={<Price />} />        
        <Route path="/contact" element={<Contact />} />    
        
        {/* ሓደ ኮይኑ ንኩሉ ዓይነት ጋለሪ ብቑዕ ዝዀነ Route */}
        {/* <Route path="/gallery/:category" element={<Gallery />} />  */}

        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-panel" element={<AdminDashboard />} />
        {/* <Route path="/client-selection" element={<ClientSelection />} /> */}
        <Route path="/client-selection" element={<ClientSelection />} />
<Route path="/gallery/:category" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;