import styles from './Card.module.css';

interface Props {
  title: string;
  subtitle: string;
  onClick: () => void;
}

export default function Card({ title, subtitle, onClick }: Props): JSX.Element {
  return (
    <section
      className={styles.card}
      onClick={onClick}
      role="button"
      onKeyPress={onClick}
      tabIndex={0}
    >
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </section>
  );
}
