import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & UI
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import LandingPage from './pages/LandingPage';
import ExplorerPage from './pages/Explorer'; // Version détaillée de la galerie
import StudioPage from './pages/Studio';     // Le module Podcast/Live
import BoutiquePage from './pages/Boutique'; // Le Shop complet

// Hook pour gérer le scroll en haut lors des changements de page
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
        
        {/* Gestionnaire de défilement */}
        <ScrollToTop />

        {/* Barre de navigation fixe */}
        <Navbar />

        {/* Conteneur principal avec gestion des animations de transition */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Route principale : Landing Page (Hero, Expertise, Teasers) */}
              <Route path="/" element={<LandingPage />} />

              {/* Page Explorer : Portfolio complet filtrable */}
              <Route path="/explorer" element={<ExplorerPage />} />

              {/* Page Boutique : Services de consulting et produits digitaux */}
              <Route path="/boutique" element={<BoutiquePage />} />

              {/* Page Studio : Le module Podcast avec décors virtuels */}
              <Route path="/podcasts" element={<StudioPage />} />

              {/* Route 404 - Optionnelle */}
              <Route path="*" element={
                <div className="h-screen flex items-center justify-center flex-col">
                  <h1 className="text-9xl font-black text-slate-100">404</h1>
                  <p className="text-xl font-medium -mt-10">Espace introuvable.</p>
                  <a href="/" className="mt-6 text-indigo-600 font-bold underline">Retourner au studio</a>
                </div>
              } />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Pied de page */}
        <Footer />

      </div>
    </Router>
  );
}
