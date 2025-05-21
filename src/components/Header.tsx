
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToForm = () => {
    const form = document.getElementById('contact-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full absolute top-0 left-0 z-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/4b298216-a2c2-49bb-960d-82b3f4746254.png" 
            alt="Trade Capital Logo" 
            className="h-10" 
          />
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-white p-2" 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`${isMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-black/95 p-6' : 'hidden'} md:flex md:items-center md:relative md:bg-transparent md:p-0 gap-6`}>
          <a href="#about" className="text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          <a href="#features" className="text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Benefícios</a>
          <a href="#testimonials" className="text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
          <a href="#pricing" className="text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Preços</a>
          <a href="#faq" className="text-white hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>FAQ</a>
          <button 
            onClick={scrollToForm} 
            className="bg-primary hover:bg-primary-medium text-black font-medium px-4 py-2 rounded-md transition-colors"
          >
            Começar agora
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
