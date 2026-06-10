import React from 'react';
import { FadeIn } from './ui/FadeIn';

const steps = [
  {
    step: '01',
    title: 'Share an achievement.',
  },
  {
    step: '02',
    title: 'Verify your work.',
  },
  {
    step: '03',
    title: 'Earn XP and reputation.',
  },
  {
    step: '04',
    title: 'Unlock opportunities.',
  }
];

export function HowItWorks() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-start lg:justify-between">
        <FadeIn className="lg:w-1/3 mb-16 lg:mb-0 lg:sticky lg:top-32">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">How It Works</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            The foundation of Ascend is built on transparency and proof. Here is how you climb the ranks.
          </p>
        </FadeIn>

        <div className="lg:w-1/2 space-y-12">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
            <FadeIn delay={i * 0.15} className="relative pl-12 md:pl-20">
               {/* Line connector */}
               {i !== steps.length - 1 && (
                 <div className="absolute left-[11px] md:left-[19px] top-12 bottom-[-48px] w-[2px] bg-white/5"></div>
               )}
               {/* Step number circle */}
               <div className="absolute left-0 top-1 w-6 h-6 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs md:text-sm font-medium text-white/50">
                 {step.step}
               </div>
               
               <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">{step.title}</h3>
               {/* Subtle decor for each step to make it feel rich */}
               <div className="h-16 w-full lg:w-3/4 bg-white/[0.02] border border-white/5 rounded-xl mt-6 hidden sm:block pointer-events-none"></div>
            </FadeIn>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
