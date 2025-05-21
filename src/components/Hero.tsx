
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary-dark opacity-80"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(0, 255, 127, 0.1) 2px, transparent 0)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container relative z-10 text-center px-4 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Potencialize seus Investimentos com o <span className="gradient-text">T-Cap</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Transforme seu capital com uma estratégia estruturada, acessível e segura.
            </p>
            <button 
              onClick={scrollToForm} 
              className="btn-primary flex items-center gap-2 group"
            >
              Quero Começar Agora
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </button>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary-medium to-primary-dark rounded-full blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-black rounded-full p-2 border border-primary/30">
                <img 
                  src="/lovable-uploads/7bbd8417-8c08-48d9-962f-f6c6be29ef40.png" 
                  alt="T-Cap Logo" 
                  className="w-full max-w-xs mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
