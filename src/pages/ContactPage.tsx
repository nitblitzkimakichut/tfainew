import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Phone } from 'lucide-react';

export default function ContactPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach(element => {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach(element => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  const handleDemoClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScQGKZdrg4reuzBVDkXFlm0uDAZPHegXbFEL1v9pwz4KpHSSQ/viewform?usp=sharing', '_blank');
  };

  return (
    <div className="min-h-screen gradient-bg text-white">
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`
        }}
      />
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Contact Us
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info & Demo Button */}
            <div className="space-y-8">
              <div className="card-gradient p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4">Get Your Free Demo</h2>
                <button
                  onClick={handleDemoClick}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Request Demo
                  <Phone className="w-4 h-4" />
                </button>
              </div>

              <div className="card-gradient p-8 rounded-2xl">
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">Name:</strong> Shivansh Bajaj
                  </p>
                  <p>
                    <strong className="text-white">Phone:</strong>{' '}
                    <a href="tel:+917347213123" className="hover:text-blue-400 transition-colors duration-300">
                      +91 7347213123
                    </a>
                  </p>
                  <p>
                    <strong className="text-white">Email:</strong>{' '}
                    <a href="mailto:shivansh@titanflowai.com" className="hover:text-blue-400 transition-colors duration-300">
                      shivansh@titanflowai.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="card-gradient p-8 rounded-2xl">
              <h2 className="text-2xl font-semibold mb-6">Schedule a Consultation</h2>
              <div className="calendly-inline-widget" data-url="https://calendly.com/shivanshbajaj053/consultation-call" style={{ minWidth: '320px', height: '700px' }}></div>
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}