import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

/** Номера страниц с сокращением: 1 … 4 [5] 6 … 20.
 *  При 12 400 позициях из 1С показывать все номера невозможно. */
const buildRange = (page: number, total: number): (number | '…')[] => {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const out: (number | '…')[] = [1];
  const from = Math.max(2, page - 1);
  const to = Math.min(total - 1, page + 1);
  if (from > 2) out.push('…');
  for (let i = from; i <= to; i++) out.push(i);
  if (to < total - 1) out.push('…');
  out.push(total);
  return out;
};

export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onChange }) => {
  if (totalPages <= 1) return null;

  const btn =
    'min-w-9 h-9 px-3 grid place-items-center rounded-xl text-xs font-bold transition-colors border';
  const idle = 'bg-white border-slate-200 text-slate-700 hover:border-orange-500 hover:text-orange-600';
  const active = 'bg-orange-600 border-orange-600 text-white';
  const disabled = 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed';

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 pt-8" aria-label="Страницы каталога">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className={`${btn} ${page === 1 ? disabled : idle}`}
        aria-label="Предыдущая страница"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {buildRange(page, totalPages).map((item, i) =>
        item === '…' ? (
          <span key={`gap-${i}`} className="px-1 text-slate-400 select-none">
            …
          </span>
        ) : (
          <button
            key={item}
            onClick={() => onChange(item)}
            aria-current={item === page ? 'page' : undefined}
            className={`${btn} ${item === page ? active : idle}`}
          >
            {item}
          </button>
        )
      )}

      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className={`${btn} ${page === totalPages ? disabled : idle}`}
        aria-label="Следующая страница"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};
