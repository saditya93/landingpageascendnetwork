import { FadeIn } from './ui/FadeIn';
import { AppWindow } from './ui/AppWindow';
import { HeroMockup } from './ui/HeroMockup';
import { Star, Play, ChevronRight, Github } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-32 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden min-h-screen bg-black">
      
      {/* Top Announcement Pill */}
      <FadeIn className="relative z-10 w-full mt-4 flex justify-center mb-8">
        <div className="inline-flex items-center space-x-2 hover:bg-white/[0.05] transition-colors cursor-pointer rounded-full px-3 py-1.5 text-[11px]">
           <span className="font-medium text-white/50 border border-white/10 rounded-full px-2 py-0.5 bg-white/[0.03]">Launch UI v2 is out!</span>
           <span className="font-medium text-white flex items-center">Read more <ChevronRight size={12} className="ml-0.5"/></span>
        </div>
      </FadeIn>

      <FadeIn className="relative z-10 w-full">
        <h1 className="text-[2.5rem] md:text-5xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto text-white">
          Anyone can claim success.<br className="hidden md:block" />
          <span className="text-[#3b82f6]">Few can prove it.</span>
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.2} className="mt-6 relative z-10 w-full max-w-xl mx-auto">
        <p className="text-sm md:text-base text-neutral-400 leading-relaxed font-normal">
          Build your reputation through verified achievements and unlock real opportunities.
        </p>
      </FadeIn>
      
      <FadeIn delay={0.3} className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-3 relative z-10">
        <button className="bg-white text-black px-4 py-2 rounded-md text-xs font-semibold hover:bg-neutral-200 transition-all active:scale-95 w-full sm:w-auto">
          Get Started
        </button>
        <button className="group text-white px-4 py-2 rounded-md text-xs font-medium border border-white/10 hover:bg-white/5 transition-all w-full sm:w-auto flex items-center justify-center space-x-2 bg-[#1A1A1A]">
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </button>
      </FadeIn>

      {/* Social Proof Badges below buttons */}
      <FadeIn delay={0.4} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
        <div className="flex -space-x-2">
           <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-6 h-6 rounded-full border border-black" />
           <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-6 h-6 rounded-full border border-black" />
           <img src="https://i.pravatar.cc/100?img=45" alt="User" className="w-6 h-6 rounded-full border border-black" />
           <img src="https://i.pravatar.cc/100?img=68" alt="User" className="w-6 h-6 rounded-full border border-black" />
           <img src="https://i.pravatar.cc/100?img=90" alt="User" className="w-6 h-6 rounded-full border border-black" />
        </div>
        <div className="flex flex-col items-center sm:items-start tracking-tight">
          <div className="flex space-x-0.5 text-white">
            <Star fill="currentColor" size={10} />
            <Star fill="currentColor" size={10} />
            <Star fill="currentColor" size={10} />
            <Star fill="currentColor" size={10} />
            <Star fill="currentColor" size={10} />
          </div>
          <div className="text-[10px] text-neutral-500 font-medium">
            Used by 10,000+ companies and builders
          </div>
        </div>
      </FadeIn>

      {/* Hero Visual Mockup */}
      <FadeIn delay={0.5} className="mt-16 w-full max-w-6xl relative z-0 origin-top h-[600px] overflow-visible">
        <div className="relative flex justify-center perspective-[2000px] h-full" style={{ perspective: '2000px' }}>
           {/* Blue Glow background */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[#3b82f6]/20 rounded-full blur-[140px] -z-10 mix-blend-screen pointer-events-none fade-in"></div>

           {/* Back panel right */}
           <div 
             className="absolute top-10 right-[-10%] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-[#050505] w-[80%] max-w-4xl opacity-40 blur-[2px] transform-gpu pointer-events-none"
             style={{ transform: 'rotateX(20deg) rotateY(-15deg) rotateZ(10deg) scale(0.85) translateZ(-200px)' }}
           >
             <AppWindow className="aspect-[16/10] bg-black rounded-xl border-0" hideSidebar={true}>
                <div className="w-full h-full relative bg-[#0A0A0A] overflow-hidden">
                   <img src="/challenges.png" alt="Dashboard" className="w-full h-full object-cover object-left-top opacity-80" />
                </div>
             </AppWindow>
           </div>
           
           {/* Back panel left */}
           <div 
             className="absolute top-20 left-[-10%] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-[#050505] w-[80%] max-w-4xl opacity-60 blur-[1px] transform-gpu pointer-events-none"
             style={{ transform: 'rotateX(15deg) rotateY(15deg) rotateZ(-5deg) scale(0.9) translateZ(-100px)' }}
           >
             <AppWindow className="aspect-[16/10] bg-black rounded-xl border-0" hideSidebar={true}>
                <div className="w-full h-full relative bg-[#0A0A0A] overflow-hidden">
                   <img src="/explore.png" alt="Dashboard" className="w-full h-full object-cover object-left-top opacity-90" />
                </div>
             </AppWindow>
           </div>
           
           {/* Front main panel */}
           <div 
             className="relative z-10 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_100px_rgba(59,130,246,0.15)] bg-[#050505] w-full max-w-4xl transform-gpu transition-all duration-1000 ease-out hover:rotate-x-0 mx-auto"
             style={{ transform: 'rotateX(15deg) rotateY(0deg) rotateZ(0deg) scale(0.95)' }}
           >
             <AppWindow className="aspect-[16/10] rounded-xl border-0" hideSidebar={true}>
                <HeroMockup />
             </AppWindow>
             
             {/* Glossy overlay to enhance the 3D effect */}
             <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>
           </div>
        </div>
      </FadeIn>
    </section>
  )
}

