interface CertificateCardProps {
  name: string;
  issuer: string;
  date: string;
  url: string;
}

export default function CertificateCard({ name, issuer, date, url }: CertificateCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col rounded-sm bg-stone-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div
        data-testid="certificate-logo"
        className="aspect-square bg-white flex items-center justify-center"
      />
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-stone-800 leading-snug">{name}</h3>
        <p className="text-sm text-stone-500">{issuer}</p>
        <p className="text-xs font-mono text-stone-400">{date}</p>
      </div>
    </a>
  );
}
