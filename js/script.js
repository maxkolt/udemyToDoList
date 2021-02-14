const form = document.querySelector('#form');
const taskList = document.querySelector('.collection');
const btn = document.querySelector('#two');
const taskInput = document.querySelector('#task');


function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    btn.addEventListener('click', clearTasks);
}
loadEventListeners();

function addTask(e) {
    if(taskInput.value === '') {
    }
    const li = document.createElement('li');
    li.className = 'collection-item';
    //создать текстовый узел и добавить его к li
   li.appendChild(document.createTextNode(taskInput.value));
    // создать новый элемент ссылки
    const link = document.createElement('a');
    // добавить класс
   link.className = 'delete-item secondary-content';
    // добавить li к ul
    taskList.appendChild(li);
    // очистить поле ввода
   taskInput.value = '';

    e.preventDefault();
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        {
            e.target.parentElement.parentElement.remove();
       }
   }
}

function clearTasks() {
    taskList.innerHTML = '';
}
