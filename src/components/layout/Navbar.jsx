import React from 'react';

export default function  Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-black tracking-tighter text-black">
          KAMELEON<span className="text-indigo-600">.</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest text-gray-600">
          <a href="#accueil" className="hover:text-black transition-colors">Accueil</a>
          <a href="#explorer" className="hover:text-black transition-colors">Explorer</a>
          <a href="#boutique" className="hover:text-black transition-colors">Boutique</a>
          <a href="#podcasts" className="hover:text-black transition-colors">Podcasts</a>
        </div>

        {/* CTA */}
        <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-600 transition-all">
          Collaborer
        </button>
      </div>
    </nav>
  );
};