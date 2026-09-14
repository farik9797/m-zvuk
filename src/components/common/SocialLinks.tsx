import React from 'react';
import { activeSocials } from '../../data/company';

/** Социальные кнопки (пункт 4 брифа).
 *  Рендерятся только те сети, для которых в src/data/company.ts указан URL:
 *  пустая ссылка на боевом сайте хуже, чем её отсутствие. */
export const SocialLinks: React.FC<{ variant?: 'dark' | 'light'; className?: string }> = ({
  variant = 'dark',
  className = '',
}) => {
  const socials = activeSocials();
  if (socials.length === 0) return null;

  const base =
    variant === 'dark'
      ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-orange-600 hover:border-orange-600 hover:text-white'
      : 'bg-white border-slate-200 text-slate-400 hover:border-orange-500 hover:text-orange-600';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {socials.map(s => (
        <a
          key={s.id}
          href={s.url}
          target="_blank"
          rel="noreferrer"
          aria-label={s.label}
          title={s.label}
          className={`w-9 h-9 grid place-items-center rounded-xl border transition-colors ${base}`}
        >
          <img
            src={`https://cdn.simpleicons.org/${s.id}/${variant === 'dark' ? 'FFFFFF' : '0F172A'}`}
            alt=""
            className="w-4 h-4"
          />
        </a>
      ))}
    </div>
  );
};
