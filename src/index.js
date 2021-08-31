import _ from 'lodash';
import './style.css';

const newTaskForm = document.querySelector('[data-new-task-form]');
const tasksList = document.getElementById('tasks');

const LOCAL_STORAGE_TASKS_KEY = 'tasks.list';
let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)) || [];

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    console.log('done')
}

const taskInput = document.getElementById('addToList');
taskInput.value = null;

newTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const task = taskInput.value;
    if (task == null || task === '') return;
    const newTask = createTask(task);
    tasks.push(newTask);
    taskInput.value = null;
    console.log(tasks);
    renderTasks();
})

tasksList.addEventListener('click', e => {
    const selectedTask = tasks.find(task => task.id === e.target.id)
    selectedTask.complete = e.target.checked;
    save();
})

function createTask(task) {
    return {id: Date.now().toString(), task: task, complete: false}
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(tasks));
}

const taskTemplate = document.getElementById('taskTemplate');

function renderTasks() {
    clearElement(tasksList);
    tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true);
        const checkBox = taskElement.querySelector('input');
        const label = taskElement.querySelector('label');

        checkBox.id = task.id;
        checkBox.checked = task.complete;

        label.htmlFor = task.id;
        label.append(task.task);
        tasksList.appendChild(taskElement);
    })
    save();
}

const clearButton = document.getElementById('clearButton');

function tst() {
    clearElement(tasksList);
    save();
}

clearButton.addEventListener('click', e => {
    tasks = tasks.filter(task => !task.complete);
    save();
    renderTasks();
});

const resetList = document.getElementById('resetList');
resetList.addEventListener('click', e => {
    tasks = null;
    localStorage.clear();
    renderTasks();
})

renderTasks();