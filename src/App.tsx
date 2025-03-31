import React, { useEffect, useState } from 'react';
import { Target, Cpu, CheckSquare, RefreshCw, MessageSquare, Phone, Users, Bot, Inbox, Database, TrendingUp, LineChart } from 'lucide-react';
import Navbar from './components/Navbar';

function App() {
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

  const handleCalendlyClick = () => {
    window.open('https://calendly.com/shivanshbajaj053/consultation-call', '_blank');
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
      
      {/* Hero Section */}
      <header className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 leading-tight">
            Transform Your Dental Practice with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-up animate-delay-100">
            Revolutionize patient care and streamline your dental practice with cutting-edge AI automation solutions
          </p>
          <div className="max-w-md mx-auto mb-8 animate-fade-up animate-delay-200">
            <button
              onClick={handleDemoClick}
              className="scale-button w-full py-4 px-8 rounded-lg text-white font-semibold flex items-center justify-center gap-2"
            >
              Get Your Free Demo
              <Phone className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Video Section 1 */}
      <section className="container mx-auto px-4 py-16">
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-fade-up">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dkX1Mrq3uno"
            title="Dental AI Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl"
          ></iframe>
        </div>
      </section>

      {/* How TitanFlow Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 animate-fade-up">
          How TitanFlow Works
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="card-gradient p-8 rounded-2xl text-center animate-fade-up animate-delay-100">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Attracts</h3>
            <p className="text-gray-300">Leverage proven lead funnels to capture and maintain the attention of your potential clients.</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl text-center animate-fade-up animate-delay-200">
            <Cpu className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Converts</h3>
            <p className="text-gray-300">Craftily automate client outreach to create seamless appointment bookings experiences.</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl text-center animate-fade-up animate-delay-300">
            <CheckSquare className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Confirms</h3>
            <p className="text-gray-300">Handle interactions to follow up and address client concerns, ensuring that their needs are met.</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl text-center animate-fade-up animate-delay-300">
            <RefreshCw className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Repeats</h3>
            <p className="text-gray-300">Manage data for future engagements and appointments to build customer loyalty.</p>
          </div>
        </div>
      </section>

      {/* Automation & AI Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 animate-fade-up">
          Automation & AI Is Our Specialty
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-gradient p-8 rounded-2xl animate-fade-up animate-delay-100">
            <MessageSquare className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Seamless Check-In</h3>
            <p className="text-gray-300">Proven funnels designed not just to convert leads, but to attract and secure your ideal clients.</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl animate-fade-up animate-delay-200">
            <Bot className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">AI Voice Calling Agent</h3>
            <p className="text-gray-300">Send 10,000 calls per minute with advanced automation and scalable cloud technology for instant lead outreach.</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl animate-fade-up animate-delay-300">
            <Users className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Lead Funnels</h3>
            <p className="text-gray-300">Proven funnels designed not just to convert leads, but to attract and secure your ideal clients.</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl animate-fade-up animate-delay-100">
            <RefreshCw className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Follow-Up System</h3>
            <p className="text-gray-300">Automated email, SMS, phone and voicemail to spark conversations and decrease no-show rate.</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl animate-fade-up animate-delay-200">
            <Inbox className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Integrated Messaging</h3>
            <p className="text-gray-300">Streamline all communication into one inbox, combining Messenger, Email, SMS, Webchat, Google Messaging, and more.</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl animate-fade-up animate-delay-300">
            <Database className="w-8 h-8 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">CRM Platform</h3>
            <p className="text-gray-300">Easily manage, import and export leads, with unlimited storage for contact.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 animate-fade-up">
          What Dental Professionals Say
        </h2>
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-fade-up animate-delay-100">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/n0AMuRYvSzs"
            title="Client Testimonials"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-2xl"
          ></iframe>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 animate-fade-up">
          Performance Metrics
        </h2>
        <div className="card-gradient p-8 rounded-2xl max-w-4xl mx-auto animate-fade-up">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left text-lg font-semibold">Metric</th>
                  <th className="py-4 px-6 text-left text-lg font-semibold">Human Receptionist</th>
                  <th className="py-4 px-6 text-left text-lg font-semibold">AI Receptionist</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Response Time</td>
                  <td className="py-4 px-6 text-gray-300">2-5 minutes (during work hours)</td>
                  <td className="py-4 px-6 text-cyan-400">Instant (24/7)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">After-Hours Lead Capture</td>
                  <td className="py-4 px-6 text-gray-300">0%</td>
                  <td className="py-4 px-6 text-cyan-400">100%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Follow-Up Effectiveness</td>
                  <td className="py-4 px-6 text-gray-300">20%</td>
                  <td className="py-4 px-6 text-cyan-400">85%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Monthly Appointments</td>
                  <td className="py-4 px-6 text-gray-300">120</td>
                  <td className="py-4 px-6 text-cyan-400">175</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6">Monthly Revenue</td>
                  <td className="py-4 px-6 text-gray-300">$144,000</td>
                  <td className="py-4 px-6 text-cyan-400">$210,000</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Cost Per Month</td>
                  <td className="py-4 px-6 text-gray-300">$3,500</td>
                  <td className="py-4 px-6 text-cyan-400">$800</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 animate-fade-up">
          Key Takeaways
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card-gradient p-8 rounded-2xl animate-fade-up animate-delay-100">
            <TrendingUp className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">46% More Appointments</h3>
            <p className="text-gray-300">AI receptionists increased appointment bookings by 46%, directly boosting revenue through improved conversion rates and 24/7 availability.</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl animate-fade-up animate-delay-200">
            <LineChart className="w-12 h-12 text-cyan-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">5x ROI on Investment</h3>
            <p className="text-gray-300">Significant cost savings on receptionist salaries combined with increased revenue resulted in a 5x return on AI investment.</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl animate-fade-up animate-delay-300">
            <Bot className="w-12 h-12 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">100% After-Hours Coverage</h3>
            <p className="text-gray-300">AI captured after-hours inquiries that would have been lost with a human receptionist, ensuring no opportunity is missed.</p>
          </div>
          <div className="card-gradient p-8 rounded-2xl animate-fade-up animate-delay-400">
            <Users className="w-12 h-12 text-cyan-400 mb-6" />
            <h3 className="text-xl font-bold mb-4">85% Follow-Up Rate</h3>
            <p className="text-gray-300">AI significantly improved lead nurturing and follow-ups, leading to higher conversion rates and better patient engagement.</p>
          </div>
        </div>
      </section>

      {/* Results Guarantee Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="card-gradient p-12 rounded-2xl max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            Our 90-Day Guarantee
          </h2>
          <div className="flex flex-col gap-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-4 text-left animate-fade-up animate-delay-100">
              <CheckSquare className="w-8 h-8 text-green-400 flex-shrink-0" />
              <p className="text-gray-300 text-lg">Attract high-value patients within 90 days</p>
            </div>
            <div className="flex items-center gap-4 text-left animate-fade-up animate-delay-200">
              <CheckSquare className="w-8 h-8 text-green-400 flex-shrink-0" />
              <p className="text-gray-300 text-lg">Increase your practice revenue significantly</p>
            </div>
            <div className="flex items-center gap-4 text-left animate-fade-up animate-delay-300">
              <CheckSquare className="w-8 h-8 text-green-400 flex-shrink-0" />
              <p className="text-gray-300 text-lg">Complete money-back guarantee if we don't deliver results</p>
            </div>
          </div>
          <button
            onClick={handleCalendlyClick}
            className="scale-button py-4 px-8 rounded-lg text-white font-semibold inline-flex items-center gap-2 animate-fade-up animate-delay-300"
          >
            Get Started Now
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;