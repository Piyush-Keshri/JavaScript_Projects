
//Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners
loadEventListeners();

//Load all event Listeners
function loadEventListeners() {
  //DOM load event
  document.addEventListener('DOMContentLoaded', getTasks);

  //Add Task event
  form.addEventListener('submit', addTask);

  //Remove Task event
  taskList.addEventListener('click', removeTask);

  //Clear all tasks at once Event
  clearBtn.addEventListener('click', clearTasks);
  //Filter Task Events.
  filter.addEventListener('keyup', filterTasks);
}

//Get Tasks From Local Storage
function getTasks() {   

  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task){
    //Create li element when add task is pressed
    const li = document.createElement('li');

    //Add a class to li
    li.className = 'collection-item';

    //Create a text node and to li
    li.appendChild(document.createTextNode(task));

    //Create new link element
    const link = document.createElement('a');

    //Add class to li
    link.className = 'delete-item secondary-content';

    //Add icon Element
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);
  });

}

//Add Task Function
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add A Task');
  }

  else {
    //Create li element when add task is pressed
    const li = document.createElement('li');

    //Add a class to li
    li.className = 'collection-item';

    //Create a text node and to li
    li.appendChild(document.createTextNode(taskInput.value));

    //Create new link element
    const link = document.createElement('a');

    //Add class to li
    link.className = 'delete-item secondary-content';

    //Add icon Element
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append the link to li
    li.appendChild(link);

    //Append li to ul
    taskList.appendChild(li);

    //Store Tasks in Local storage
    storeTaskInLocalStorage(taskInput.value);

    //Clear Input
    taskInput.value = '';
  }
  e.preventDefault();
}

//Store Task 
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove Task Function
function removeTask(e) {
  if (e.target.className === 'fa fa-remove') {
    if (confirm('Are You Sure')) {
      e.target.parentElement.parentElement.remove();

      //Remove From local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

//Remove Task From Local Storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clear Tasks at Once
function clearTasks(e) {
  if (confirm('This action will Erase All The Tasks')) {
    //taskList.innerHTML = '';
    //While loop is faster approach
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }
  clearTasksFromLocalStorage();
}

//Clear Tasks From Local Storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//Filter Tasks

function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(
    function (task) {
      const item = task.firstChild.textContent;
      if (item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      }
      else {
        task.style.display = 'none';
      }
    });
}
