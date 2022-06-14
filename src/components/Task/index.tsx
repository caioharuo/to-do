import { Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './styles.module.css';

import { ITask } from './interfaces';

interface TaskProps {
  task: ITask;
  onDeleteTask: (taskId: string) => void;
  onFilterTasksCompleted: () => void;
}

export function Task({
  task,
  onDeleteTask,
  onFilterTasksCompleted,
}: TaskProps) {
  const [isCompleted, setIsCompleted] = useState(false);

  function handleToggleIsCompleted() {
    task.isCompleted = !task.isCompleted;
    setIsCompleted(task.isCompleted);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function completeTask() {
    handleToggleIsCompleted();
    onFilterTasksCompleted();
  }

  return (
    <li className={`${styles.task} ${isCompleted && styles.taskCompleted}`}>
      <button className={styles.checkButton} onClick={completeTask} />
      <p className={styles.textCheck}>{task.description}</p>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </li>
  );
}
