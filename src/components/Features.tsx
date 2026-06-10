import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { ShieldCheck, UserCheck, Briefcase, EyeOff } from 'lucide-react';

const features = [
  {
    title: 'Verified Achievements',
    description: 'Every achievement requires proof before earning meaningful XP and reputation.',
    icon: ShieldCheck,
  },
  {
    title: 'Trust-Based Reputation',
    description: 'Build credibility through consistency, achievements, and verified work.',
    icon: UserCheck,
  },
  {
    title: 'Opportunity Network',
    description: 'Unlock internships, freelance projects, startup opportunities, and more.',
    icon: Briefcase,
  },
  {
    title: 'Privacy First',
    description: 'Users control profile visibility, activity visibility, and discovery settings.',
    icon: EyeOff,
  },
];

export function Features() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505] relative">
       <div className="max-w-6xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, i) => (
              <React.Fragment key={i}>
              <FadeIn delay={i * 0.1} className="flex flex-col space-y-5">
                 <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white">
                   <feature.icon strokeWidth={1.5} size={24} />
                 </div>
                 <h3 className="text-lg font-medium text-white">{feature.title}</h3>
                 <p className="text-zinc-400 leading-relaxed text-sm">{feature.description}</p>
              </FadeIn>
              </React.Fragment>
            ))}
         </div>
       </div>
    </section>
  )
}
