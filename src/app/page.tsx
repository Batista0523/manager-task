import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-8 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-extrabold mb-4">Task Manager</h1>
      <p className="text-lg text-center max-w-lg mb-6">
        Stay organized and boost your productivity with Task Manager.  
        Add, track, and complete your daily tasks seamlessly.  
        Keep your workflow smooth and efficient!
      </p>
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <TaskForm />
      </div>
      <div className="w-full max-w-md mt-6">
        <TaskList />
      </div>
    </div>
  );
}
