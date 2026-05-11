import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { id: 1, title: "L'Éveil Startup", category: "Innovation", mood: "Minimaliste", image: "https://via.placeholder.com/600x800" },
  { id: 2, title: "Identity Flux", category: "Graphic Design", mood: "Brutaliste", image: "https://via.placeholder.com/600x400" },
  { id: 3, title: "Sprint Master", category: "Gestion de Projet", mood: "Corpo", image: "https://via.placeholder.com/600x600" },
];

const Explorer = () => {
  const [filter, setFilter] = useState('Tous');

  const filteredProjects = filter === 'Tous' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="explorer" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-2">Curiosités & Travaux</h2>
            <h3 className="text-5xl font-black text-slate-900">Explorer l'univers.</h3>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
            {['Tous', 'Innovation', 'Graphic Design', 'Gestion de Projet'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full border text-sm font-bold transition-all ${filter === cat ? 'bg-black text-white border-black' : 'hover:border-black text-slate-600'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="mb-8 break-inside-avoid group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-100">
                  <img src={project.image} alt={project.title} className="w-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold border border-white px-6 py-2 rounded-full">Voir le projet</span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">{project.mood}</span>
                  <h4 className="text-xl font-bold text-slate-800">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// CETTE LIGNE EST ESSENTIELLE :
export default Explorer;