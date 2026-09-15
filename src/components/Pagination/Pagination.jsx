import { Fragment } from 'react';

function getPages(current, total) {
  const pages = new Set([1, total]);

  for (let page = current - 1; page <= current + 1; page += 1) {
    if (page >= 1 && page <= total) pages.add(page);
  }

  return [...pages].sort((a, b) => a - b);
}

export default function Pagination({ page, info, onChange }) {
  const pages = getPages(page, info.pages);

  return (
    <nav className="pagination" aria-label="Страницы">
      {info.prev && (
        <button type="button" className="btn" onClick={() => onChange(page - 1)}>
          ← Назад
        </button>
      )}

      <span className="pagination__counter">
        Страница {page} из {info.pages}
      </span>

      {pages.map((item, index) => (
        <Fragment key={item}>
          {index > 0 && item - pages[index - 1] > 1 && (
            <span className="pagination__gap">…</span>
          )}

          <button
            type="button"
            className={`btn pagination__page${item === page ? ' btn--primary' : ''}`}
            aria-current={item === page ? 'page' : undefined}
            disabled={item === page}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        </Fragment>
      ))}

      {info.next && (
        <button type="button" className="btn" onClick={() => onChange(page + 1)}>
          Вперёд →
        </button>
      )}
    </nav>
  );
}
