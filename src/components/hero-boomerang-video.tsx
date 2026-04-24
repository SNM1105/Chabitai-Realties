type HeroBoomerangVideoProps = {
  src: string;
  poster?: string;
  className?: string;
};

export function HeroBoomerangVideo({
  src,
  poster,
  className,
}: HeroBoomerangVideoProps) {
  return (
    <video
      className={className}
      src={src}
      poster={poster}
      muted
      playsInline
      autoPlay
      loop
      preload="auto"
      aria-hidden="true"
    />
  );
}
