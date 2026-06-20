import { FadeIn } from './ui/FadeIn';
import { AppWindow } from './ui/AppWindow';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden min-h-screen bg-black">
      
      {/* Top Pill - Ultra minimal */}
      <FadeIn className="relative z-10 w-full mt-10 flex justify-center mb-8">
        <a href="#" className="inline-flex items-center space-x-2 transition-colors cursor-pointer text-[#86868b] hover:text-white">
           <span className="font-medium text-xs tracking-widest uppercase">Ascend v2.0 is out</span>
           <ChevronRight size={14} className="ml-1"/>
        </a>
      </FadeIn>

      <FadeIn className="relative z-10 w-full max-w-6xl mx-auto">
        <h1 className="text-[4rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.5rem] font-medium tracking-tight leading-[1.05] text-[#f5f5f7]">
          The network<br className="hidden md:block" />
          built on proof.
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.1} className="mt-6 relative z-10 w-full max-w-3xl mx-auto px-4">
        <p className="text-2xl md:text-3xl text-[#86868b] leading-tight font-normal tracking-tight">
          Stop claiming. Start proving. Build a verified reputation through real achievements, and unlock top-tier opportunities.
        </p>
      </FadeIn>
      
      <FadeIn delay={0.2} className="mt-12 flex flex-col items-center justify-center space-y-6 relative z-10 w-full">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full justify-center">
           <a  
            href="/AscendNetwork-Setup.exe" 
            download
            className="bg-[#f5f5f7] text-black px-8 py-4 rounded-full text-[17px] font-medium hover:bg-white transition-colors w-full sm:w-auto flex items-center justify-center cursor-pointer"
          >
            <span>Download for Windows</span>
          </a>
          <a  
            href="#learn-more" 
            className="text-[#f5f5f7] hover:text-white px-8 py-4 rounded-full text-[17px] font-medium transition-colors w-full sm:w-auto flex items-center justify-center cursor-pointer -tracking-wide"
          >
            <span>Learn more</span>
            <ChevronRight size={18} className="ml-1" />
          </a>
        </div>
        <div className="text-[#86868b] text-sm mt-8 font-medium">
          Mac and Linux versions coming soon.
        </div>
      </FadeIn>

      {/* Hero Visual Mockup - Pure, no-glow Apple style bezel */}
      <FadeIn delay={0.3} className="mt-20 w-full max-w-[1200px] relative z-0 mb-10">
        <div className="relative flex justify-center w-full">
           <div className="relative z-10 w-full rounded-[2rem] overflow-hidden bg-black ring-1 ring-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] mx-auto">
             <div className="w-full relative overflow-hidden flex items-start justify-center bg-[#050505]">
                 <img src="/feede.png" alt="Feed Dashboard mockup" className="w-full h-auto object-top" />
                 {/* Bottom Fade out into black */}
                 <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />
             </div>
           </div>
        </div>
      </FadeIn>
    </section>
  )
}



