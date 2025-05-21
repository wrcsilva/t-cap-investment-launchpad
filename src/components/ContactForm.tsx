
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    experience: 'Iniciante'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Display success message
    toast({
      title: "Inscrição recebida!",
      description: "Entraremos em contato em breve.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      experience: 'Iniciante'
    });
  };

  return (
    <section id="contact-form" className="section bg-gradient-to-b from-secondary to-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Inscreva-se Agora</span>
          </h2>
          <p className="text-xl mb-8">
            Preencha o formulário abaixo para garantir sua vaga
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl bg-black/80 border border-primary/30 shadow-lg shadow-primary/10"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="seu.email@exemplo.com"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block mb-2 font-medium">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="experience" className="block mb-2 font-medium">
                  Nível de experiência
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-black/50 border border-gray-800 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2 group"
                >
                  Garantir Minha Vaga
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
