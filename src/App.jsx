import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer11';
import Testt from './pages/Testt/Testt';

function AppContent() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
      <Route path='/' exact element={<Home />} />
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

