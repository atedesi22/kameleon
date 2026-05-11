import React from 'react';
// IMPORTATION DES ICÔNES MANQUANTES
import { Instagram, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Colonne 1: Brand & Bio */}
          <div className="md:col-span-2">
            <div className="text-2xl font-black tracking-tighter mb-6">
              KAMELEON<span className="text-indigo-600">.</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed mb-8">
              Expertise hybride en gestion de projet, innovation et brand design. 
              Créer des écosystèmes qui marquent l'époque et connectent les idées.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Colonne 2: Navigation Rapide */}
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-gray-400">Navigation</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#explorer" className="hover:text-indigo-600 transition-colors">Explorer</a></li>
              <li><a href="#boutique" className="hover:text-indigo-600 transition-colors">Boutique</a></li>
              <li><a href="#podcasts" className="hover:text-indigo-600 transition-colors text-slate-800">Podcasts</a></li>
              <li><a href="/studio" className="hover:text-indigo-600 transition-colors flex items-center">Accès Studio <ArrowUpRight size={14} className="ml-1" /></a></li>
            </ul>
          </div>

          {/* Colonne 3: Contact & Localisation */}
          <div>
            <h4 className="font-bold uppercase text-xs tracking-widest mb-6 text-gray-400 text-slate-800">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2 text-indigo-600" /> hello@kameleon.studio
              </li>
              <li className="text-gray-500">
                Douala, Cameroun<br />
                Disponible à l'international.
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright finale */}
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400">
          <p>© {currentYear} KAMELEON — Designed for Innovation</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-black transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-black transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;