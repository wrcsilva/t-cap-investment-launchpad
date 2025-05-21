
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Com o T-Cap, finalmente entendi como investir com confiança e clareza. Lucros reais, sem promessas mágicas.",
      author: "João Silva"
    },
    {
      quote: "O melhor conteúdo prático que já vi no mercado financeiro. Vale cada centavo.",
      author: "Camila Fernandes"
    },
    {
      quote: "Após 3 meses aplicando a metodologia, consegui resultados que não imaginava alcançar tão rapidamente.",
      author: "Ricardo Mendes"
    }
  ];

  return (
    <section id="testimonials" className="section bg-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O Que Estão <span className="gradient-text">Dizendo</span>
          </h2>
          <p className="text-xl mb-8">
            Depoimentos de quem já transformou sua jornada de investimentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-black border border-gray-800 card-hover"
            >
              <div className="text-4xl font-bold text-primary mb-4">
                "
              </div>
              <p className="text-gray-300 mb-6 italic">
                {testimonial.quote}
              </p>
              <p className="font-medium text-white">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
