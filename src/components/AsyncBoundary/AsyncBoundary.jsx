import ErrorMessage from '../ErrorMessage/ErrorMessage';

export default function AsyncBoundary({ loading, error, onRetry, children }) {
  if (loading) return <div className="spinner" />;

  if (error) {
    return (
      <ErrorMessage text="Не удалось загрузить данные" onRetry={onRetry} />
    );
  }

  return children;
}
