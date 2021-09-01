import './style.css';
import clearElement from './statusUpdate';

const newTaskForm = document.querySelector('[data-new-task-form]');
const tasksList = document.getElementById('tasks');

const LOCAL_STORAGE_TASKS_KEY = 'tasks.list';
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) || [];

const taskInput = document.getElementById('addToList');
taskInput.value = null;

function save() {
  localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));
}

function createTask(task) {
  return { id: Date.now().toString(), task, complete: false };
}

const taskTemplate = document.getElementById('taskTemplate');

function renderTask() {
  clearElement(tasksList);
  tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkBox = taskElement.querySelector('input');
    const label = taskElement.querySelector('label');

    checkBox.id = task.id;
    checkBox.checked = task.complete;

    label.htmlFor = task.id;
    label.append(task.task);
    tasksList.appendChild(taskElement);
  });
  save();
}

newTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = taskInput.value;
  if (task == null || task === '') return;
  const newTask = createTask(task);
  tasks.push(newTask);
  taskInput.value = null;
  renderTask();
});

tasksList.addEventListener('click', (e) => {
  const selectedTask = tasks.find((task) => task.id === e.target.id);
  selectedTask.complete = e.target.checked;
  save();
});

const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
  tasks = tasks.filter((task) => !task.complete);
  save();
  renderTask();
});

const resetList = document.getElementById('resetList');
resetList.addEventListener('click', () => {
  tasks = null;
  localStorage.clear();
  renderTask();
});

renderTask();