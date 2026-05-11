import React from 'react';
import { ShoppingBag, Zap, PenTool, BarChart } from 'lucide-react';

const offerings = [
  {
    id: 1,
    type: "Service",
    title: "Stratégie d'Innovation",
    price: "À partir de 150k CFA",
    icon: <Zap className="w-6 h-6" />,
    desc: "Accompagnement complet pour transformer vos idées en business modèles viables."
  },
  {
    id: 2,
    type: "Digital",
    title: "Brand Identity Kit",
    price: "75k CFA",
    icon: <PenTool className="w-6 h-6" />,
    desc: "Un ensemble complet de templates (logos, fonts, couleurs) pour votre nouvelle marque."
  },
  {
    id: 3,
    type: "Service",
    title: "Audit de Gestion de Projet",
    price: "À partir de 100k CFA",
    icon: <BarChart className="w-6 h-6" />,
    desc: "Analyse de vos processus actuels et mise en place d'outils d'optimisation."
  }
];

const Boutique = () => {
  return (
    <section id="boutique" className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-indigo-400 font-bold uppercase tracking-widest mb-2">Shop & Services</h2>
            <h3 className="text-5xl font-black">Investir dans votre vision.</h3>
          </div>
          <div className="hidden md:block">
            <ShoppingBag className="w-12 h-12 text-gray-700" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((item) => (
            <div key={item.id} className="group relative bg-zinc-900 p-10 rounded-3xl border border-zinc-800 hover:border-indigo-500 transition-all duration-500">
              <div className="mb-8 text-indigo-500 bg-indigo-500/10 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{item.type}</span>
              <h4 className="text-2xl font-bold mt-2 mb-4">{item.title}</h4>
              <p className="text-zinc-400 mb-8 leading-relaxed">{item.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-black text-xl">{item.price}</span>
                <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-indigo-500 hover:text-white transition-colors">
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Boutique;