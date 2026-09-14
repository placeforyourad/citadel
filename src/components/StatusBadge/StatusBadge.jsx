import { CHARACTER_STATUS_LABELS } from '../../constants/characters';
import styles from './StatusBadge.module.css';

export default function StatusBadge({ status }) {
  const key = status.toLowerCase();

  return (
    <span className={styles.badge}>
      <span className={`${styles.dot} ${styles[key] ?? styles.unknown}`} aria-hidden="true" />
      {CHARACTER_STATUS_LABELS[key] ?? status}
    </span>
  );
}
