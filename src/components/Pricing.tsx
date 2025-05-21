
import { Check } from 'lucide-react';

const Pricing = () => {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    "Acesso vitalício",
    "Grupo exclusivo no Telegram",
    "Atualizações grátis"
  ];

  return (
    <section id="pricing" className="section bg-gradient-to-b from-black to-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Preço e Condições</span>
          </h2>
          <p className="text-xl mb-8">
            Invista no seu futuro por apenas:
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-2xl bg-black/80 border border-primary/30 shadow-lg shadow-primary/10 relative overflow-hidden">
            {/* Price tag */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-300 mb-2">Valor único de</p>
              <h3 className="text-5xl md:text-6xl font-bold mb-2">R$497,00</h3>
              <p className="text-gray-300">ou até 12x de R$49,70</p>
            </div>

            {/* Benefits */}
            <div className="mb-8">
              <p className="font-semibold text-xl text-primary mb-4">Você receberá:</p>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-primary rounded-full p-1">
                      <Check className="text-black" size={16} />
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button 
                onClick={scrollToForm} 
                className="btn-primary w-full md:w-auto md:px-12"
              >
                Quero Garantir Minha Vaga
              </button>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
