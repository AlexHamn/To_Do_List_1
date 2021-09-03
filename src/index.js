import './style.css';
import clearElement, {
  taskInput, tasks, LOCAL_STORAGE_TASKS_KEY,
  updateStatus, clearCompleted, resetTasks,
  updateTask, clearOverwrite,
} from './statusUpdate';

const newTaskForm = document.querySelector('[data-new-task-form]');
const tasksList = document.getElementById('tasks');

taskInput.value = null;

function save() {
  localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));
}

const taskTemplate = document.getElementById('taskTemplate');

function renderTask() {
  clearElement(tasksList);
  tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkBox = taskElement.querySelector('input');
    const text = taskElement.getElementById('txt');
    const form = taskElement.getElementById('form');

    checkBox.id = task.id;
    checkBox.checked = task.complete;

    text.htmlFor = task.id;
    text.value = (task.task);

    form.id = task.id;

    form.addEventListener('submit', (e) => {
      task.overwrite = true;
      updateTask(e);
      clearOverwrite();
    });
    form.addEventListener('submit', renderTask);

    tasksList.appendChild(taskElement);
  });
  save();
}

newTaskForm.addEventListener('submit', updateStatus);
newTaskForm.addEventListener('submit', renderTask);

tasksList.addEventListener('click', (e) => {
  const selectedTask = tasks.find((task) => task.id === e.target.id);
  if (selectedTask) {
    selectedTask.complete = e.target.checked;
    save();
  }
});

const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', () => {
  clearCompleted();
  save();
  renderTask();
});

const resetList = document.getElementById('resetList');
resetList.addEventListener('click', () => {
  resetTasks();
  localStorage.clear();
  renderTask();
});

renderTask();