import { useState, useEffect } from 'react';
import { FadeIn } from './ui/FadeIn';
import { motion, AnimatePresence } from 'motion/react';

const showcases = [
  {
    title: 'Feed',
    description: 'Track your achievements and growth.',
    mockupType: 'feed'
  },
  {
    title: 'Profile',
    description: 'Build a trusted reputation.',
    mockupType: 'profile'
  },
  {
    title: 'Challenges',
    description: 'Push your limits with community challenges.',
    mockupType: 'challenges'
  },
  {
    title: 'Guilds',
    description: 'Collaborate with verified peers in exclusive groups.',
    mockupType: 'guilds'
  },
  {
    title: 'Opportunities',
    description: 'Unlock opportunities based on proven achievements.',
    mockupType: 'opportunities'
  }
];

function MockupContent({ type }: { type: string }) {
  let src = '';
  if (type === 'feed') src = '/feede.png';
  if (type === 'profile') src = '/explore.png';
  if (type === 'challenges') src = '/challenges.png';
  if (type === 'guilds') src = '/guilds.png';
  if (type === 'opportunities') src = '/opportuines.png';

  return (
    <div className="w-full h-full relative flex items-start justify-center overflow-hidden bg-[#050505]">
      <img 
        src={src} 
        alt={`${type} Mockup`} 
        className="w-full h-auto object-top"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = `
            <div class="flex flex-col items-center justify-center text-[#86868b] font-medium text-sm w-full h-full text-center px-4 aspect-[4/3] bg-[#1d1d1f]">
              Upload ${src} to public/
            </div>
          `;
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
    </div>
  );
}

export function Showcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % showcases.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="showcase" className="py-32 md:py-48 px-6 md:px-12 bg-black">
       <div className="text-center max-w-5xl mx-auto mb-20 md:mb-32">
         <FadeIn>
           <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-[#f5f5f7] leading-[1.05]">Application Showcase</h2>
           <p className="text-[#86868b] text-2xl md:text-3xl font-normal leading-tight tracking-normal">A unified ecosystem where your reputation precedes you.</p>
         </FadeIn>
       </div>

       <div className="max-w-[1200px] mx-auto">
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            
            <div className="lg:w-1/3 flex flex-col space-y-2 w-full">
              {showcases.map((showcase, i) => {
                const isActive = activeIndex === i;
                return (
                  <button 
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`text-left p-6 md:p-8 rounded-[1.5rem] transition-all duration-300 relative overflow-hidden ${
                      isActive ? 'bg-[#111111] ring-1 ring-[#333336]' : 'hover:bg-[#0a0a0a]'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeShowcaseIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#f5f5f7]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <h3 className={`text-xl md:text-2xl font-medium tracking-tight mb-1 transition-colors ${
                      isActive ? 'text-[#f5f5f7]' : 'text-[#86868b]'
                    }`}>
                      {showcase.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-32 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'
                    }`}>
                      <p className="text-[#86868b] leading-tight font-normal text-lg">
                        {showcase.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
            
            <div className="lg:w-2/3 w-full">
              <FadeIn delay={0.1}>
                 <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-black ring-1 ring-[#333336] shadow-[0_20px_80px_rgba(0,0,0,0.6)] aspect-[4/3] md:aspect-[16/10] bg-[#050505]">
                    <AnimatePresence mode="popLayout">
                       <motion.div
                         key={activeIndex}
                         initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                         animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                         exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
                         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                         className="absolute inset-0 w-full h-full flex items-start justify-center bg-[#050505]"
                       >
                         <MockupContent type={showcases[activeIndex].mockupType} />
                       </motion.div>
                    </AnimatePresence>
                 </div>
              </FadeIn>
            </div>

         </div>
       </div>
    </section>
  );
}
