
import { Check } from 'lucide-react';

const About = () => {
  const features = [
    "Estratégias testadas por especialistas",
    "Ideal para iniciantes e experientes",
    "Acompanhamento personalizado",
    "Acesso a oportunidades exclusivas do mercado"
  ];

  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Sobre o T-Cap</span>
          </h2>
          <p className="text-xl mb-8">
            O <strong className="text-primary">T-Cap</strong> é um produto financeiro desenvolvido pela Trade Capital que oferece uma maneira inteligente de potencializar seus investimentos, combinando <strong className="text-primary">segurança, estratégia e rentabilidade</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-black/50 border border-gray-800 card-hover"
            >
              <div className="mt-1 bg-primary rounded-full p-1">
                <Check className="text-black" size={20} />
              </div>
              <div>
                <p className="text-lg font-medium text-white">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
