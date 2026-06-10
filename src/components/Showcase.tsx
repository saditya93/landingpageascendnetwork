import { FadeIn } from './ui/FadeIn';
import { AppWindow } from './ui/AppWindow';

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
    <div className="w-full h-full relative bg-[#050505] flex items-center justify-center overflow-hidden">
      <img 
        src={src} 
        alt={`${type} Mockup`} 
        className="w-full h-full object-cover object-left-top"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = `
            <div class="flex flex-col items-center justify-center text-zinc-500 font-mono text-sm w-full h-full text-center px-4">
              <svg class="w-8 h-8 mb-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              Upload ${src} to public/
            </div>
          `;
        }}
      />
    </div>
  );
}

export function Showcase() {
  return (
    <section className="py-32 py-40 px-6 md:px-12 bg-black border-t border-white/5 space-y-40">
       <div className="text-center max-w-3xl mx-auto mb-20">
         <FadeIn>
           <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Application Showcase</h2>
           <p className="text-zinc-400 text-lg">A unified ecosystem where your reputation precedes you.</p>
         </FadeIn>
       </div>

       {showcases.map((showcase, i) => (
         <div key={i} className={`max-w-6xl mx-auto flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
           <div className={`lg:w-1/3 space-y-6 ${i % 2 === 1 ? 'lg:pl-16' : 'lg:pr-16'}`}>
             <FadeIn>
                <div className="text-zinc-500 font-medium tracking-widest text-sm uppercase mb-4">Module {i + 1}</div>
                <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight">{showcase.title}</h3>
                <p className="mt-4 text-zinc-400 text-lg leading-relaxed">{showcase.description}</p>
             </FadeIn>
           </div>
           
           <div className="lg:w-2/3 w-full">
             <FadeIn delay={0.2}>
               <AppWindow className="aspect-[4/3] md:aspect-[16/10]" hideSidebar={true}>
                 <MockupContent type={showcase.mockupType} />
               </AppWindow>
             </FadeIn>
           </div>
         </div>
       ))}
    </section>
  );
}
