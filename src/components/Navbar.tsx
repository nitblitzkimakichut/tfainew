import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetStarted = () => {
    window.open('https://calendly.com/shivanshbajaj053/consultation-call', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            TITANFLOW AI
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-blue-400 transition-colors duration-300"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="nav-link text-white hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link text-white hover:text-blue-400 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="nav-link text-white hover:text-blue-400 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <button
              onClick={handleGetStarted}
              className="scale-button px-6 py-2 rounded-lg text-white font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="nav-link text-white hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link text-white hover:text-blue-400 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="nav-link text-white hover:text-blue-400 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <button
              onClick={handleGetStarted}
              className="scale-button px-6 py-2 rounded-lg text-white font-semibold w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}