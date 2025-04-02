"use client";
import { useTasks } from '../context/TaskContext'
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks } = useTasks();

  return (
    <ul className="mt-4 space-y-2">
      {tasks.length === 0 ? (
        <p>There is no Task</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </ul>
  );
}
