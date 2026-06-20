import { FadeIn } from './ui/FadeIn';
import { motion } from 'motion/react';

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
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />
    </div>
  );
}

export function Showcase() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-black space-y-48">
       <div className="text-center max-w-5xl mx-auto mb-32">
         <FadeIn>
           <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 text-[#f5f5f7] leading-[1.05]">Application Showcase</h2>
           <p className="text-[#86868b] text-2xl md:text-3xl font-normal leading-tight tracking-normal">A unified ecosystem where your reputation precedes you.</p>
         </FadeIn>
       </div>

       <div className="space-y-40 md:space-y-56">
       {showcases.map((showcase, i) => (
         <div key={i} className={`max-w-[1200px] mx-auto flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 md:gap-24`}>
           <div className={`lg:w-1/3 flex flex-col space-y-6 ${i % 2 === 1 ? 'lg:pl-8' : 'lg:pr-8'}`}>
             <FadeIn>
                <div className="text-[#86868b] font-medium text-sm tracking-widest uppercase mb-4">{showcase.title}</div>
                <h3 className="text-[2.5rem] md:text-[3.5rem] font-medium text-[#f5f5f7] tracking-tight leading-tight mb-6">{showcase.title}</h3>
                <p className="text-[#86868b] text-xl leading-tight font-normal">{showcase.description}</p>
             </FadeIn>
           </div>
           
           <div className="lg:w-2/3 w-full">
             <FadeIn delay={0.1}>
               <motion.div 
                 whileHover={{ y: -10, scale: 1.01 }}
                 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                 className="relative rounded-[2rem] overflow-hidden bg-black ring-1 ring-[#333336]"
               >
                   <div className="w-full relative flex items-start justify-center bg-black">
                     <MockupContent type={showcase.mockupType} />
                   </div>
               </motion.div>
             </FadeIn>
           </div>
         </div>
       ))}
       </div>
    </section>
  );
}
