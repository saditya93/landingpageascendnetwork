import { FadeIn } from './ui/FadeIn';
import { Download } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black border-t border-white/5 flex flex-col items-center text-center relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
      
      <FadeIn className="relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">
          Ready to build your reputation?
        </h2>
        
        <button className="mt-10 bg-white text-black px-10 py-5 rounded-full font-medium text-lg hover:bg-neutral-200 transition-transform active:scale-95 flex items-center justify-center space-x-3 mx-auto shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)]">
          <Download size={20} />
          <span>Download Ascend for Windows</span>
        </button>
      </FadeIn>
    </section>
  )
}
