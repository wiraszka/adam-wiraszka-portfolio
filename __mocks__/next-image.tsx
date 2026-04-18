interface MockImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}

export default function MockImage({ src, alt, className }: MockImageProps) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />;
}
