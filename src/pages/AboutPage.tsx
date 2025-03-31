import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function AboutPage() {
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
      
      {/* Founder Section */}
      <section className="container mx-auto px-4 py-32">
        <div className="card-gradient p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400">
              <img
                src="https://i.ibb.co/hC4GvVv/474443595-2134101647004489-6571527664473807302-n.jpg"
                alt="Shivansh Bajaj"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Meet Our Founder
              </h2>
              <h3 className="text-xl font-semibold mb-2">Shivansh Bajaj</h3>
              <p className="text-gray-300 mb-4">
                Entrepreneur and AI Expert with a passion for revolutionizing healthcare through artificial intelligence. With extensive experience in AI implementation and automation, Shivansh has helped numerous dental practices transform their operations and patient care through cutting-edge technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}