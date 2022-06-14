import { ClipboardText } from 'phosphor-react';
import styles from './styles.module.css';

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <ClipboardText weight="light" size={56} />
      <p className={styles.highlightText}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
