import Image from 'next/image';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<'div'> & {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="relative mx-auto max-w-3xl py-6 md:border-x">
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      <InfiniteSlider gap={48} duration={40} durationOnHover={80}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className="flex h-14 w-36 flex-shrink-0 items-center justify-center rounded-xl bg-white dark:bg-white border border-border shadow-sm px-4 py-2"
          >
            <Image
              alt={logo.alt}
              src={logo.src}
              width={logo.width ?? 120}
              height={logo.height ?? 48}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </InfiniteSlider>

      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 left-0 h-full w-[120px]"
        direction="left"
      />
      <ProgressiveBlur
        blurIntensity={1}
        className="pointer-events-none absolute top-0 right-0 h-full w-[120px]"
        direction="right"
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}
