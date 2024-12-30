import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Work from './pages/Works/Works'
import Contact from './pages/Contact/Contact';
import NavBar from './components/Navbar';
import Footer from './components/Footer11';
import Testt from './pages/Testt/Testt';

function AppContent() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/wos' exact element={<Work />} />
      <Route path='/contacts' exact element={<Contact />} />
      <Route path='/works' exact element={<Testt />} />
      </Routes>
      <Footer/>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

