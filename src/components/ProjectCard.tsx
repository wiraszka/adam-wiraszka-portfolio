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
      className="flex flex-col rounded-sm bg-stone-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div data-testid="project-image" className="aspect-square bg-white" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-stone-800 mb-2">{name}</h3>
        <p className="text-sm text-stone-500 leading-relaxed flex-1 mb-4">{description}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs text-stone-400">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
