
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "O que é o T-Cap?",
      answer: "Uma solução de investimento com metodologia estruturada para multiplicar capital com controle de risco."
    },
    {
      question: "Preciso ter experiência?",
      answer: "Não. O T-Cap foi desenhado para funcionar tanto para iniciantes quanto para investidores experientes."
    },
    {
      question: "Como recebo acesso?",
      answer: "Após a compra, você receberá um e-mail com todos os dados de acesso à plataforma."
    },
    {
      question: "Quanto tempo tenho de acesso?",
      answer: "O acesso é vitalício. Uma vez adquirido o T-Cap, você terá acesso permanente a todos os conteúdos e atualizações."
    },
    {
      question: "Posso acessar de qualquer dispositivo?",
      answer: "Sim, a plataforma é responsiva e pode ser acessada de computadores, tablets e smartphones."
    }
  ];

  return (
    <section id="faq" className="section bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-800 rounded-lg overflow-hidden bg-black/50 card-hover"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium">
                    {faq.question}
                  </span>
                  <span className="text-primary">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
