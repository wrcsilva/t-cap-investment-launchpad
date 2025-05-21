
import { Check } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="section bg-black py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto p-8 rounded-2xl border border-primary/30 bg-black/80 relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/4 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center relative">
                <div className="absolute inset-1 rounded-full border-2 border-dashed border-primary animate-spin-slow"></div>
                <div className="bg-primary rounded-full p-2">
                  <Check className="text-black w-10 h-10" />
                </div>
              </div>
            </div>
            
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold mb-4">Satisfação Garantida ou seu dinheiro de volta em até 7 dias</h3>
              <p className="text-xl mb-2">
                Seu risco é <span className="text-primary font-bold">ZERO</span>.
              </p>
              <p className="text-gray-300">
                Entre, teste, e só continue se fizer sentido pra você. Se não estiver 100% satisfeito, devolvemos seu investimento integralmente.
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
