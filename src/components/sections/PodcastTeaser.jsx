import React from 'react';
import { Mic, Video, Users, ArrowRight } from 'lucide-react';

const PodcastTeaser = () => {
  return (
    <section id="podcasts" className="py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Texte et Arguments */}
          <div>
            <h2 className="text-indigo-600 font-bold uppercase tracking-widest mb-4">
              Kameleon Studio & Podcast
            </h2>
            <h3 className="text-5xl font-black text-slate-900 leading-tight mb-8">
              La distance n'existe plus, seul le <span className="text-gray-400">décor</span> compte.
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Que vos invités soient à Paris, Montréal ou Douala, rejoignez-les dans un studio virtuel 3D conçu sur mesure. Une immersion totale pour vos adhérents à l'étranger.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-indigo-600"><Video size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Plateaux TV Virtuels</h4>
                  <p className="text-sm text-slate-500">Changez d'ambiance selon votre mood : loft, salon privé ou salle d'innovation.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-xl shadow-sm mr-4 text-indigo-600"><Users size={20} /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Multi-Invités Distants</h4>
                  <p className="text-sm text-slate-500">Intégrez vos collaborateurs étrangers comme s'ils étaient dans la même pièce.</p>
                </div>
              </div>
            </div>

            <button className="group flex items-center bg-black text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-indigo-600">
              Explorer le Studio <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>

          {/* Visuel du "Studio" - Simulation de l'interface Kameleon */}
          <div className="relative">
            <div className="bg-slate-900 rounded-3xl p-4 shadow-2xl aspect-video relative overflow-hidden border-8 border-slate-800">
              {/* Simulation de décor virtuel en background */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40"></div>
              
              {/* Simulation d'interface régie */}
              <div className="relative h-full flex flex-col justify-between p-4">
                <div className="flex justify-between items-start">
                  <span className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded">LIVE</span>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md"></div>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md"></div>
                  </div>
                </div>
                
                <div className="flex justify-center space-x-4">
                   <div className="w-32 h-40 bg-slate-800/80 backdrop-blur-xl rounded-xl border border-white/10 flex items-center justify-center text-white/20"><Mic size={32} /></div>
                   <div className="w-32 h-40 bg-slate-800/80 backdrop-blur-xl rounded-xl border border-white/10 flex items-center justify-center text-white/20"><Mic size={32} /></div>
                </div>
              </div>
            </div>
            {/* Décoration design */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PodcastTeaser;