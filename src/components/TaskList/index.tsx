import { Task } from '../Task';

import { ITask } from '../Task/interfaces';

interface TaskListProps {
  tasks: ITask[];
  onDeleteTask: (taskId: string) => void;
  onFilterTasksCompleted: () => void;
}

export function TaskList({
  tasks,
  onDeleteTask,
  onFilterTasksCompleted,
}: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={() => onDeleteTask(task.id)}
          onFilterTasksCompleted={onFilterTasksCompleted}
        />
      ))}
    </ul>
  );
}
