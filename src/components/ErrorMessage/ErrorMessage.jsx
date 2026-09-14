export default function ErrorMessage({ text, onRetry }) {
  return (
    <div className="message">
      <p>{text}</p>
      <button type="button" className="btn btn--primary" onClick={onRetry}>
        Повторить
      </button>
    </div>
  );
}
