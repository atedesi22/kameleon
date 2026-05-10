import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import Expertise from '../components/sections/Expertise';
import Explorer from '../components/sections/Explorer';
import Boutique from '../components/sections/Boutique';
import PodcastTeaser from '../components/sections/PodcastTeaser';

const LandingPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Section Accueil & Vision */}
      <section id="accueil">
        <Hero />
      </section>

      {/* Section Compétences : Gestion de projet, Entrepreneuriat, Innovation */}
      <Expertise />

      {/* Section Explorer : Travaux de Branding & Graphic Design */}
      <section id="explorer" className="bg-white">
        <Explorer />
      </section>

      {/* Section Boutique : Services & Créations */}
      <section id="boutique">
        <Boutique />
      </section>

      {/* Section Podcasts : Le cœur de l'infrastructure média avec décors virtuels */}
      <section id="podcasts" className="bg-gray-50">
        <PodcastTeaser />
      </section>

      {/* Section Contact / Call to Action Final */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8">Prêt à transformer votre prochain concept ?</h2>
          <button className="bg-black text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-indigo-600 transition-all transform hover:scale-105">
            Démarrer un projet
          </button>
        </div>
      </section>
    </motion.main>
  );
};

export default LandingPage;