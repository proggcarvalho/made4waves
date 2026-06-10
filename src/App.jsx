import { useState, useEffect } from 'react';
import Header from './components/Header';
import Marquee from './components/Marquee';
import Dashboard from './components/Dashboard';
import Spots from './components/Spots';
import Disclaimer from './components/Disclaimer';
import Contact from './components/Contact'; // <-- Importámos o Contact
import Footer from './components/Footer';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo(0, 0); 
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Adicionámos a linha do #contact aqui
  const renderContent = () => {
    if (hash === '#spots') return <Spots />;
    if (hash === '#disclaimer') return <Disclaimer />;
    if (hash === '#contact') return <Contact />; 
    return <Dashboard />;
  };

  return (
    <div className="font-sans text-zinc-900 bg-zinc-50 min-h-screen">
      <Header />
      <Marquee />
      
      {renderContent()}
      
      <Footer />
    </div>
  )
}