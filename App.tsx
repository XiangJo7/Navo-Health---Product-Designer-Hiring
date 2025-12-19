
import React, { useEffect, useState } from 'react';
import { SignalInterpretation } from './components/SignalInterpretation';
import { RegionalMap } from './components/RegionalMap';
import { Mail, Activity, Users, Globe, MapPin, PenTool } from 'lucide-react';

const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number; direction?: 'up' | 'none' }> = ({ 
  children, 
  delay = 0,
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const translateClass = direction === 'up' ? (isVisible ? 'translate-y-0' : 'translate-y-4') : '';

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${translateClass}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-light selection:bg-teal-100 selection:text-teal-900 pb-12 bg-[#F7F8F6]">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F7F8F6]/80 backdrop-blur-md border-b border-slate-200/40">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-teal-600 rounded-[2px]"></div>
            <span className="font-semibold text-slate-900 tracking-tight text-[10px] uppercase">Navo Health &bull; 2025</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
             <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">Hiring: First Designer</span>
             <a 
              href="mailto:joshua.yim@navo.health"
              className="text-[9px] font-bold uppercase tracking-wider bg-slate-900 text-white px-3.5 py-1.5 rounded hover:bg-slate-800 transition-all shadow-sm"
            >
              Apply
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 waveform-bg" id="mission">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <span className="text-teal-600 font-bold tracking-[0.2em] text-[8px] uppercase mb-4 block">
              The Interface of Perinatal Care
            </span>
            <h1 className="text-4xl md:text-6xl font-semibold text-slate-900 leading-[1.05] mb-6 tracking-tight">
              Design the signal that <br /><span className="text-slate-400">secures a birth.</span>
            </h1>
            <p className="text-sm md:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed mb-10">
              Navo Health is looking for a <strong>Product Designer</strong> to join a team of engineers 
              and mathematicians. Your mission: translate complex AI diagnostics 
              into calm, actionable clinical clarity.
            </p>
          </FadeInSection>
        </div>
        
        <div className="max-w-3xl mx-auto px-6">
          <FadeInSection delay={300}>
            <SignalInterpretation />
          </FadeInSection>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-7">
            <FadeInSection>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-8 leading-tight">
                Three engineers. <br />
                Three mathematicians. <br />
                <span className="text-teal-600">Zero designers.</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-base">
                <p>
                  We build deep-tech systems that interpret cardiotocography (CTG) data. 
                  Technically, we are excellent. Humanly, we are incomplete.
                </p>
                <p>
                  Clinicians in labor wards are overwhelmed by information. 
                  The challenge isn't just "interpreting the trace"—it's delivering 
                  that interpretation in a way that is <strong>responsible, clear, and calm</strong> 
                  during a crisis.
                </p>
                <p className="text-slate-900 font-medium italic border-l-2 border-teal-500 pl-4 py-1">
                  "This role is about delivering difficult information clearly, 
                  especially when something is going wrong."
                </p>
              </div>
            </FadeInSection>
          </div>

          <div className="md:col-span-5 md:mt-12">
            <FadeInSection delay={200}>
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <PenTool className="w-4 h-4 text-teal-600" />
                  <h3 className="font-semibold text-slate-900 tracking-tight text-xs uppercase">The Design Challenge</h3>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "AI → Actionable Notifications",
                    "Complexity → Clinical Clarity",
                    "Data Noise → Emotional Calm",
                    "Context → Urgency Signals"
                  ].map((task, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-500">
                      <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInSection>
          </div>

        </div>
      </section>

      {/* Regional Focus */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-4 h-4 text-teal-600" />
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">Regional Base</span>
            </div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">Built in Southeast Asia.</h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6">
              We are specifically looking for product designers in <strong>Singapore 🇸🇬</strong> or <strong>Malaysia 🇲🇾</strong>. 
              Proximity to our core engineering hub is essential as we iterate on 
              life-critical interfaces.
            </p>
            <div className="flex items-center gap-6 text-[10px] mono text-slate-400 uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-teal-500 rounded-full"></div> SG</span>
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div> MY</span>
              <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div> GLOBAL</span>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
             <RegionalMap />
          </FadeInSection>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <div className="bg-slate-900 text-white p-10 md:p-16 rounded-[3rem] shadow-xl relative overflow-hidden group text-center">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe className="w-16 h-16" />
              </div>

              <span className="text-teal-400 font-bold tracking-[0.3em] text-[8px] uppercase mb-6 block">Final Alignment</span>
              <h2 className="text-2xl md:text-3xl font-light mb-10 italic text-teal-50 leading-relaxed">
                "Securing the future <br className="hidden md:block"/>of our children."
              </h2>
              
              <div className="flex flex-col items-center gap-6">
                <a 
                  href="mailto:joshua.yim@navo.health"
                  className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded font-bold uppercase tracking-widest text-[10px] transition-all hover:bg-teal-50 active:scale-95 shadow-lg"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Apply as Founding Designer
                </a>
                <p className="text-slate-500 text-[10px] tracking-tight">
                  Email your CV to joshua.yim@navo.health
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                 <p className="text-[8px] mono text-slate-500 uppercase tracking-[0.3em]">
                  Navo Health &bull; Singapore &bull; 2025
                </p>
                <p className="text-[8px] mono text-teal-900/40 uppercase tracking-[0.2em] mt-2">
                  Calmer Births = Safer Births
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
};

export default App;
