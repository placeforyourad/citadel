export default function Pagination({ page, info, onChange }) {
  return (
    <nav className="pagination">
      {info.prev && (
        <button type="button" className="btn" onClick={() => onChange(page - 1)}>
          ← Назад
        </button>
      )}

      <span>
        Страница {page} из {info.pages}
      </span>

      {info.next && (
        <button type="button" className="btn" onClick={() => onChange(page + 1)}>
          Вперёд →
        </button>
      )}
    </nav>
  );
}
