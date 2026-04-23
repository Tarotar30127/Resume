import { TICKER_ITEMS } from '../data/content';

export default function NewsTicker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="bg-surface border-b border-white/10 py-2 overflow-hidden flex items-center sticky top-16 z-40">
      <span className="shrink-0 bg-red-600 text-white font-bold text-xs px-3 py-1 mx-4 uppercase tracking-widest rounded-sm">
        Breaking News
      </span>
      <div className="overflow-hidden flex-1 relative">
        <div className="animate-ticker flex whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="font-mono text-xs text-emerald-400 uppercase tracking-wide mx-0"
            >
              {item}
              <span className="mx-6 text-text-muted opacity-40">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
