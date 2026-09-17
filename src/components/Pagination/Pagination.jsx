import { Fragment } from 'react';

function getPages(current, total) {
  let pages = new Set([1, current- 1, current, current+1, total]
    .filter(p => p >= 1 && p <= total));
  return Array.from(pages);
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
