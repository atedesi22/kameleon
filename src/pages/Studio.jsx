import React from 'react';
import { Video, Mic, Monitor, Users } from 'lucide-react';

const StudioPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-black mb-2 uppercase">Kameleon Studio</h1>
            <p className="text-gray-500 font-medium">Infrastructure de diffusion média pour créateurs visionnaires.</p>
          </div>
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold flex items-center animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span> LIVE
            </button>
          </div>
        </div>

        {/* Espace de travail de la régie (Placeholder) */}
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 bg-black rounded-3xl aspect-video flex items-center justify-center text-zinc-700 overflow-hidden relative border-8 border-white shadow-2xl">
            <Video size={80} strokeWidth={1} />
            <div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs font-bold">
              PRÉVISUALISATION DU DÉCOR VIRTUEL
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4 flex items-center text-sm uppercase tracking-wider text-gray-400">
                <Monitor className="mr-2 w-4 h-4" /> Décors Disponibles
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square bg-gray-100 rounded-xl hover:ring-2 ring-indigo-600 cursor-pointer transition-all"></div>
                <div className="aspect-square bg-gray-100 rounded-xl hover:ring-2 ring-indigo-600 cursor-pointer transition-all"></div>
                <div className="aspect-square bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs">
                  + Upload
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="font-bold mb-4 flex items-center text-sm uppercase tracking-wider text-gray-400">
                <Users className="mr-2 w-4 h-4" /> Invités (Remote)
              </h3>
              <p className="text-xs text-gray-400">Aucun invité connecté pour le moment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioPage;