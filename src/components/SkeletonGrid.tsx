export default function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-40 rounded-sm bg-stone-200 animate-pulse" />
      ))}
    </div>
  );
}
