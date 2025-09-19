import Image from "next/image";
type HeroProps = {
  name?: string;
  text?: string;
  tagline?: string;
};

export function Hero({ name, text, tagline }: HeroProps) {

  return (
    <section className="relative overflow-hidden rounded-3xl bg-brand-green text-brand-cream min-h-[360px] sm:min-h-[440px] lg:min-h-[540px]">
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/banner.png"
          alt="像老乡鸡那样做饭的插画背景"
          fill
          priority
          className="object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 bg-brand-green/70" />
      </div>
      <div className="relative mx-auto flex min-h-[360px] w-full max-w-6xl flex-col items-center justify-center gap-6 px-6 py-16 text-center sm:min-h-[440px] lg:min-h-[540px]">
        {name ? (
          <p className="text-sm uppercase tracking-[0.35em] text-brand-cream/70">
            {name}
          </p>
        ) : null}
        {text ? (
          <h1 className="font-serif text-4xl leading-snug sm:text-5xl">
            {text}
          </h1>
        ) : null}
        {tagline ? (
          <p className="max-w-xl text-base text-brand-cream/80 sm:text-lg">
            {tagline}
          </p>
        ) : null}
      </div>
    </section>
  );
}
