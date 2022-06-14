import { ChangeEvent, FormEvent, useState } from 'react';

import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import { ITask } from '../Task/interfaces';

import styles from './styles.module.css';

interface AddNewTaskProps {
  onCreateNewTask: (task: ITask) => void;
}

export function AddNewTask({ onCreateNewTask }: AddNewTaskProps) {
  const [description, setDescription] = useState('');
  const isNewTaskEmpty = description.length === 0;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    if (!isNewTaskEmpty) {
      const newTask = {
        id: uuidv4(),
        description,
        isCompleted: false,
      };

      onCreateNewTask(newTask);

      setDescription('');
    }
  }

  function handleChangeDescription(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  return (
    <form className={styles.addTaskContainer} onSubmit={handleCreateNewTask}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={handleChangeDescription}
      />
      <button
        type="submit"
        className={styles.addButton}
        disabled={isNewTaskEmpty}
      >
        Criar <PlusCircle weight="bold" size={16} />
      </button>
    </form>
  );
}
