export default function Expertise() {
  const skills = [
    { title: "Gestion de Projet", desc: "Pilotage stratégique de la conception au déploiement." },
    { title: "Entrepreneuriat", desc: "Accompagnement à l'innovation et business design." },
    { title: "Brand Design", desc: "Création d'identités visuelles percutantes et durables." }
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {skills.map((skill, index) => (
          <div key={index} className="group border-t-2 border-black pt-8 hover:bg-white hover:p-8 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
            <p className="text-gray-500">{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};