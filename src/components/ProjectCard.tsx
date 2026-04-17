interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export default function ProjectCard({ name, description, url, tags }: ProjectCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col p-6 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-gray-300 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-4">
          {name}
        </h3>
        <ExternalLinkIcon />
      </div>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">{description}</p>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-gray-300 group-hover:text-blue-400 transition-colors mt-0.5"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
