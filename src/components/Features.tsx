
const Features = () => {
  const modules = [
    {
      number: "01",
      title: "Introdução à Estratégia T-Cap",
      description: "Aprenda os fundamentos e conceitos básicos da nossa estratégia financeira comprovada."
    },
    {
      number: "02",
      title: "Gerenciamento de Risco e Capital",
      description: "Domine as técnicas para proteger e maximizar seu capital com regras claras."
    },
    {
      number: "03",
      title: "Acesso à Plataforma T-Cap",
      description: "Ferramenta completa com análises, alertas e recomendações em tempo real."
    },
    {
      number: "04",
      title: "Suporte e Acompanhamento Pessoal",
      description: "Tire todas suas dúvidas com nossa equipe de especialistas dedicada."
    },
    {
      number: "05",
      title: "Bônus: Mentorias ao Vivo",
      description: "Sessões exclusivas para aprofundar conhecimentos e realizar análises em grupo."
    }
  ];

  return (
    <section id="features" className="section bg-gradient-to-b from-secondary to-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O Que Você Vai <span className="gradient-text">Receber</span>
          </h2>
          <p className="text-xl mb-4">
            Formato 100% online – Acesso imediato após inscrição
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-black/40 border border-gray-800 flex flex-col card-hover"
            >
              <div className="text-4xl font-bold text-primary mb-4">
                {module.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{module.title}</h3>
              <p className="text-gray-300 flex-grow">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
