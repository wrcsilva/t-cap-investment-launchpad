import { Mail } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <img src="/lovable-uploads/4b298216-a2c2-49bb-960d-82b3f4746254.png" alt="Trade Capital Logo" className="h-12 mb-4" />
            <p className="text-gray-400">
              © {currentYear} Trade Capital Financeiro
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a href="https://www.instagram.com/tradecapitalfinanceiro/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                Instagram: @tradecapitalfinanceiro
              </a>
            </div>

            <div className="flex items-center gap-2 text-gray-400">
              <Mail size={16} />
              <span>contato@tradecapital.com.br</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-center">
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-4">
            <a href="#" className="hover:text-primary transition-colors">Termos e Condições</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
          </div>
          <p className="text-sm">Desenvolvido com fé, estratégia e excelência.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;