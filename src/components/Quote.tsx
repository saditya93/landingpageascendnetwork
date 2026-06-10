import { FadeIn } from './ui/FadeIn';

export function Quote() {
  return (
    <section className="py-40 px-6 md:px-12 bg-[#050505] flex items-center justify-center text-center">
      <FadeIn className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-white/50">
          Anyone can generate content.
          <br/>
          <span className="text-white">Your achievements are what make you credible.</span>
        </h2>
      </FadeIn>
    </section>
  );
}
