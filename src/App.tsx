import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ITask } from './components/Task/interfaces';

import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { AddNewTask } from './components/AddNewTask';
import { EmptyTasks } from './components/EmptyTasks';

import styles from './App.module.css';
import './global.css';

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: uuidv4(),
      description: 'Estudar Javascript',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      description: 'Estudar Typescript',
      isCompleted: false,
    },
    {
      id: uuidv4(),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed fuga aperiam provident ex accusantium porro numquam atque tenetur amet, eaque cupiditate quas distinctio ab iusto libero nostrum voluptates blanditiis est.',
      isCompleted: false,
    },
  ]);
  const [completedTasks, setCompletedTasks] = useState<ITask[]>([]);

  function createTask(newTask: ITask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);
    const deleteCompletedTask = completedTasks.filter((task) => task.id !== id);

    setTasks(tasksWithoutDeletedOne);
    setCompletedTasks(deleteCompletedTask);
  }

  function filterTasksCompleted() {
    const filteredTasks = tasks.filter((task) => task.isCompleted !== false);
    setCompletedTasks(filteredTasks);
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <AddNewTask onCreateNewTask={createTask} />
        <div className={styles.tasksContainer}>
          <div className={styles.info}>
            <div className={styles.createdTasks}>
              <span>Tarefas criadas</span>
              <span className={styles.counter}>{tasks.length}</span>
            </div>
            <div className={styles.completedTasks}>
              <span>Concluídas</span>
              <span className={styles.counter}>
                {completedTasks.length} de {tasks.length}
              </span>
            </div>
          </div>

          <main className={styles.tasks}>
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onDeleteTask={deleteTask}
                onFilterTasksCompleted={filterTasksCompleted}
              />
            ) : (
              <EmptyTasks />
            )}
          </main>
        </div>
      </div>
    </>
  );
}
