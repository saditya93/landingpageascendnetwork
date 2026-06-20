import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { ShieldCheck, UserCheck, Briefcase, EyeOff } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    title: 'Verified Achievements',
    description: 'Every achievement requires cryptographic or manual proof before earning meaningful XP and reputation across the network.',
    icon: ShieldCheck,
  },
  {
    title: 'Trust-Based Reputation',
    description: 'Build absolute credibility through consistency, peer-validated achievements, and an immutable work history.',
    icon: UserCheck,
  },
  {
    title: 'Opportunity Network',
    description: 'Unlock internships, exclusive freelance projects, and startup opportunities based purely on your proven capabilities.',
    icon: Briefcase,
  },
  {
    title: 'Privacy by Default',
    description: 'Complete user control over profile visibility, activity streams, and algorithmic discovery parameters.',
    icon: EyeOff,
  },
];

export function Features() {
  return (
    <section id="learn-more" className="py-40 px-6 md:px-12 bg-black relative">
       <div className="max-w-[1200px] mx-auto">
         
         <div className="mb-24 text-center">
           <FadeIn>
             <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-[#f5f5f7] mb-6 leading-[1.05]">Built for those who execute.</h2>
             <p className="text-[#86868b] text-2xl md:text-3xl font-normal max-w-4xl mx-auto leading-tight tracking-tight">The entire platform is engineered around absolute proof of work. Meaningful careers are built here.</p>
           </FadeIn>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                 <motion.div 
                   whileHover={{ y: -8, scale: 1.02 }}
                   transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                   className="h-full bg-black rounded-[2rem] p-10 md:p-14 border border-[#333336] overflow-hidden transition-colors hover:bg-[#111111]"
                 >
                   
                   <div className="w-16 h-16 flex items-center justify-center text-[#f5f5f7] mb-8">
                     <feature.icon strokeWidth={1} size={40} />
                   </div>
                   
                   <h3 className="text-3xl font-medium text-[#f5f5f7] tracking-tight mb-4">{feature.title}</h3>
                   <p className="text-[#86868b] leading-tight text-xl font-normal">{feature.description}</p>
                 </motion.div>
              </FadeIn>
            ))}
         </div>
       </div>
    </section>
  )
}
