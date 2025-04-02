"use client";

import { useTasks } from "../context/TaskContext";

export default function TaskItem({
  task,
}: {
  task: { id: number; title: string; completed: boolean };
}) {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <li className="flex justify-between items-center bg-gray-100 p-2 rounded">
      <span className={task.completed ? "line-through text-gray-500" : ""}>
        {task.title}
      </span>
      <div className="flex gap-2">
        <button onClick={() => toggleTask(task.id)} className="text-green-600">
          ✅
        </button>
        <button onClick={() => deleteTask(task.id)} className="text-red-600">
          ❌
        </button>
      </div>
    </li>
  );
}
