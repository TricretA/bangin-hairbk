import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home setPage={setCurrentPage} />;
      case Page.ABOUT:
        return <About />;
      case Page.SERVICES:
        return <Services />;
      case Page.GALLERY:
        return <Gallery />;
      case Page.CONTACT:
        return <Contact />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-cream text-brand-dark selection:bg-brand-softpink selection:text-brand-mauve">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      <main className="flex-grow animate-fadeIn">
        {renderPage()}
      </main>
      <Footer setPage={setCurrentPage} />
    </div>
  );
};

export default App;