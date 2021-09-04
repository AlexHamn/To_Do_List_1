export default function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

export const taskInput = document.getElementById('addToList');
export const LOCAL_STORAGE_TASKS_KEY = 'tasks.list';
/* eslint-disable import/no-mutable-exports */
export let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) || [];

export function createTask(task) {
  return {
    id: Date.now().toString(), task, complete: false, overwrite: false,
  };
}

export const updateStatus = (e) => {
  e.preventDefault();
  const task = taskInput.value;
  if (task == null || task === '') return;
  const newTask = createTask(task);
  tasks.push(newTask);
  taskInput.value = null;
};

export const updateTask = (e) => {
  const task = e.target.children[0].value;
  tasks = tasks.filter((task) => task);
  if (task !== null || task !== '') {
    const newTask = createTask(task);
    tasks.push(newTask);
  }
};

export function clearCompleted() {
  tasks = tasks.filter((task) => !task.complete);
}

export function clearOverwrite() {
  tasks = tasks.filter((task) => !task.overwrite);
}

export function resetTasks() {
  tasks = [];
}